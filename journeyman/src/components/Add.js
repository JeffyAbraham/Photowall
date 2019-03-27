import React, { Component } from 'react'
import uuid from 'uuid'

import { startAddingPost } from '../redux/action';
import { withRouter } from "react-router-dom";
 class Add  extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event)
    {
         event.preventDefault();
       const imageLink=event.target.elements.Link.value
         const Description=event.target.elements.Description.value
         const post={id:uuid(),description:Description,imageLink:imageLink}
         if(imageLink && Description)
         {
          this.props.dispatch(startAddingPost(post))
            this.props.history.push('/');

           
         }
         


    }
  render() {
  
    return (
      <div>
         
          
          <h2>Write your story and share</h2>
        <form onSubmit={this.handleSubmit}>
            
            <input type="text" placeholde="Image" name="Link"/>
            <input type="text" placeholder="Description" name="Description"/>

            <button>Post Here</button>






        </form>
      </div>
    )
  }
}
export default withRouter(Add);