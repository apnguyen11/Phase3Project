import React from 'react'
import '../App.css'
import DavidBs from './David Bs Flip.jpg'
import Image from 'react-bootstrap/Image'


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
          className={"image"}
          src = {this.props.src}
          onClick={this.handleShowDialog}
          alt="noimage"
        />
        {this.state.isOpen && (
          <div
            className="dialog"
            style={{ position: "fixed", top: '0', left: '0', zIndex: '1', overflow: 'auto',
          height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}
            open
            onClick={this.handleShowDialog}
          >
            <Image
              style={{height: '75%', position: 'fixed', borderRadius: '8px', animationName: 'zoom', animationDuration: '0.6s'}}
            
              src= {this.props.src}
              onClick={this.handleShowDialog}
              alt="noimage"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Lightbox;
