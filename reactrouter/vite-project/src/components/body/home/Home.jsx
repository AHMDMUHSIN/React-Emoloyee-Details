import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import axios from 'axios'
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [count,setCount]=useState(0)
  const [getEmp,setEmp]=useState([])
  const getEmployee=async()=>{
    const res=await axios.get("http://localhost:3005/api/gettask")
    setEmp(res.data)
  }
  


  const deleteEmp = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");

    if (isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:3005/api/deltask/${id}`);
        console.log('Employee deleted:', res.data);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    } else {
      console.log('Deletion cancelled.');
    }
    setCount(count+1)
  }

  useEffect(()=>{
    getEmployee()
  },[count])




  return (
    <div>
     

     <div className='tablemain'>
     <div className="table">
      <div className='tablesub'>
      <table>
          <tr>
            <th >Emp-id</th>
            <th>Name</th>
            <th className='action'>Action</th>
          </tr>
         {
           getEmp.map((data,index)=>
           <tr key={index} >
           <td className='id'>{data.empid}</td>
           <td>{data.name}</td>
           <td className='btn'>
            

         <button><Link className='link' to={`/Edit/${data._id}`}>Edit</Link></button>
         <button><Link className='link' to={`/View/${data._id}`}>Veiw</Link></button>
         <button><Link className='link' to={`#${data._id}`} onClick={() => deleteEmp(data._id)}><MdDelete /></Link></button>
         
             
           </td>
         </tr>
           )
         }
        </table>
      </div>
          
       </div>
     </div>













      
       
      
    </div>
  )
}

export default Home
