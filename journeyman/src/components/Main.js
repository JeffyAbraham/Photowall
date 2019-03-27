import React, { Component } from 'react';
import Header from './Header';//title
import Home from './Home';//aka photwall
import Add from './Add';
import {Route} from 'react-router-dom'
import {delPicture, startLoadingPost,startLoadingcomments} from '../redux/action'
import {addPicture}from '../redux/action'
import {addComment} from '../redux/action'
import Pop from './Pop';



class Main extends Component {
  constructor()
    {

      super()


    }
    componentDidMount()

    {
      this.props.dispatch(startLoadingPost())
      
    }
  render() {
  
    return (
      <div>
     <Route exact path="/" render={()=>(
       <div>
         

        <Header title={'Explore..'}/>
        
        {console.log(this.props.comments)}
       <Home {...this.props}/> {/* split individual prop */}
        </div>
      )}/>
      <Route path="/Add" render={({history})=>(
        <Add {...this.props}/>
      )}/>
      
        <Route path="/pop/:id" render={(params)=>(

          <Pop {...params }posts={this.props.posts} {...this.props}/>

        )}/>
        </div>
      
        )
      }




  }


export default Main;
