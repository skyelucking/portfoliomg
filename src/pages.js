import React from "react"
import { Outlet, useLocation} from "react-router-dom"
import JumboHello from "./Components/JumboHello"
import AboutSkye from "./Components/About"
import { Portfolios } from "./Components/Portfolios"
import { Bootcamps } from "./Components/Bootcamp"


export function Home(){
    return(
        <div>
             <JumboHello />
        </div>
    )
}

export function About(){
    return(
        <div>
             <AboutSkye />
        </div>
    )
}

export function Resume(){
    return(
        <div>
            <h1>Resume</h1>
        </div>
    )
}
export function Contact(){
    return(
        <div>
            <h1>Contact</h1>
        </div>
    )
}
export function Portfolio({ id, title, content, link, thumb, slug }){
    return(
        <>
        <div>
        <Portfolios />
        <Bootcamps />
       
        </div>
        </>
    )
}

export function BootPort({ id, title, content, link, thumb, slug }){
    return(
        <>
        <div>
            <header class="header text-center">
        <img src={process.env.PUBLIC_URL + '/Assets/Images/codingbootcamp_header.png'} className="portlong-img img-fluid" alt="Full Stack Developer Coding Bootcamp at University of Arizona" style={{marginBottom: '20px'}}></img></header>
        <Bootcamps />
       
        </div>
        </>
    )
}



export function CodingBootcamp(){
    return(
        <div>
            <h1>Full-Stack Developer Coding Bootcamp</h1>
        </div>
    )
}
export function UnityDev(){
    return(
        <div>
            <h1>AR/VR/XR and Unity Development</h1>
        </div>
    )
}

export function InstructionalDesign(){
    return(
        <div>
            <h1>Instructional Design and Corporate Training</h1>
        </div>
    )
}

export function Whoops404(){
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}!</h1>
        </div>
    )
}