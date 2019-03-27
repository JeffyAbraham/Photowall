import React from 'react'
import Display from './Display'
import {Link} from 'react-router-dom'



export default function Home(props)  {
  
    return (
        <div>
            <center><h2>Click here to create an album</h2></center>
            <Link className="addIcon" to="/Add"></Link>
      <div className="photoGrid">
        {props.posts.map((poster,index) => <Display key={index} posts={poster} dispatch={props.dispatch} index={index}/>)
        
            
        
        
        
        }
      </div>
      </div>
    )
  
  }
