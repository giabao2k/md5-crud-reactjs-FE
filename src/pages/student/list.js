import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"

export default function ListStudent() {
    const navigate = useNavigate()
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/students').then((response)=>{
            setList(response.data)
        })
    }, [])
    const DeleteStudent = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(()=>{
            axios.get('http://localhost:3001/students').then((response)=>{
                setList(response.data)
                console.log(1);
            })
        })
    }
    return(
        <div>
            <h1>List Student</h1>
            <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate('/students/add')}}>Add</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td><button type="button" className="btn btn-outline-danger" onClick={()=>{DeleteStudent(`${item.id}`)}}>Delete</button></td>
                            <td><button type="button" className="btn btn-outline-info" onClick={()=>{navigate(`/students/${item.id}`)}} >Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}