import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function AddStudent() {
    const navigate = useNavigate()
    const [student, setStudent] = useState({
        name: '',
        description: '',
        action: ''
    })
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setStudent({ ...student, [name]: value })
    }
    return (
        <div>
            <h1>Add Student</h1>
            <input
                type='text'
                placeholder="Enter Name"
                name="name"
                value={student.name}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                placeholder="Enter Description"
                name="description"
                value={student.description}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type='text'
                placeholder="Enter Action"
                name="action"
                value={student.action}
                onChange={onChangeHandled}
            />
            <br />
            <button type="button" className="btn btn-outline-primary" onClick={() => {

                axios.post('http://localhost:3001/students', student)
                navigate('/students')
            }}>Add</button>
        </div>
    )
}