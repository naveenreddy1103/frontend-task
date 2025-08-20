import axios from "axios";
import { useRef, useState } from "react"
import './form.css'

export const Register=()=>{
    

    const [data,setData]=useState({Name:'',Email:'',Message:''});

    function formChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }
   
    const formsubmit=async(e)=>{
        try{
            e.preventDefault();
        console.log(data)
       await axios.post('https://backend-tasks-efn5.onrender.com/userform', data)
       .then((response)=>{
        alert(`${data.Name} is added successfully`);
        console.log(data.Name)
        setData({ Name: "", Email: "", Message: "" });

       })
       .catch((error)=> {
        console.log(error.message)
    alert(`check feilds`);
  });
        }
        catch(error){
            console.log({
                message:error.message
            })
        }
       }


    return(
       
      <div className="container-fluid d-flex justify-content-center align-items-center main" style={{height:"100vh",width:"230vh"}} >
        
        <form className="mt-3 p-5 rounded rounded bg-white text-black" onSubmit={formsubmit}>
            <h3 className="bi bi-person-fill"> User Register</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" placeholder="Name" name="Name" onChange={formChange} required></input></dd>
                <dt>Email</dt>
                <dd><input type="email" className="form-control" placeholder="Email" name="Email" onChange={formChange} required></input></dd>
                <dt>Message</dt>
                <dd><input type="text" className="form-control" placeholder="Message" name="Message" onChange={formChange}></input></dd>
            </dl>
            <input type='submit' className="btn btn-warning w-100" value="Rgister"></input>
        </form>
        
    </div>
    )
}
