import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import axios from "axios"
export default function EditStudent() {
    const {id} = useParams()
    console.log(id);
    const navigate = useNavigate()
    const [student, setStudent] = useState({
        name: '',
        description: '',
        action: ''
    })
    useEffect(() => {
        axios.get(`http://localhost:3001/students/${id}`).then((response)=>{
            setStudent(response.data)
            console.log(response.data);
        })
    }, [])
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setStudent({ ...student, [name]: value })
    }
    return (
        <div>
            <h1>Edit Student</h1>
            {/* <h3>{student.name}</h3>
            <h3>{student.description}</h3>
            <h3>{student.action}</h3> */}
            <input
                type='text'
                name="name"
                value={student.name}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                name="description"
                value={student.description}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                name="action"
                value={student.action}
                onChange={onChangeHandled}
            />
            <br />
            <button type="button" className="btn btn-outline-primary" onClick={() => {
                axios.put(`http://localhost:3001/students/${id}`, student)
                navigate('/students')
            }}>Update</button>
        </div >
    )
}