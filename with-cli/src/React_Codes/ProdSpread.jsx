import React, { useEffect, useState } from "react";
import './Prod.css';

function ProdSpread() {
    const [state, setState] = useState([]);

    let fetchdata = async () => {
        let data = await fetch("https://dummyjson.com/products");
        let finaldata = await data.json();
        setState(finaldata.products);
        console.log(finaldata.products); // Change this to finaldata.products to log the correct data
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div className="container">
        {state.map((value, index) => {
            return (
                <div className="card" key={index}>
                    <h4>{value.brand}</h4>
                    <h5>{value.title}</h5>
                    <img src={value.thumbnail} alt={value.title} style={{marginTop:"25px"}} />
                    <h6 style={{marginTop:"15px"}}>Price: ${value.price}</h6>
                </div>
            );
        })}
        </div>
    );
}

export default ProdSpread;
