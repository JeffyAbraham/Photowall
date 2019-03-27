import React from 'react'
import { DeletethesePost } from '../redux/action';
import {Link} from 'react-router-dom'

export default function Display (props) {
  
    const  posts=props.posts

    return (
        
    
     <figure className="figure">

        
      <Link to ={`pop/${posts.id}`}> <img className="photo" src={posts.imageLink} alt={posts.description} ></img></Link>  
        <figcaption><p>{posts.description}</p></figcaption>
        <center><button className="remove-button" onClick={()=>{props.dispatch(DeletethesePost(props.index,posts.id))}} >Remove</button></center>
     </figure>
    )
  }
  