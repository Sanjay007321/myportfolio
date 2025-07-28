import { useState,useEffect } from "react";
import bbms from "./webs.png"
// import './src/App.css';
const ab="<Sanj/>"
export default function Pro() {
  const apiUrl = "http://localhost:8000";
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const names = [name,email,message];
  const [menu,setMenu] = useState(false);
  const [cancel,setCancel] = useState(false)
  const toggleMenu = ()=>{setMenu(!menu);
    setCancel(!cancel)
  }
   const handleSubmit = ()=>{
    console.log(name,email,message)
    fetch(apiUrl,{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({name,email,message})
  }).then((res)=>{
   if(res.ok){
    alert("Message Sent")
   }}).catch(
    console.log("Error Sending Message")
   )

   }
  return (
    <div className="bg-slate-950 text-blue-100 text-md !scroll-smooth">
    <div className="flex items-center justify-center">
    <div className="hover:shadow-sm shadow-cyan-700 duration-700 bg-slate-900 flex items-center justify-center m-4 p-2 bg-slate-500 inline-flex gap-4 rounded-lg">
    <h1 className="">{ab}</h1>
    <div className="md:flex gap-5 hidden">
      <a href="#about" className="hover:text-cyan-300 duration-300"><h3>About</h3></a>
      <a href="#skills" className="hover:text-cyan-300 duration-300"><h3>Skills</h3></a>
      <a href="#projects"className="hover:text-cyan-300 duration-300"><h3>Projects</h3></a>
      <a href="#contact"className="hover:text-cyan-300 duration-300"><h3>Contact</h3></a>
      <a href="#social"className="hover:text-cyan-300 duration-300"><h3>Socials</h3></a>
    </div>
    {menu?
    <div onClick={toggleMenu} className="flex flex-col absolute mt-0 gap-3 flex-grow top-15  rounded-md p-7 bg-slate-800 transition-all duration-500 ease-in-out">
      <a href="#about" className="hover:text-cyan-300 duration-300"><h3>About</h3></a>
      <a href="#skills" className="hover:text-cyan-300 duration-300"><h3>Skills</h3></a>
      <a href="#projects"className="hover:text-cyan-300 duration-300"><h3>Projects</h3></a>
      <a href="#contact"className="hover:text-cyan-300 duration-300"><h3>Contact</h3></a>
      <a href="#social"className="hover:text-cyan-300 duration-300"><h3>Socials</h3></a>
    </div>:
    console.log("Noo")
    }
    {
    !cancel?
    <svg onClick={toggleMenu} id="svgid" className="h-5  fill-blue-100 md:hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
    </svg>:
    <div>
      <h1 className="h-6 w-4 text-center text-gray-400" onClick={toggleMenu}>X</h1>
    </div>
    }
    </div>
    </div>
      <div className="flex m-6 gap-3 items-center justify-center mt-3" id="about">
        <img className="animate-bounce duration-1000 md:h-[150px] h-[100px] justify-center" src="https://assets.opeeps.fun/avatar-illustration-system-example.png" alt="sample"></img>
         <p className="typing p-4">Hello, I'm Sanjay, A Final-year IT student passionate about full-stack development.</p>   
      </div>
      <hr className="animate-pulse duration-150 ms-8 me-8 border-cyan-400 m-4 bg-cyan-500 text-cyan-500 shadow-cyan-500"></hr>
      <div id="skills" className="">
        <h3 className="flex typing-2 items-center text-xl justify-center">Skills</h3>
        <div className="transition-transform duration-300 translate flex gap-5 m-4 flex-wrap justify-center">
        <img className="h-[80px] w-[50px] animate-pulse duration-100 items-center justify-center" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"></img>
        <img  className="h-[60px] items-center animate-pulse  duration-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"></img>
        <img  className="h-[80px] animate-pulse duration-100" src="https://miro.medium.com/v2/resize:fit:1200/0*-hi_YN6201aadrIe.png"></img>
        <img  className="h-[70px] animate-pulse duration-100" src="https://www.logoshape.com/wp-content/uploads/2025/02/Mongodb_Icon_vector_logo.png"></img> 
        <img  className="h-[60px] animate-pulse duration-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"></img>
        <img  className="h-[60px] animate-pulse duration-100" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"></img>
        <img  className="h-[60px] animate-pulse duration-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"></img>
        <img  className="h-[50px] w-[100px] animate-pulse duration-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/250px-Git-logo.svg.png"></img>
        <img  className="h-[45px] w-[130px] animate-pulse duration-100" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Docker_logo.svg/250px-Docker_logo.svg.png"></img>
        </div>
        </div>
        <hr className="animate-pulse duration-150 border-cyan-400 m-4 ms-8 me-8 bg-cyan-500 text-cyan-500 shadow-cyan-500"></hr>
        <div id="projects" className="flex flex-col justify-center items-center gap-2">
          <h3 className="typing-2 items-center">My Projects</h3>
          <img className="h-[100px] w-[200px] animate-pulse duration-1000 md:h-[200px] md:w-[350px]" src={bbms}></img>
          <a href="https://onest-mern-app-frontend.onrender.com/"><p>Simple CRUD Using MERN</p> </a>
        </div>
        <hr className="animate-pulse duration-150 ms-8 me-8 border-cyan-400 m-4 bg-cyan-500 text-cyan-500 shadow-cyan-500"></hr>
        <div id="contact" className="flex gap-2 p-3 flex-col items-center justify-center">
          <h3>Contact Me</h3>
          <form className="flex flex-col p-2">
            <input value={name} onChange={(e)=>setName(e.target.value)} className="m-2 p-2 border hover:shadow-sm shadow-cyan-300 duration-700" placeholder="Name" type="text"></input>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="m-2 p-2 border hover:shadow-sm shadow-cyan-300 duration-700" placeholder="Email" type="text"></input>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} type="text" className="border p-2 m-2 h-[100px] duration-700 hover:shadow-sm shadow-cyan-300" placeholder="Message"></textarea>
            <input placeholder="Submit" onClick={handleSubmit} className="rounded-full mt-6 hover:shadow-sm hover:animate-pulse ease-in-out duration-900 shadow-cyan-300 bg-slate-700" type="submit"></input>
          </form>
        </div>
        <hr className="border-cyan-400 animate-pulse duration-150  m-4 ms-8 me-8 bg-cyan-500 text-cyan-500 shadow-cyan-500"></hr>
        <div id="social" className="flex gap-3 flex-wrap flex-col items-center">
          <h2 className="">Socials</h2>
          <div className="flex gap-3 mb-5">
           <a href="https://www.linkedin.com/in/sanjay-d-459590279" className="hover:animate-bounce duration-1000 ease-in-out"><img className="h-7 animate-pulse md:h-10 md:w-10 w-7 rounded-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"></img></a>
           <a href="https://github.com/Sanjay007321" className="hover:animate-bounce duration-1000 ease-in-out"> <img className="h-7 animate-pulse md:h-10 md:w-10 w-7 fill-white" src="https://img.icons8.com/ios11/512/FFFFFF/github.png"></img></a>
           <a href="https://www.instagram.com/_._s_a_n_j_._/" className="hover:animate-bounce duration-1000 ease-in-out"> <img className="md:h-10 animate-pulse md:w-10 h-7 w-7 fill-white rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"></img></a>
           </div>
          
        </div>
    </div>
  );
}
