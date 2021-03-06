import React from 'react'

import '../App.css';
import Image from 'react-bootstrap/Image'

function About() {
    return (
        <div>
            <h1 id='andy'>PHI NGUYEN</h1>
         
            <div id="container" >
                <div>
                        <Image id="self" src={"https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/self%20copy.jpg?alt=media&token=9a775e28-a05e-4766-8121-5798a9ab0f1c"} alt="self"/>
                </div>
            </div>
                    <div  style={{textAlign: "center"}}>
                        <small id='ben' className="text-muted"> Photo by<cite title="Source Title"> Benjammin Ly</cite> </small>
                    </div>
            
                <p id="main"> 
                        Born in Vietnam, photographer and skateboarder Phi Nguyen lives and works in Houston, TX. Initially stemming from his interest in videography, Phi started shooting photos soon after picking up a video camera after a few years. Through trial and error he has procured images of some of the most interesting and talented skateboarders in Houston. Not only this but his endeavors outside of his home town have also proven to be a testimonial to the incredible scene in Houston capturing the true talent of Texas natives. Furthermore, he has been fortunate enough to document up and coming pros and ams visiting from outside of the city. Here is a short glance of his work...
                </p>
        </div>
    )
}

export default About;
