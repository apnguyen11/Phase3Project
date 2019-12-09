import React from 'react'
import '../App.css'
import DavidBs from './David Bs Flip.jpg'

class Lightbox extends React.Component {
  state = { isOpen: false};

  handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen});
      console.log("clicked")
  }
  render(props) {
    console.log(props)
    return ( 
      <div>
        <img
          className="small image"
          src = {this.props.src}
          onClick={this.handleShowDialog}
          alt="noimage"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src= {this.props.src}
              onClick={this.handleShowDialog}
              alt="noimage"
            />
          </dialog>
        )}
      </div>
    );
  }
}

export default Lightbox;
