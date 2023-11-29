import React, { useState } from 'react'
import './register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
  let photo="";
  const[val,setVal]=useState({
    name:"",
    email:'',
    phone:'',
    address:'',
    empid:'',
    salary:'',
    designation:'',
    experience:'',
  })

 // UPLOAD IMAGE
 const Upload=async(e)=>{
    e.preventDefault()
    photo= await convertToBase64(e.target.files[0])
    console.log(photo)
    
}
  
// CONVERT TO BASE 64
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
 
//ADD DATA
  const getData=(e)=>{
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  
    const Registerdata=async(e)=>{
    e.preventDefault();
    console.log({...val});
    console.log(photo);
    
    const res=await axios.post("http://localhost:3005/api/addtask",{...val,photo:photo});
      
    if(res.status!=201){
      alert("Data Not Added")
    }
    else{
      alert("Data Added")
      navigate("/")
    }
}

return (
    <div >
     <form action="" onSubmit={Registerdata}>
     <div className="registration-main">
         <div className="registration-left">
          <div className="rphoto">
            <div className='image'><img src="../../../../public/albert-dera-ILip77SbmOE-unsplash.jpg" alt="" /></div>
            <input className='imgbutton'  type="file" onChange={Upload}  name='photo'/>
            
          </div>
         
      <div className="sign-in-form-input">  
      <div><label   >Name</label></div>
      <div><input type="text" name='name' onChange={getData}/></div>

      <div><label    >E-mail</label></div>
      <div><input type="text"  name='email' onChange={getData} /></div>

      <div><label   >Phone</label></div>
      <div><input type="text" name='phone' onChange={getData} /></div>
      </div>

         </div>
         <div className="registration-right">
         <div className="sign-in-form-right-input"> 
         <div><label >Address</label></div>
         <div><textarea name="address" id="" cols="30" rows="3" onChange={getData}   ></textarea></div>

          <div><label >Emp-ID</label></div>
          <div><input type="text"name='empid' onChange={getData} /></div>

      <div><label >Designation</label></div>
      <div><input type="text" name='designation' onChange={getData} /></div>

      <div><label >Salary</label></div>
      <div><input type="text" name='salary' onChange={getData}  /></div>

      <div><label >Experience</label></div>
      <div><input type="text" name='experience' onChange={getData} /></div>

      <div className='button'>
        <button >Register</button>
      </div>
    </div>   
         </div>

      


      </div>
     </form>
      
    </div>
  )
}

export default Register
