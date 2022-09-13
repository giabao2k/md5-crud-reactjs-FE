import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import AppContext from "../../../context/AppContext";

export default function AddProduct(){
    const navigate = useNavigate();
    const [list, setList] = useState(useContext(AppContext))
    const [product,setProduct]=useState({
        name:'',
        price:''
    })
    const addProduct = () =>{
        list.push(product)
        navigate("/products")
    }
    return(
        <div>
            <input
                type='text'
                id="name"
                value={product.name}
                onChange={(e)=>setProduct({...product,name:e.target.value})}
            />
            <input
             type='text'
             id="name"
             value={product.price}
             onChange={(e)=>setProduct({...product,price:e.target.value})}
            />
            <button onClick={addProduct}>Add</button>
        </div>
    )
}