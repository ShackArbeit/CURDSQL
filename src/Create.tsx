import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

interface ValueType{
    Name:string,
    Email:string
}


const Create = () => {
    const [values,setValues]=useState<ValueType>({
        Name:'',
        Email:''
    })
    const navigate=useNavigate()
    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            const response=await fetch('http://localhost:8000/student',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(values),
            })
            console.log(values)
            const Data=await response.json()
            navigate('/')
            console.log(Data)
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-100 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type='text' placeholder="Enter Name" className='form-control'
                    onChange={(e)=>setValues({...values,Name:e.target.value})}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type='text' placeholder="Enter Email" className='form-control'
                     onChange={(e)=>setValues({...values,Email:e.target.value})}
                    />
                </div>
                <button className='btn btn-success'>Submit </button>
            </form>
        </div>
    </div>
  )
}

export default Create