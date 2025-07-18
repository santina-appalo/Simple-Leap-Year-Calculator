function DayTwo(){
    let name = "I am santina";

    let fun = () => {
        alert("hii🙌");
    };
return(
    <>
    <div
    style={{
        backgroundColor:"green",
        color:"white",
        padding:"30px",
    }}
    >
        <h2>Hello!  {name}</h2>
    </div>
    <p style={{
        backgroundColor:"#B8FFBF",
        padding:"50px",
    }}>
        Trees are an essential resource for everyone. 
        They provide habitat for various species, clean the air and produce oxygen. 
        Besides, they give us shade in the summer, and their leaves can be used for numerous purposes, such as making perfumes, medicines, etc.
        Moreover, they help cool our atmosphere.</p>
        <button onClick={() => fun()}>Click Here</button>
    </>
)
}
export default DayTwo;