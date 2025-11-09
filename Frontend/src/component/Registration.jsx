import React, { useState } from "react";
const RegistrationForm=()=>{
    
    const [user,setUser]=useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
        avatar:null,
        coverimg:null,
    });

    const handleInputChange=(e)=>{
        const {name,value,type,files}=e.target
        setUser((prev)=>({...prev,[name]:type==="file" ? files[0]:value,}))
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        
        const formData=new FormData();

        formData.append("fullname",user.fullname)
        formData.append("username",user.username)
        formData.append("email",user.email)
        formData.append("password",user.password)
        formData.append("avatar",user.avatar)
        formData.append("coverImage",user.coverimg)

        try {
            const response=await fetch("http://localhost:3000/api/v1/users/register",{
                method:"POST",
                body:formData,
                credentials:"include",
            });

            const data=await response.json();
            console.log("response",data);

            if(response.ok){
                alert('register login');
            }
            else{
                alert('register failed')
            }
        } catch (error) {
            console.log("error",error);
            alert("something went wrong");
        }
    }
    return(
        <>
        <div className="flex justify-center items-center h-screen p-3 bg-gray-100" > 
        <form onSubmit={handleSubmit}  action="" className="border border-b-black rounded-2xl p-8 text-2xl" >
            <h1 className="text-center text-2xl text-green">Sign Up</h1>
            <p>Please fill all details</p>

            <label htmlFor="fullname">FullName: </label>
            <input 
            type="text"
            name="fullname"
            placeholder="Enter your first name"
            value={user.fullname}
            onChange={handleInputChange}
            required
             />
            <br />
            <label htmlFor="username">UserName: </label>
            <input 
            type="text"
            name="username"
            placeholder="Enter last name"
            value={user.username}
            onChange={handleInputChange}
            required
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input 
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleInputChange}
            required
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input 
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
            />
            <br />
            <label htmlFor="avatar">Avatar: </label>
            <input 
            type="file"
            name="avatar"
            onChange={handleInputChange}
            id="1"
            required
            />
            <br />
            <label htmlFor="coverimg">CoverImage: </label>
            <input 
            type="file" 
            name="coverimg" 
            onChange={handleInputChange}
            id="2"
            
            />
            <br />
        <div>
            <button type="submit" className="rounded-xl bg-blue-600 text-white">
                Sign Up
            </button>
        </div>

        </form>
        </div>
        </>
    )
};
export default RegistrationForm;



















































































//brute force of registration

// import React, { useState } from "react";
// const RegistrationForm=()=>{
//     const [fullname,setfullname]=useState("");
//     const [username,setusername]=useState("");
//     const [email,setemail]=useState("");
//     const [password,setpassword]=useState("");
//     const [avatar,setavatar]=useState(null);
//     const [coverimg,setcoverimg]=useState(null);

//     const handleInputChange=(e)=>{
//         const {name,value}=e.target;
//         switch(name){
//             case "fullname":
//                 setfullname(e.target.value)
//                 break;
            
//             case "username":
//                 setusername(e.target.value)
//                 break;

//             case "password":
//                 setpassword(e.target.value)
//                 break;
            
//             case "email":
//                 setemail(e.target.value)
//                 break;
            
//             case "avatar":
//                 setavatar(e.target.value)
//                 break;
            
//             case "coverimg":
//                 setcoverimg(e.target.value)
//                 break;
            
//         }
//     }
//     return(
//         <>
//         <div className="flex justify-center items-center h-screen p-3 bg-gray-100" > 
//         <form  action="" className="border border-b-black rounded-2xl p-8 text-2xl" >
//             <h1 className="text-center text-2xl text-green">Sign Up</h1>
//             <p>Please fill all details</p>

//             <label htmlFor="fullname">FullName: </label>
//             <input 
//             type="text"
//             name="fullname"
//             placeholder="Enter your first name"
//             value={fullname}
//             onChange={handleInputChange}
//             required
//              />
//             <br />
//             <label htmlFor="username">UserName: </label>
//             <input 
//             type="text"
//             name="username"
//             placeholder="Enter last name"
//             value={username}
//             onChange={handleInputChange}
//             required
//             />
//             <br />
//             <label htmlFor="email">Email: </label>
//             <input 
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={handleInputChange}
//             required
//             />
//             <br />
//             <label htmlFor="password">Password: </label>
//             <input 
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleInputChange}
//             placeholder="Enter password"
//             required
//             />
//             <br />
//             <label htmlFor="avatar">Avatar: </label>
//             <input 
//             type="file"
//             name="avatar"
//             value={avatar}
//             onChange={handleInputChange}
//             id=""
//             required
//             />
//             <br />
//             <label htmlFor="coverimg">CoverImage: </label>
//             <input 
//             type="file" 
//             name="coverimg" 
//             value={coverimg}
//             onChange={handleInputChange}
//             id=""
            
//             />
//             <br />
//         <div>
//             <button type="submit" className="btn">
//                 Sign Up
//             </button>
//         </div>

//         </form>
//         </div>
//         </>
//     )
// };
// export default RegistrationForm;