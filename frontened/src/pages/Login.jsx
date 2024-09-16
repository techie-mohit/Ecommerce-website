import React from 'react'
import {useState} from 'react'
import loginIcons from '../assest/signin.gif'
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import {Link} from "react-router-dom"; 




const Login = () => {
    const [showPassword, setShowPassword]= useState(true);
    const[data, setData]= useState({
        email: "",
        password: ""
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

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    console.log("data login ", data);

  return (
    <section id="login">
        <div className="mx-auto container p-4" >

            <div className=" bg-white p-2  py-5 w-full max-w-md mx-auto">

                <div className="w-20 h-20 mx-auto">
                    <img src= {loginIcons} alt="login icons"/>
                </div>

                <form className="pt-5 flex flex-col gap-3"  onSubmit={handleSubmit}>
                    <div className="grid" >
                        <label>Email : </label>
                        <div className= "bg-slate-100 p-2 ">
                            <input 
                            type="text" 
                            placeholder="enter email"
                            name="email"
                            value= {data.email} 
                            onChange={handleOnChange}
                            id="email" 
                            className=" w-full h-full outline-none bg-transparent" />
                        </div>
                    </div>
                    <div className="grid">
                        <label>Password : </label>
                        <div className="bg-slate-100 p-2 flex  items-center justify-center">
                            <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="enter password" 
                            name="password"
                            value={data.password}
                            onChange={handleOnChange}
                            id="password" 
                            className="w-full h-full outline-none bg-transparent" />
                            <div className="cursor-pointer" onClick={()=>setShowPassword((prev)=>!prev)}>
                                <span>
                                    {
                                        showPassword ? <IoEyeOff /> : <MdRemoveRedEye />
                                    }
                                
                                
                                </span>
                            </div>

                        </div>

                        <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-red-500">
                            Forgot Password ?
                        </Link>
                    </div>

                    <button className="bg-red-600 text-white px-4 py-1  w-full  max-w-[150px] rounded-full hover:scale-110 mx-auto block mt-3" >Login</button>
                </form>

                <p className="my-4 "> Don't have account ?  <Link to={"/signup"} className="hover:underline hover:text-red-500"><b>Sign up</b></Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login
