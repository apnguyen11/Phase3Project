import React from 'react'
import DavidBs from './David Bs Flip.jpg'
import Bango from "./images/Bango.jpg"

function Inner(props) {
    console.log(props.src)
    var imageName = require(props.src)
    console.log(imageName)
    return (
        <div className="card p-3 text-center">
                <img className={props.cardClass} src={Bango} alt="Card cap" onClick={props.action}/>
               
                <div className="card-block">
                    <h4 className="card-title">{props.name} </h4>
                    <p>{props.trick}</p>
                        <small className="text-muted">
                                {props.location}<cite title="Source Title"></cite>
                        </small>
                </div>
            </div>
    )
}

class Cards extends React.Component{
    state = {
        skaters: [
            {
                id: 1,
                moduleID: "img01",
                divId: "myModal1",
                cardClass: "card-img-top img-fluid myImg1",
                name: "David Langston",
                trick: "Backside Flip",
                location: "New York City",
                src: "./images/Dallas-blunt.jpg"
            },
            {
                id: 2,
                moduleID: "img02",
                divId: "myModal2",
                cardClass: "card-img-top img-fluid myImg2",
                name: "Jagger Eaton",
                trick: "Blunt Slide",
                location: " Dalls, Texas",
                src: "./images/Dallas-blunt.jpg"
            },
            {
                id: 3,
                moduleID: "img03",
                divId: "myModal3",
                cardClass: "card-img-top img-fluid myImg3",
                name: "Roddie Froderick",
                trick: "Frontside Smith",
                location: "San Francisco, California",
                src: "./images/Dallas-blunt.jpg"
            
            }, 
            {
                id:4,
                moduleID: "img04",
                divId: "myModal4",
                cardClass: "card-img-top img-fluid myImg4",
                name: "George Karvounis",
                trick: "Fronstide Boardslide",
                location: "San Francisco, California",
                src: "./images/Dallas-blunt.jpg"
            },
            {
                id:5,
                moduleID: "img05",
                divId: "myModal5",
                cardClass: "card-img-top img-fluid myImg5",
                name: "Henry Gartland",
                trick: "Nose Blunt",
                location: "Downtown Houston (Underground Tunnels)",
                src: "./images/Dallas-blunt.jpg"
            },
            {
                id:6,
                moduleID: "img06",
                divId: "myModal6",
                cardClass: "card-img-top img-fluid myImg6",
                name: "Roddie Frederick",
                trick: "Ollie",
                location: "San Francisco, California",
                src: "./images/Dallas-blunt.jpg"
            }
           

        ]
    }
    render(){
        const cards = this.state.skaters.map(
            (obj) =>  
                <Inner 
                    key={obj.id} 
                    cardClass={obj.cardClass} 
                    src={obj.src} 
                    name={obj.name} 
                    trick={obj.trick} 
                    location={obj.location} 
                    action={this.handleClick}
                />
        )
        return(
           cards 
        )
    }
}



export default Cards;
