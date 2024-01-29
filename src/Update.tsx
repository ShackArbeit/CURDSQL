import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


interface UpdateType{
    Name:string ,
    Email:string 
}

const Update = () => {
    const navigate=useNavigate()
    const{id}=useParams()
    const [values,setValues]=useState<UpdateType>({
        Name:'',
        Email:''
    })
    useEffect(()=>{
        const handleUpdateData = async () => {
            axios.get(`http://localhost:8000/read/${id}`)
            .then(response=>{
                console.log(response)
                setValues({...values,Name:response.data[0].Name,Email:response.data[0].Email})
            })
            .catch(error=>console.log(error))
            console.log(id)
            
        };
        handleUpdateData();
    },[id])
    const handleUpdate=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    const response=await fetch(`http://localhost:8000/update/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(values),
    })
    console.log(values)
    navigate('/')
    const data=await response.json();
    console.log(data)
    
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-100 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type='text' placeholder="Enter Name" className='form-control'
                    onChange={(e)=>setValues({...values,Name:e.target.value})}
                     value={values.Name}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type='text' placeholder="Enter Email" className='form-control'
                     onChange={(e)=>setValues({...values,Email:e.target.value})}
                     value={values.Email}/>
                </div>
                <button className='btn btn-success'>Update </button>
            </form>
        </div>
    </div>
  )
}

export default Update