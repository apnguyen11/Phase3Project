import React from 'react'

import Lightbox from './Lightbox'

function InnerInfo(props) {
 
    return (
        <div className="card p-3 text-center">  
                <Lightbox src={props.src} className={props.cardClass}/>
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
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/David%20Bs%20Flip.jpg?alt=media&token=b848e131-5cda-4da7-bfb6-d4266acf9623"
            },
            {
                id: 2,
                moduleID: "img02",
                divId: "myModal2",
                cardClass: "card-img-top img-fluid myImg2",
                name: "Jagger Eaton",
                trick: "Blunt Slide",
                location: "Dalls, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Dallas-blunt.jpg?alt=media&token=c69b85cf-2810-457f-bd03-bc85040fac59"
            },
            {
                id: 3,
                moduleID: "img03",
                divId: "myModal3",
                cardClass: "card-img-top img-fluid myImg3",
                name: "Roddie Froderick",
                trick: "Frontside Smith",
                location: "San Francisco, California",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Roddie%20Smith.jpg?alt=media&token=6fef4395-54c4-4e52-a4dc-ffb22def5210"
            
            }, 
            {
                id:4,
                moduleID: "img04",
                divId: "myModal4",
                cardClass: "card-img-top img-fluid myImg4",
                name: "George Karvounis",
                trick: "Fronstide Boardslide",
                location: "San Francisco, California",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/George%20Fs%20Board.jpg?alt=media&token=4183032e-f8bf-4271-a524-9bd25ca4d958"
            },
            {
                id:5,
                moduleID: "img05",
                divId: "myModal5",
                cardClass: "card-img-top img-fluid myImg5",
                name: "Henry Gartland",
                trick: "Nose Blunt",
                location: "Downtown Houston (Underground Tunnels)",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Henry%20Nose%20Blunt.jpg?alt=media&token=7bdc28da-8be3-4a91-9a4b-37c37b07b5f5"
            },
            {
                id:6,
                moduleID: "img06",
                divId: "myModal6",
                cardClass: "card-img-top img-fluid myImg6",
                name: "Roddie Frederick",
                trick: "Ollie",
                location: "San Francisco, California",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Roddie%20Ollie.jpg?alt=media&token=b81fe1ed-adb7-4f80-ad92-c94b51541559"
            }, 
            {
                id:7,
                moduleID: "img07",
                divId: "myModal7",
                cardClass: "card-img-top img-fluid myImg7",
                name: "Brian Gonterman",
                trick: "Crooked Grind",
                location: "Downtown Houston",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Bango.jpg?alt=media&token=d4ae7d2e-6730-46dc-9234-714f76750ce8"

            },
            {
                id:8,
                moduleID: "img08",
                divId: "myModal8",
                cardClass: "card-img-top img-fluid myImg8",
                name: "Ben Havran",
                trick: "Ollie",
                location: "Houston, TX",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20Coffee.jpg?alt=media&token=01bb7314-1384-419d-b769-4c9de4bfcabd"
            }, 
            {
                id:9,
                moduleID: "img09",
                divId: "myModal9",
                cardClass: "card-img-top img-fluid myImg9",
                name: "Carter Wood",
                trick: "Bs Hurricane",
                location: "Houston, TX (Tranquility Park)",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Carter%20Hurricane.jpg?alt=media&token=75a4bd8e-d647-4ffd-8d8d-8c621b372ef7"
            },
            {
                id:10,
                moduleID: "img10",
                divId: "myModal10",
                cardClass: "card-img-top img-fluid myImg10",
                name: "Jamie Foy",
                trick: "Switch 180 Crook",
                location: "Dallas, TX",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Jamie.jpg?alt=media&token=31072924-8c63-4489-a8b1-3d4d26c9e670"
            },
            {
                id:11,
                moduleID: "img11",
                divId: "myModal11",
                cardClass: "card-img-top img-fluid myImg11",
                name: "Matt Feist",
                trick: "5-0 Grind",
                location: "Houston, TX",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Matt%205-0.jpg?alt=media&token=17283261-e6ca-4881-8270-f7d5155d64e7"
            },
            {
                id:12,
                moduleID: "img12",
                divId: "myModal12",
                cardClass: "card-img-top img-fluid myImg12",
                name: "Max Peterson",
                trick: "Backside Boneless",
                location: "Houston, TX",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Max%20Grab.jpg?alt=media&token=24e41d9f-7493-43cf-8ff3-f1a13dd84f04"
            },
            {
                id:13,
                moduleID: "img13",
                divId: "myModal13",
                cardClass: "card-img-top img-fluid myImg13",
                name: "Tate Malpass",
                trick: "Tre Flip",
                location: "Houston, TX",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Tate%20Tre.jpg?alt=media&token=953a1156-e26e-426b-8783-45eba0babe71"
            },
            {
                id:14,
                moduleID: "img14",
                divId: "myModal14",
                cardClass: "card-img-top img-fluid myImg14",
                name: "Zach Godlewski",
                trick: "180 Sw Manny",
                location: "Downtown Houston",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Zach%20Manny.jpg?alt=media&token=3355d581-a59a-4bc3-b443-b3c878dcc57e"
            },
            {
                id:15,
                moduleID: "img15",
                divId: "myModal15",
                cardClass: "card-img-top img-fluid myImg15",
                name: "KC Chan",
                trick: "Tailslide Bluntslide",
                location: "Tokyo, Japan",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/KC%20BLunt.jpg?alt=media&token=cc97efd3-f9dd-4957-8ab4-a793332f984c"
            },
            {
                id:16,
                moduleID: "img16",
                divId: "myModal16",
                cardClass: "card-img-top img-fluid myImg16",
                name: "Josh Ramon",
                trick: "Bs Wallride",
                location: "Houston, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/josh%20wall.jpg?alt=media&token=f63edbb1-bc9f-40eb-8f6f-2ae8a89b604c"
            },
            {
                id:17,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Zion Wright",
                trick: "Fs Lip",
                location: "Houston, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/zion%20warm%20up%20fs%20lip.jpg?alt=media&token=9abe69f0-05a8-4ca9-bc28-23675c8afd3c"
            },
            {
                id:18,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Tate Malpass",
                trick: "Fs Flip",
                location: "Sugarland, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Tate%20Fs%20Flip.jpg?alt=media&token=05ff88e6-7c16-41c7-a114-e63f6ef0126b"
            },
            {
                id:19,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Ben Havran",
                trick: "Indie Grab",
                location: "Houston, Texas (EZ-7)",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20Grab.jpg?alt=media&token=bc5e2ff6-9745-40a4-bb2a-807497837d23"
            },
            {
                id:20,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Ben Havran",
                trick: "Wallride",
                location: "Houston, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20Wall.jpg?alt=media&token=befab6b6-1d3b-49a7-a4de-d879bd6f62de"
            },
            {
                id:21,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "George Karvounis",
                trick: "Feeble",
                location: "San Francisco, California",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/George%20Feeble.jpg?alt=media&token=01280973-f628-4daa-a6a5-3f26f2535089"
            },
            {
                id:22,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Carter Wood",
                trick: "Bs Smith",
                location: "Katy, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Carter%20Smith.jpg?alt=media&token=1f1a7a68-7bdb-49cb-8f77-a6d81ab43832"
            },
            {
                id:23,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Josh Ramon",
                trick: "Fs Noseslide",
                location: "New York City",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Josh%20Nose%20Slide.jpg?alt=media&token=f451383d-0b86-4ff1-b6c2-fcbedbb93415"
            },
            {
                id:23,
                moduleID: "img17",
                divId: "myModal17",
                cardClass: "card-img-top img-fluid myImg17",
                name: "Zach Godlewski",
                trick: "Hurricane",
                location: "Downtown, Houston",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Zach%20Hurricane.jpg?alt=media&token=0c890432-6284-40f2-8192-270e36651fd8"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Ben Havran",
                trick: "Nose Grind",
                location: "Downtown, Houston (Penzoil)",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20Nose%20G.jpg?alt=media&token=c1823986-4e85-43fa-a5ea-0e25d2c8d528"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "David Langston",
                trick: "Ollie",
                location: "Downtown, Houston",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/David%20Ollie.jpg?alt=media&token=89ad83d7-fa8c-4cc2-830d-4c910757a5bc"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Trung Nguyen",
                trick: "Bluntslide",
                location: "Austin, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Trung%20Blunt.jpg?alt=media&token=ec96a329-bbfb-4e8d-8164-94468557a1fa"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Tate Malpass",
                trick: "Switch Flip",
                location: "Austin, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Tate%20Sw%20Flip.jpg?alt=media&token=0abad017-7487-45d3-a778-e94bbd15a5c9"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Tate Malpass",
                trick: "Ollie",
                location: "Houston Minute Maid Park",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Tate%20Ollie.jpg?alt=media&token=368771a4-30d5-47a3-a3e8-3f377045505c"
            },
           
            {
                cardClass: "card-img-top img-fluid",
                name: "Nathan Pacheco",
                trick: "Feeble",
                location: "Houston, Texas",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Nathan%20Feeble.jpg?alt=media&token=524a8d49-394d-40b3-b18f-aed8da6ae8e8"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Ben Havran",
                trick: "Nose Blunt",
                location: "New York (LES)",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20NoseBlunt.jpg?alt=media&token=90e5d2d6-f060-41c4-a769-48b14209265a"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Kyle Cielencki",
                trick: "Hippie Shuv It",
                location: "Austin, Texas",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Slinky%20Hippie.jpg?alt=media&token=022c3ba0-6ff7-4482-9028-93eb886e9a9a"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Mikey Brown",
                trick: "Crooked Grind",
                location: "Houston, Texas",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Mikey%20Crook.jpg?alt=media&token=5be6175d-b86a-4a61-9de9-da78122dc97b"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Josh Ramon",
                trick: "Wallride",
                location: "New York (Brooklyn Banks)",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Josh%20Wallride.jpg?alt=media&token=aa483775-1a7f-49cd-a988-c3a30a7703a3"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Ben Havran",
                trick: "Tre Flip",
                location: "Houston, Texas",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20Tre.jpg?alt=media&token=3de319f7-2a3f-4399-b89e-6f2fc16b3d0a"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Matt Feist",
                trick: "Bs Smith",
                location: "Houston, Texas",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Matt%20Smith.jpg?alt=media&token=f2c415dd-aae4-448f-8223-9c3ba84cf9cd"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Josh Ramon",
                trick: "Slappy Tailslide",
                location: "Houston, Texas",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Josh%20Slappy%20Tail.jpg?alt=media&token=a18fc582-2cb3-46fc-8147-e8a302c2b557"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Jared Guitierrez",
                trick: "Nose Grind",
                location: "Downtown Houston",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Jared%20Nose%20G.jpg?alt=media&token=92aca055-42a6-4ed7-8781-455e35fbfe9c"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "David Langston",
                trick: "Fakie Flip",
                location: "Downtown Houston",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/David%20Fakie%20Flip.jpg?alt=media&token=06878cd4-3513-4324-a9f0-501a9978c6dc"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Mikey Brown",
                trick: "Nose Grind",
                location: "Downtown Houston",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Mikey%20Nose%20G.jpg?alt=media&token=96e20ad8-d3e5-4368-9d31-d434890ed693"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Ben Havran",
                trick: "Ollie",
                location: "Rice Village",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/Ben%20ollie.jpg?alt=media&token=df978229-71e6-4457-8f2c-495502674661"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Josh Ramon",
                trick: "Bs Smith",
                location: "Downtown Houston",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/josh%201ebt.JPG?alt=media&token=fa2770ed-ebe0-4593-88af-0f276f004054"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Ben Havran",
                trick: "Fs Lip",
                location: "Houston, Texas",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/ben%20fs%20lip%20huge.jpg?alt=media&token=edaa8dca-f5df-41a6-8630-fecda068a536"
            },
            {
                cardClass: "card-img-top img-fluid",
                name: "Josh Ramon",
                trick: "Bs Lip",
                location: "Downtown Houston",
                src:  "https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/josh%20bs%20lip%20dt.jpg?alt=media&token=41f242f0-a138-41d1-b214-7988edf04878"
            }


        ]
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
