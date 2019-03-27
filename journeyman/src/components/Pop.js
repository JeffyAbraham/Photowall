import React, { Component } from 'react'
import Header from './Header';
import Display from './Display';
import Sidebar from './Sidebar';
import '../styles/style2.css';

    
    export default class Pop extends Component {
      
      render() {
          
        
         const id=this.props.match.params.id

        
        const post=this.props.posts.find((post)=>post.id===id)
    
        
        return (
            <div>
            <Header title={'Gallery'}/>
                

          <div className='single-photo'>
          <Display posts={post}/>
          <Sidebar {...this.props} id={id}/>
          </div>
          </div>
        )
      }
    }
    