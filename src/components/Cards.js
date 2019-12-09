import React from 'react'
// import Lightbox from 'Lightbox'
import DavidBs from './David Bs Flip.jpg'
import Jagger from "./Dallas-blunt.jpg"
// import Bango from "./Bango.jpg"
// import BenCoffee from "./Ben Coffee.jpg"
// import BenGrab from "./Ben Grab.jpg"
// import BenNoseG from "./Ben Nose G.jpg"
// import BenNoseBlunt from "./Ben NoseBlunt.jpg"
// import BenTre from "./Ben Tre.jpg"
// import BenWall from "./Ben Wall.jpg"
// import BenOllie from "./Ben ollie.jpg"
// import CarterHurricane from "./Carter Hurricane.jpg"
// import CarterSmith from "./Carter Smith.jpg"
// import DavidFakieFlip from "./David Fakie Flip.jpg"
// import DavidOllie from "./David Ollie.jpg"
// import GeorgeFeeble from "./George Feeble.jpg"
import GeorgeFsBoard from "./George Fs Board.jpg"
import HenryNoseBlunt from "./Henry Nose Blunt.jpg"
// import Jamie from "./Jamie.jpg"
// import JaredNoseG from "./Jared Nose G.jpg"
// import JoshNoseSlide from "./Josh Nose Slide.jpg"
// import JoshSlappyTail from "./Josh Slappy Tail.jpg"
// import JoshWallride from "./Josh Wallride.jpg"
// import KCBLunt from "./KC BLunt.jpg"
// import Matt50 from "./Matt 5-0.jpg"
// import MattSmith from "./Matt Smith.jpg"
// import MaxGrab from "./Max Grab.jpg"
// import MikeyCrook from "./Mikey Crook.jpg"
// import MikeyNoseG from "./Mikey Nose G.jpg"
// import NathanFeeble from "./Nathan Feeble.jpg"
import RoddieOllie from "./Roddie Ollie.jpg"
import RoddieSmith from "./Roddie Smith.jpg"
// import SlinkyHippie from "./Slinky Hippie.jpg"
// import TateFsFlip from "./Tate Fs Flip.jpg"
// import TateOllie from "./Tate Ollie.jpg"
// import TateSwFlip from "./Tate Sw Flip.jpg"
// import TateTre from "./Tate Tre.jpg"
// import TrungBlunt from "./Trung Blunt.jpg"
// import ZachHurricane from "./Zach Hurricane.jpg"
// import ZachManny from "./Zach Manny.jpg"
// import joshwall from "./josh wall.jpg"
// import ZionWarmUpFsLip from "./zion warm up fs lip.jpg"
import Lightbox from './Lightbox'

function InnerInfo(props) {
 
    return (
        <div className="card p-3 text-center">
                {/* <img className={props.cardClass} src={props.src} alt="Card cap" onClick={props.action}/> */}
                <Lightbox src={props.src}/>
               
               
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
                src: DavidBs
            },
            {
                id: 2,
                moduleID: "img02",
                divId: "myModal2",
                cardClass: "card-img-top img-fluid myImg2",
                name: "Jagger Eaton",
                trick: "Blunt Slide",
                location: " Dalls, Texas",
                src: Jagger
            },
            {
                id: 3,
                moduleID: "img03",
                divId: "myModal3",
                cardClass: "card-img-top img-fluid myImg3",
                name: "Roddie Froderick",
                trick: "Frontside Smith",
                location: "San Francisco, California",
                src: RoddieSmith
            
            }, 
            {
                id:4,
                moduleID: "img04",
                divId: "myModal4",
                cardClass: "card-img-top img-fluid myImg4",
                name: "George Karvounis",
                trick: "Fronstide Boardslide",
                location: "San Francisco, California",
                src: GeorgeFsBoard
            },
            {
                id:5,
                moduleID: "img05",
                divId: "myModal5",
                cardClass: "card-img-top img-fluid myImg5",
                name: "Henry Gartland",
                trick: "Nose Blunt",
                location: "Downtown Houston (Underground Tunnels)",
                src: HenryNoseBlunt
            },
            {
                id:6,
                moduleID: "img06",
                divId: "myModal6",
                cardClass: "card-img-top img-fluid myImg6",
                name: "Roddie Frederick",
                trick: "Ollie",
                location: "San Francisco, California",
                src: RoddieOllie
            }
           

        ]
    }

    
    handleClickImage = (ev) => {
        console.log('clicked')



   

                // Lightbox.classList.add('active')

    }
    render(){
        const cards = this.state.skaters.map(
            (obj) =>  
                <InnerInfo 
                    key={obj.id} 
                    cardClass={obj.cardClass} 
                    src={obj.src} 
                    name={obj.name} 
                    trick={obj.trick} 
                    location={obj.location} 
                    action={this.handleClickImage}
                />
        )
        return(
           cards 
        )
    }
}



export default Cards;
