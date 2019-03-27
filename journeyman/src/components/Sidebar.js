import React, { Component } from 'react'
import { delPicture } from '../redux/action';
import {addComment} from '../redux/action'
import{startaddingcomment} from '../redux/action'

export default class Sidebar extends Component {
    constructor()
    {
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
  
    handleSubmit(event)
    {
        event.preventDefault()
       
        const comment=event.target.elements.comment.value
        this.props.dispatch(startaddingcomment(comment,this.props.id))
    }
  render() {
    const comments=this.props.comments[this.props.id] || []
    
    return (
       
      <div className="comment">
       {
         comments.map((comment,index)=>
         {
           return(
             <h3 key={index}>{comment}</h3>
           )
         })
       }
        <form className="comment-form" onSubmit={this.handleSubmit}>

       
            <input type="text" placeholder="type something here" name='comment'/ >
           
           
            <input type="submit"/>
        </form>




        
      </div>
    )
  }
}


