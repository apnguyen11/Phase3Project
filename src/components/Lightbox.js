import React from 'react'
import '../App.css'
import DavidBs from './David Bs Flip.jpg'

class Lightbox extends React.Component {
  state = { isOpen: false};

  handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen});
      console.log("clicked")
  
    
  }
  render() {
    return ( 
      <div>
        <img
          className="small image"
          src = {this.props.src}
          onClick={this.handleShowDialog}
          alt="noimage"
        />
        {this.state.isOpen && (
   
            <img
              style={{position: 'absolute', justifyContent: 'center'}}
              className="image modal-content"
              src= {this.props.src}
              onClick={this.handleShowDialog}
              alt="noimage"
            />
        
        )}
      </div>
    );
  }
}

export default Lightbox;
