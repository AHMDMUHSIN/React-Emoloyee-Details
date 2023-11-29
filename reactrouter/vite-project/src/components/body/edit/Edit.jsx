import React, {useEffect,useState} from 'react'
import './edit.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Edit = () => {
  let photo=""
  let navigate=useNavigate()
 const {id}=useParams()
  const[val,setVal]=useState({
    name:"",
    email:'',
    phone:'',
    address:'',
    empid:'',
    salary:'',
    designation:'',
    experience:'',
    photo:'',
  })
 
  console.log(id);

  const getData=async()=>{
    const res = await axios.post(`http://localhost:3005/api/getDetails/${id}`);

    if(res.status==200)
    {
      setVal(res.data)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  console.log('val',val);


  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }
  
  const Getdatas=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  
  const Upload=async(e)=>{
    e.preventDefault()
  
    photo=await convertToBase64(e.target.files[0])
    setVal((pre)=>({...pre,photo:photo}))
  }
  
  const editData=async(e)=>{
    e.preventDefault()
    console.log(val)
    
    const res=await axios.patch(`http://localhost:3005/api/editemployee/${id}`,{...val})
    if(res.status!=200){
      console.log(res.status);
      alert("Data Not Edited")
    }else{
      alert('Data Edited')
      navigate("/")
    }
  }

return (
    <div >
     <form action="" >
     <div className="registration-main">
         <div className="registration-left">
         <div className="rphoto">
            <div className='image'><img src={val.photo} alt="" /></div>
            <input className='imgbutton' onChange={Upload}  type="file"   name='photo'/>
            
          </div>
          
      <div className="sign-in-form-input">  
      <div><label   >Name</label></div>
      <div><input type="text" name='name' onChange={Getdatas} value={val.name} /></div>

      <div><label    >E-mail</label></div>
      <div><input type="text"  name='email' onChange={Getdatas}  value={val.email}  /></div>

      <div><label   >Phone</label></div>
      <div><input type="text" name='phone' onChange={Getdatas}  value={val.phone}  /></div>
      </div>

         </div>
         <div className="registration-right">
         <div className="sign-in-form-right-input"> 
         <div><label >Address</label></div>
         <div><textarea name="address" id="" cols="30" rows="3" onChange={Getdatas}  value={val.address}    ></textarea></div>

          <div><label >Emp-ID</label></div>
          <div><input type="text"name='empid' onChange={Getdatas} value={val.empid}  /></div>

      <div><label >Designation</label></div>
      <div><input type="text" name='designation' onChange={Getdatas} value={val.designation}  /></div>

      <div><label >Salary</label></div>
      <div><input type="text" name='salary' onChange={Getdatas}  value={val.salary}  /></div>

      <div><label >Experience</label></div>
      <div><input type="text" name='experience' onChange={Getdatas} value={val.experience} /></div>

      <div className='button'>
        <button onClick={editData}>Edit</button>
      </div>
    </div>   
         </div>

      


      </div>
     </form>
      
    </div>
  )
}

export default Edit

