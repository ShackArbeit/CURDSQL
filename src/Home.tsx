import {useEffect} from 'react'


const Home = () => {
      useEffect(()=>{
            const fetchData=async()=>{
            const response=await fetch('http://localhost:8000/')
            const data=await response.json()
            console.log(data)
            }
            fetchData()
      },[])

  return (
    <div>
      <h1>jjjjj</h1>
    </div>
  )
}

export default Home
