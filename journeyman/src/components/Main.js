import React, { Component } from 'react';
import Header from './Header';//title
import Home from './Home';//aka photwall
import Add from './Add';
import {Route} from 'react-router-dom'
import {delPicture, startLoadingPost,startLoadingcomments} from '../redux/action'
import {fire} from '../database/config'
import Pop from './Pop';
import Sign from './sign';
import Signup from './signup';



class Main extends Component {
  constructor(props)
    {
      super(props)
      this.state={
          user:{}
      }

     


    }
    componentDidMount()

    {
      this.authListener();
      this.props.dispatch(startLoadingPost())
      
    }
    logout()
    {
      fire.auth().signOut();
    }
    authListener()
    { fire.auth().onAuthStateChanged((user)=>{
        if(user)
        {


          this.setState({user});
        }
        else{
          this.setState({user:null})
        }







    })





    }
  render() {
  
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
          {this.state.user?(    <Route exact path="/" render={()=>(
       <div>
         

        <Header title={'Explore..'}/>
        
      
       <Home {...this.props}/> {/* split individual prop */}
        </div>
      )}/>):(<Sign/>)}
     
     {this.state.user?(<Route path="/Add" render={({history})=>(
        <Add {...this.props}/>
      )}/>):(alert("Please login to add images"))}




      

      
      
        <Route path="/pop/:id" render={(params)=>(

          <Pop {...params }posts={this.props.posts} {...this.props}/>

        )}/>
        </div>
      
        )
      }




  }


export default Main;
