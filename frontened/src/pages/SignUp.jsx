import React, {useState} from 'react'
import loginIcons from '../assest/signin.gif'
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import {Link} from "react-router-dom"; 
import imageToBase64 from "../helpers/imageToBase64";
import SummaryApi from "../common";


const SignUp = () => {
  const [showPassword, setShowPassword]= useState(true);
  const [showConfirmPassword, setShowConfirmPassword]= useState(false);

    const[data, setData]= useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        profilePic: ""
    })

    const handleOnChange =(e)=>{
        const {name, value} = e.target

        setData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleUploadPic= async(e)=>{
        const file= e.target.files[0];

        const imagePic = await imageToBase64(file);

        console.log(imagePic);
        setData((prev)=>{
            return{
                ...prev,
                profilePic : imagePic
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(data.password === data.confirmpassword){
            try{
                const dataResponse = await fetch('http://localhost:8080/api/signup',{
                    method : 'POST',
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })
                if(!dataResponse.ok){
                    throw new Error("network was not accepted")
                }
                const dataApi= await dataResponse.json();
                console.log(dataApi);
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            console.log("please check password and confirm password");
        }

        
    }
  return (
    <section id="signup">
        <div className="mx-auto container p-4" >

            <div className=" bg-white p-5  w-full max-w-sm mx-auto">

                <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                    <div>
                    <img src= {data.profilePic || loginIcons} alt="login icons"/>
                    </div>
                    <form>
                      <label>
                        <div className="text-xs bg-slate-200 cursor-pointer py-3 bg-opacity-80 text-center absolute bottom-0 w-full ">
                          Upload Photo
                        </div>
                        <input type="file" className="hidden" onChange={handleUploadPic}/>
                      </label>
                    </form>
                </div>

                <form className="pt-5 flex flex-col gap-3"  onSubmit={handleSubmit}>
                    <div className="grid " >
                        <label>Username : </label>
                        <div className= "bg-slate-100 p-2 ">
                            <input 
                            type="text" 
                            placeholder="enter username"
                            name="username"
                            value= {data.username} 
                            onChange={handleOnChange}
                            id="username" 
                            required
                            className=" w-full h-full outline-none bg-transparent" />
                        </div>
                    </div>
                    <div className="grid " >
                        <label>Email : </label>
                        <div className= "bg-slate-100 p-2 ">
                            <input 
                            type="email" 
                            placeholder="enter email"
                            name="email"
                            value= {data.email} 
                            onChange={handleOnChange}
                            id="email" 
                            required
                            className=" w-full h-full outline-none bg-transparent" />
                        </div>
                    </div>
                    <div className="grid ">
                        <label>Password : </label>
                        <div className="bg-slate-100 p-2 flex  items-center justify-center">
                            <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="enter password" 
                            name="password"
                            value={data.password}
                            onChange={handleOnChange}
                            id="password" 
                            required
                            className="w-full h-full outline-none bg-transparent" />
                            <div className="cursor-pointer" onClick={()=>setShowPassword((prev)=>!prev)}>
                                <span>{showPassword ? <IoEyeOff /> : <MdRemoveRedEye />}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <label> Confirm Password : </label>
                        <div className="bg-slate-100 p-2 flex  items-center justify-center">
                            <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            placeholder="enter confirm password" 
                            name="confirmpassword"
                            value={data.confirmpassword}
                            onChange={handleOnChange}
                            id="password"
                            required 
                            className="w-full h-full outline-none bg-transparent" />
                            <div className="cursor-pointer" onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                                <span>{  showConfirmPassword ? <IoEyeOff /> : <MdRemoveRedEye />}</span>
                            </div>
                        </div>
                    </div>
                    

                    <button className="bg-red-600 text-white px-4 py-1  w-full  max-w-[150px] rounded-full hover:scale-110 mx-auto block mt-3" >Sign Up</button>
                </form>

                <p className="my-4 "> Already have account ?  <Link to={"/login"} className="hover:underline hover:text-red-500"><b>Login</b></Link></p>
            </div>
        </div>
    </section>
  )
}

export default SignUp
