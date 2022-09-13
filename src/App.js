import logo from './logo.svg';
import './App.css';
import AppContext from "./context/AppContext";
import HomePage from './pages/Home/home';
import Products from "./pages/product/list/index";
import AddProduct from "./pages/product/list/add";
import Students from "./pages/student/list";
import AddStudent from './pages/student/add';
import EditStudent from './pages/student/edit';
import React from "react";
import { Route, Routes } from 'react-router-dom';
const globalState = [
    {
        name: 'IP12',
        price: 100
    },
    {
        name: 'IP13',
        price: 100
    }
]

function App() {
    return (
        <AppContext.Provider value={globalState}>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/products/add' element={<AddProduct/>}></Route>
                <Route path='/students' element={<Students/>}></Route>
                <Route path='/students/add' element={<AddStudent/>}></Route>
                <Route path='/students/:id' element={<EditStudent/>}></Route>
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
