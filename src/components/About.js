import React from 'react'
import self from './self.jpg'
import '../App.css';

function About() {
    return (
        <div>
            <h1 id='andy'>PHI NGUYEN</h1>
            <div id="container">
                <div>
                        <img id="self" src={self} alt="self"/>
                </div>
            </div>
                    <div  style={{textAlign: "center"}}>
                    <small id='ben' className="text-muted"> Photo by<cite title="Source Title"> Benjammin Ly</cite> </small>
            </div>
            
            <p id="main"> 
                        Born in Vietnam, photographer and skateboarder Phi Nguyen lives and works in Houston, TX. Initially stemming from his interest in videography, Phi started shooting photos soon after picking up a video camera after a few years. Through trial and error he has procured images of some of the most interesting and talented skateboarders in Houston. Not only this but his endeavors outside of his home town have also proven to be a testimonial to the incredible scene in his home town capturing the true talent of Texas natives. Furthermore, he has been fortunate enough to document up and coming pros and ams visitig from outside of Houston. Here is a short glance of his work...
                </p>
        </div>
    )
}

export default About;
