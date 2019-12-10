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
          className={"image"}
          src = {this.props.src}
          onClick={this.handleShowDialog}
          alt="noimage"
        />
        {this.state.isOpen && (
          <div
            className="dialog"
            style={{ position: "fixed", top: '0', left: '0', zIndex: '1', overflow: 'auto',
          height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3vw' }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              style={{height: '75%'}}
              className="image modal-content"
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
