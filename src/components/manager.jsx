import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
const manager = () => {
    
    const copytext=(text)=>{
       toast('Copied To Clipboard', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
        navigator.clipboard.writeText(text)

    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})


    }
    const [form, setForm] = useState({site: "", username:"", password:""})
    const [passwordArray, setPasswordArray] = useState([])
    const ref=useRef();
    const passwordRef=useRef();

    
    const showPassword=()=>{
        if(!form.password){
        alert("Enter Password")
    }
    
       else{
           

           if( ref.current.textContent==="Hide"){
               ref.current.textContent="Show"
               passwordRef.current.type="password"

            }
            else{
                ref.current.textContent="Hide"
                passwordRef.current.type="text"
 
                
            }
        }
        }
    useEffect(() => {
      let passwords=localStorage.getItem("passwords")
      if(passwords){
        setPasswordArray(JSON.parse(passwords))
      }
    
      }
    , [])
    
    const savePassword=()=>{
        
        if(!form.site || !form.username || !form.password){
            alert("Fill all the details Properly...")
        }
        else{
            toast('Password Saved Successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});

            setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id: uuidv4()}]))
            setForm({ site: "", username: "", password: "" })
        }



    }
    const deletePassword=(id)=>{
        let c=confirm("Do you really want to delete this password...")

        if(c){
toast('Password Deleted Successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
            
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
            
        }


    }

    const editPassword=(id)=>{
        setForm(passwordArray.filter(item=>item.id===id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id!==id))

        

     



    }

  return (
    <>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>   
    <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[10%] rounded-full bg-green-300 opacity-50 blur-[80px]"></div></div>
  <div className="container p-4 flex flex-col justify-center gap-6 mx-auto">
    <div className="Logo text-lg pt-6 text-center" >
        <div className="font-bold text-3xl">
            <span className="text-green-600" >&lt;</span>
            Pass
            <span className="text-green-600">Manage/&gt;</span>
        </div>
             <div className="text-green-900">Your Password Manager</div>

        </div>
         
  {/* Website Name Input */}
  <div className="pt-4">
    <input
      onChange={handleChange}
      name="site"
      value={form.site}
      type="text"
      placeholder="Enter Website Name"
      className="w-full p-2 text-black rounded-lg border border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 bg-white"
    />
  </div>

  {/* Username & Password Inputs */}
  <div className=" flex flex-col sm:flex-row items-center gap-4 w-full relative justify-center">
    <input

      onChange={handleChange}

      name="username"
      value={form.username}
      type="text"
      placeholder="Enter your Username"
      className=" w-full sm:flex p-2 rounded-lg border border-green-500  focus:outline-none  focus:ring-1 focus:ring-green-500 bg-white w-2/3"
    />



    <input

name="password"
value={form.password}
onChange={handleChange}
ref={passwordRef}

type="password"
placeholder="Enter your Password"
className=" w-full sm:flex p-2 rounded-lg border  border-green-500  focus:outline-none  focus:ring-1 focus:ring-green-500 bg-white w-1/3"
/>
    <div ref={ref} className=" sm:absolute text-sm right-2 cursor-pointer hover:font-bold transition-transform duration-300 " onClick={showPassword}>Show</div>
  </div>

  <div className="flex items-center justify-center">
     <button onClick={savePassword} className=" flex items-center justify-content-center w-fit bg-green-400 rounded-full p-4 font-semibold cursor-pointer text-sm border-2 border-green-600 transition-transform duration-300 hover:scale-110 hover:bg-green-800 hover:text-white px-8">Save Password</button>
  
  </div>
  <div className="passwords">
    <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
   
    {passwordArray.length===0 && <div>No Passwords to Show...</div>}

    {passwordArray.length!=0 && <table class="table-auto w-full overflow-hidden rounded-xl">
  <thead className="bg-green-800 text-white text-center">
    <tr>
      <th className="py-2">Site</th>
      <th className="py-2">Username</th>
      <th className="py-2">Passwords</th>
      <th className="py-2">Actions</th>


    </tr>
  </thead>
  <tbody className="bg-green-100">
    {passwordArray.map((item,index)=>{
        return (
      <tr key={index} className="">
        
      <td className="border border-white py-2 px-2 text-center w-1/3 "><a href={item.site} target="_blank">{item.site}</a><div className="text-sm cursor-pointer text-blue-600 inline-block sm:ml-20  hover:text-blue-900" onClick={()=>{copytext(item.site)}}>Copy</div></td>
      <td className="border border-white py-2 px-2 text-center w-1/3">{item.username}<div className="text-sm cursor-pointer text-blue-600 inline-block sm:ml-20  hover:text-blue-900" onClick={()=>{copytext(item.username)}}>Copy</div></td>
      
      <td className="border border-white py-2 px-2 text-center w-1/3">{item.password}<div className="text-sm cursor-pointer text-blue-600 inline-block  sm:ml-20 hover:text-blue-900" onClick={()=>{copytext(item.password)}}>Copy</div></td>
      <td className="border border-white py-2 px-2 text-center w-1/3  cursor-pointer "><div className="flex gap-12"><span className='text-gray-500 hover:text-gray-900 text-sm' onClick={()=>{editPassword(item.id)}}>Edit</span><span className='text-red-500  hover:text-red-900 text-sm' onClick={()=>{deletePassword(item.id)}}>Delete</span></div></td>
    </tr>
    )})}
   
   
  </tbody>
</table>
}
  </div>
</div>


   
   
   
   
   
   
    </>

 
  )
}

export default manager