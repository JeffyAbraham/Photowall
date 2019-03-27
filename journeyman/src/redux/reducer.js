import _posts from '../files/posts'
import {combineReducers} from 'redux'



function comments(state={},action){   
   
    switch(action.type)  
    {
      
        case'ADD_COMM':  
        if(!state[action.postId])
        {
            return {...state,[action.postId]:[action.comment]}
        }
       else{
           return{...state,[action.postId]:[...state[action.postId],action.comment]}
       }
       case 'LOAD_COMMENTS': return action.comments
       
       default:return state
     }
     
    
}


function posts(state=_posts,action) /// create a reducer for post                                                
{   console.log("**********************")
   console.log(action.post)
   console.log("**********************")
    switch(action.type)  
    {
        case'DEL_PIC':  return [...state.slice(0,action.index),...state.slice(action.index+1)]

        case'ADD_PIC': return[...state,action.post]

        case 'LOAD_POSTS':return action.posts
      

        default:return state



    }

   

}
const rootReducer= combineReducers({posts,comments})
export default rootReducer;