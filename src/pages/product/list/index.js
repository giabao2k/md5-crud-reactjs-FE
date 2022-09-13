import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";

export default function ListProduct() {

    const [list, setList] = useState(useContext(AppContext))
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products/add">ADD</Link>
            </nav>
                <h2>List Products:</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
