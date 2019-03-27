import {database} from '../database/config'
export function startaddingcomment(comment,postId)
{
    return (dispatch)=>{
        return database.ref('comment/'+postId).push(comment).then(()=>{
                dispatch(addComment(comment,postId))
        })


        
    }
}
export function startLoadingcomments()
{
    return (dispatch)=>{
        return database.ref('comment').once('value').then((snapshot)=>
        {
            let comments={}
            snapshot.forEach((childSnapshot)=>{

                comments[childSnapshot.key]=Object.values([childSnapshot.val()])
            })
            dispatch(loadComments(comments))
        })
    }





}
export function startLoadingPost()
{
    return (dispatch)=>{
        return database.ref('posts').once('value').then((snapshot)=>
        {
            let posts=[]
            snapshot.forEach((childSnapshot)=>
            {
                posts.push(childSnapshot.val())
            })
            
            dispatch(loadPosts(posts))
            });


        }
    }


export function loadPosts(posts)
{console.log(posts)
return{

    type:'LOAD_POSTS',
    posts:posts
}
}
export function DeletethesePost(index,id)
{
    return(dispatch)=>
    {
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(delPicture(index))
        })

    }
}
export function startAddingPost(post)
{
    return (dispatch)=>{
       console.log(post)
        return database.ref('posts').update({[post.id]:post}).then(()=>
        {

           dispatch(addPicture(post))
        })
    }
}
export function delPicture(index)

                                        //action send data to reducer which further initiates action
{
    return{
        type:'DEL_PIC',    //we use index to specify "this further" sends data to reducer to take action "DEL_PIC" in this case
                            //if you want to add say a pic we will pass link of the pic 
        index:index         //return action.index as id
    }
}
export function addPicture(post)
{

    return{
        type:'ADD_PIC',
        post:post
        
    }


}
export function addComment(comment,postId)
{
    alert(comment)
  return{
      type:'ADD_COMM',
      comment:comment,
      postId:postId

  }


}
export function loadComments(comments)
{
    return{
        type:'LOAD_COMMENTS',
        comments
    }
}