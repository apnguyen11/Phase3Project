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
    constructor(props){
        super(props)
        this.setState(props)
       
    }
   

    render(){
        console.log(this.props.props.skaters, '***this the props***')
        const cards = this.props.props.skaters.map(
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
