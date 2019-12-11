import React from 'react'
import Popup from 'reactjs-popup'
// import Lightbox from 'Lightbox'
import DavidBs from './David Bs Flip.jpg'
import Jagger from "./Dallas-blunt.jpg"
import Bango from "./Bango.jpg"
import BenCoffee from "./Ben Coffee.jpg"
import BenGrab from "./Ben Grab.jpg"
// import BenNoseG from "./Ben Nose G.jpg"
// import BenNoseBlunt from "./Ben NoseBlunt.jpg"
// import BenTre from "./Ben Tre.jpg"
import BenWall from "./Ben Wall.jpg"
// import BenOllie from "./Ben ollie.jpg"
import CarterHurricane from "./Carter Hurricane.jpg"
import CarterSmith from "./Carter Smith.jpg"
// import DavidFakieFlip from "./David Fakie Flip.jpg"
// import DavidOllie from "./David Ollie.jpg"
import GeorgeFeeble from "./George Feeble.jpg"
import GeorgeFsBoard from "./George Fs Board.jpg"
import HenryNoseBlunt from "./Henry Nose Blunt.jpg"
import Jamie from "./Jamie.jpg"
// import JaredNoseG from "./Jared Nose G.jpg"
import JoshNoseSlide from "./Josh Nose Slide.jpg"
// import JoshSlappyTail from "./Josh Slappy Tail.jpg"
// import JoshWallride from "./Josh Wallride.jpg"
import KCBLunt from "./KC BLunt.jpg"
import Matt50 from "./Matt 5-0.jpg"
// import MattSmith from "./Matt Smith.jpg"
import MaxGrab from "./Max Grab.jpg"
// import MikeyCrook from "./Mikey Crook.jpg"
// import MikeyNoseG from "./Mikey Nose G.jpg"
// import NathanFeeble from "./Nathan Feeble.jpg"
import RoddieOllie from "./Roddie Ollie.jpg"
import RoddieSmith from "./Roddie Smith.jpg"
// import SlinkyHippie from "./Slinky Hippie.jpg"
import TateFsFlip from "./Tate Fs Flip.jpg"
// import TateOllie from "./Tate Ollie.jpg"
// import TateSwFlip from "./Tate Sw Flip.jpg"
import TateTre from "./Tate Tre.jpg"
// import TrungBlunt from "./Trung Blunt.jpg"
import ZachHurricane from "./Zach Hurricane.jpg"
import ZachManny from "./Zach Manny.jpg"
import joshwall from "./josh wall.jpg"
import ZionWarmUpFsLip from "./zion warm up fs lip.jpg"
import Lightbox from './Lightbox'

function InnerInfo(props) {
 
    return (
        <div className="card p-3 text-center">
                {/* <img className={props.cardClass} src={props.src} alt="Card cap" onClick={props.action}/> */}
                {/* <Popup trigger={<img className={props.cardClass} src={props.src} alt="Card cap" onClick={props.action}/>} position='center'>
                <img style={{position: "fixed"}} className={props.cardClass} src={props.src} alt="Card cap" onClick={props.action}/>
                </Popup> */}

               {/* <LightCardModal src={props.src}/> */}
                <Lightbox src={props.src}/>
                {/* <LightCard src={props.src} className={props.cardClass}/> */}
                
               
               
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
            }, 
            {
                id:7,
                moduleID: "img07",
                divId: "myModal7",
                cardClass: "card-img-top img-fluid myImg7",
                name: "Brian Gonterman",
                trick: "Crooked Grind",
                location: "Downtown Houston",
                src: Bango

            },
            {
                id:8,
                moduleID: "img08",
                divId: "myModal8",
                cardClass: "card-img-top img-fluid myImg8",
                name: "Ben Havran",
                trick: "Ollie",
                location: "Houston, TX",
                src: BenCoffee
            }, 
            {
                id:9,
                moduleID: "img09",
                divId: "myModal9",
                cardClass: "card-img-top img-fluid myImg9",
                name: "Carter Wood",
                trick: "Bs Hurricane",
                location: "Houston, TX (Tranquility Park)",
                src: CarterHurricane
            },
            {
                id:10,
                moduleID: "img10",
                divId: "myModal10",
                cardClass: "card-img-top img-fluid myImg10",
                name: "Jamie Foy",
                trick: "Switch 180 Crook",
                location: "Dallas, TX",
                src: Jamie
            },
            {
                id:11,
                moduleID: "img11",
                divId: "myModal11",
                cardClass: "card-img-top img-fluid myImg11",
                name: "Matt Feist",
                trick: "5-0 Grind",
                location: "Houston, TX",
                src: Matt50
            },
            {
                id:12,
                moduleID: "img12",
                divId: "myModal12",
                cardClass: "card-img-top img-fluid myImg12",
                name: "Max Peterson",
                trick: "Backside Boneless",
                location: "Houston, TX",
                src: MaxGrab
            },
            {
                id:13,
                moduleID: "img13",
                divId: "myModal13",
                cardClass: "card-img-top img-fluid myImg13",
                name: "Tate Malpass",
                trick: "Tre Flip",
                location: "Houston, TX",
                src: TateTre
            },
            {
                id:14,
                moduleID: "img14",
                divId: "myModal14",
                cardClass: "card-img-top img-fluid myImg14",
                name: "Zach Godlewski",
                trick: "180 Sw Manny",
                location: "Downtown Houston",
                src: ZachManny
            },
            {
                id:15,
                moduleID: "img15",
                divId: "myModal15",
                cardClass: "card-img-top img-fluid myImg15",
                name: "KC Chan",
                trick: "Tailslide Bluntslide",
                location: "Tokyo, Japan",
                src: KCBLunt
            },
            {
                id:16,
                moduleID: "img16",
                divId: "myModal16",
                cardClass: "card-img-top img-fluid myImg16",
                name: "Josh Ramon",
                trick: "Bs Wallride",
                location: "Houston, Texas",
                src: joshwall
            },
            {
                id:17,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Zion Wright",
                trick: "Fs Lip",
                location: "Houston, Texas",
                src: ZionWarmUpFsLip
            },
            {
                id:18,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Tate Malpass",
                trick: "Fs Flip",
                location: "Sugarland, Texas",
                src: TateFsFlip
            },
            {
                id:19,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Ben Havran",
                trick: "Indie Grab",
                location: "Houston, Texas (EZ-7)",
                src: BenGrab
            },
            {
                id:20,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Ben Havran",
                trick: "Wallride",
                location: "Houston, Texas",
                src: BenWall
            },
            {
                id:21,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "George Karvounis",
                trick: "Feeble",
                location: "San Francisco, California",
                src: GeorgeFeeble
            },
            {
                id:22,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Carter Wood",
                trick: "Bs Smith",
                location: "Katy, Texas",
                src: CarterSmith
            },
            {
                id:23,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Josh Ramon",
                trick: "Fs Noseslide",
                location: "New York City",
                src: JoshNoseSlide
            },
            {
                id:23,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Zach Godlewski",
                trick: "Hurricane",
                location: "Downtown, Houston",
                src: ZachHurricane
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
