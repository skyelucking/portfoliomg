import React from "react"
import {Link, Outlet, useLocation} from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>Skye Lucking Bootcamp Portfolio</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export function About(){
    return(
        <div>
            <h1>Skye Lucking ~ About</h1>
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
export function Portfolio(){
    return(
        <div>
            <h1>Portfolio</h1>
            <Outlet />
        </div>
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