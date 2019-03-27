import Main from './Main'
import {connect} from 'react-redux'
import Sidebar from './Sidebar';


function mapStateToProps(state)
{
    return{


        posts:state.posts, //specify which data you wanna pass :) cool 
        comments:state.comments
    }

}
const App=connect(mapStateToProps)(Main,Sidebar)//specify  to whome you wanna send data as props//main is now noccted to redux store

export default App;