# Import necessary libraries
import pandas as pd # type: ignore
from flask import Flask, request, render_template
from sklearn.feature_extraction.text import TfidfVectorizer # type: ignore
from sklearn.model_selection import train_test_split # type: ignore
from sklearn.ensemble import RandomForestClassifier # type: ignore
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import LabelEncoder

# Initialize the Flask app
app = Flask(__name__)

# Load the dataset from the CSV file
df = pd.read_csv('medicen.csv', encoding='cp1252')

# Vectorization using TF-IDF for Symptoms
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['Symptoms'])

# Label Encoding for Remedies
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(df['Herbal/Ayurvedic Remedy'])

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the RandomForestClassifier
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Define a function to predict remedy based on symptoms
def predict_remedy(symptoms):
    symptoms_vectorized = vectorizer.transform([symptoms])
    predicted = model.predict(symptoms_vectorized)
    return label_encoder.inverse_transform(predicted)[0]

# Flask route to render the input form and display the remedy
@app.route("/", methods=["GET", "POST"])
def remedy_finder():
    if request.method == "POST":
        # Get the symptom input from the form
        symptom_input = request.form.get("symptoms")
        
        # Predict the remedy
        if symptom_input:
            predicted_remedy = predict_remedy(symptom_input)
            return render_template("index.html", remedy=predicted_remedy, symptoms=symptom_input)
    
    # Render the form template by default
    return render_template("index.html")

# Run the Flask app
if __name__ == "_main_":
    app.run(debug=True)