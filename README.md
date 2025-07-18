# Simple Leap Year Checker

A modern React component for checking leap years with real-time validation, responsive design, and educational content.

## 🎯 Features

- **Real-time Validation**: Input is validated as you type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: Color-coded results (green for leap years, orange for non-leap years)
- **Keyboard Support**: Press Enter to check the year
- **Educational Content**: Expandable section explaining leap year calculation rules
- **Error Handling**: Clear error messages for invalid inputs
- **Modern UI**: Clean, card-based design with gradient background
- **Accessibility**: Proper labels, ARIA attributes, and semantic HTML

## 📸 Demo

![Leap Year Checker Demo](./Media/LeapYear.png)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/leap-year-checker.git
cd leap-year-checker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📖 Usage

1. Enter any year in the input field
2. The component will automatically validate and check if it's a leap year
3. Click "Check Leap Year" button or press Enter to confirm
4. View the result with visual feedback and additional information
5. Use the clear button (✕) to reset the input

## 🧮 How Leap Years Are Calculated

A year is a leap year if:
- It's divisible by 4 AND not divisible by 100
- OR it's divisible by 400

### Examples:
- **2024**: Leap year (divisible by 4, not by 100)
- **1900**: Not a leap year (divisible by 100, not by 400)
- **2000**: Leap year (divisible by 400)

## 🛠️ Technologies Used

- React 18
- JavaScript (ES6+)
- HTML5
- CSS3 (Inline styles for universal compatibility)

## 📁 Project Structure

```
leap-year-checker/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── LeapYear.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── Media/
│   └── LeapYear.png
└── README.md
```

## 🔧 Component API

### LeapYear Component

The main component that renders the leap year checker interface.

**Props**: None (self-contained component)

**State**:
- `year`: Current input value
- `result`: Object containing year and leap year status
- `error`: Error message for invalid inputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the React team for the amazing framework
- Inspired by the need for educational programming tools
- Built with accessibility and user experience in mind

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/leap-year-checker](https://github.com/yourusername/leap-year-checker)
