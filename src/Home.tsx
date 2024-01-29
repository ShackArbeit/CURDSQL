import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

interface studentData{
   ID:number,
   Name:string,
   Email:string
}


const Home = () => {
     const [data,setData]=useState<studentData[]>([])
      useEffect(()=>{
            const fetchData=async()=>{
            const response=await fetch('http://localhost:8000/')
            const Data=await response.json()
            setData(Data)
            console.log(Data)
            }
            fetchData()
      },[])
      const handleDelete=(ID:number)=>{
          axios.delete(`http://localhost:8000/delete/${ID}`)
          .then(response=>{
            location.reload()
            console.log(response)
          })
          .catch(error=>console.log(error))
      }

  return (
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-100 bg-white rounded p-3'>
      <h2>Student List</h2>
      <div className='d-flex justify-content-end '>
        <Link to='/create' className='btn btn-success'>Create </Link>
        </div>
      <table>
         <thead className='table'>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
        {data.map((student,index)=>{
          return <tr key={index}>
              <td>ID ：　{student.ID}</td>
              <td>Name　：{student.Name}</td>
              <td>Email　：　{student.Email}</td>
              <td className='d-flex'>
                <Link to={`/read/${student.ID}`} className='btn btn-sm btn-info'>
                  Read
                </Link>
                <Link to={`/edit/${student?.ID}`}  className='btn btn-sm btn-primary mx-2'>
                  Edit
                </Link>
                <button onClick={()=>handleDelete(student.ID)} className='btn btn-sm btn-danger'>
                  Delete
                </button>
              </td>
          </tr>
        })}
      </tbody>
      </table>
    </div>
   </div>
  )
}

export default Home
