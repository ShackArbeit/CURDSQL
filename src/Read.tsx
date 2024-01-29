import { useParams,Link } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from 'axios'


interface ReadStudent{
    ID:number
    Name:string,
    Email:string
}


const Read = () => {
    const{id}=useParams()
    const [student,setStudent]=useState<ReadStudent>()
    useEffect(() => {
        const handleFetchId = async () => {
            axios.get(`http://localhost:8000/read/${id}`)
            .then(response=>{
                console.log(response)
                setStudent(response.data[0])
            })
            .catch(error=>console.log(error))
            console.log(id)
            
        };
        handleFetchId();
    }, [id]);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-100 bg-white rounded p-3'>
            <div className='p-2'>
            <h2>Student Detaile</h2>
            <h4>ID：{student?.ID}　</h4> 
            <h4>Name：{student?.Name}　</h4>
            <h4>Email： {student?.Email}　</h4>        
            <Link to={`/edit/${student?.ID}`} className='btn btn-info me-2'>Edit </Link>
            </div>
        </div>
    </div>
  )
}

export default Read