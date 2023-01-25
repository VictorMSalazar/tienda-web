import React, {useState,useEffect} from "react";
import axios from "axios";


import { Card } from "./product";


export const Products = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products",
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((e) => console.log(e));        
    }, []);
    
    return(
        <div className="container-fluid justify-content-center align-items-center h-100">
            <div className="row">
            {data.map((product) => {
               return  ( <div className="col-md-3 col-sm-6 col-lg-3" key={product.id}>
                            <Card 
                            imageSource={product.image} 
                            title={product.title} 
                            desc={product.description}
                            price= {product.price}/>
                        </div>                                                         
             )})}
             </div> 
        </div>
    )
}


