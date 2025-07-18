import {useEffect,useState} from "react";

function Products(){
    const [input, setInput] = useState("");  
    const [list, setList] = useState([]); 
    const [count, setCount] = useState(0);  
    const [search, setSerach] = useState("");

let serch =()=> {
    setSerach(input); 
    console.log(search);
}; 

let fet = async ()=> {  
    let response = await fetch(`https://dummyjson.com/products/search?q=${input}`);    
    let data = await response.json();  
    setList(data.products);
};  
//fet();  

useEffect(()=> {  
    if (input){  
        fet();
      } else {
         setList([]);  
}
}, [input]); 
 // console.log(list);  
 return (  
    <>
<button onClick={() => setCount (count + 1)}>click me</button>
<h2>{input}</h2>
<input type="text" onChange={(event) => setInput (event.target.value)}/> 
<button onClick={serch}>search</button>
</>
);
}
export default Products;