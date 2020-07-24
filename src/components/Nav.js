import  React,{Component} from 'react';
import {Link} from 'react-router-dom'
import '../Home.css';
import axios from 'axios';
import Blogimage from "../images/blog.jpg"
import {connect} from 'react-redux'
import {logout} from '../redux'

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
    
      isBoxVisible:true
    };

    this.logout = this.logout.bind(this)
  }

  logout(){
    axios.post('http://127.0.0.1:8000/auth/token/logout/',null,{
      headers: {
       Authorization: 'Token '+ this.props.token } 
  }).then(res => {
    console.log(res.data)
    this.props.logout()
  })
  }
  
        
        
        render(){
          console.log(this.state.isBoxVisible)
          const { isBoxVisible } = this.state;
        return(

<nav className="navbar navbar-expand-lg navbar-dark dd">
<div className="sbbb2 logo"> <Link to="/"  className="active topnav-centered nav-link sbbb">Blogflix</Link></div> 
  <div aria-controls="responsive-navbar-nav" onClick={() => this.setState({isBoxVisible: !isBoxVisible})} type="button" aria-label="Toggle navigation"   className={this.state.isBoxVisible ? "navbar-toggler collapsed" : "navbar-toggler"}>
 
    <span className="navbar-toggler-icon"></span>
    </div>
    <div className={ this.state.isBoxVisible ? "navbar-collapse collapse" : "navbar-collapse collapse show"} id="responsive-navbar-nav">
  
      <div className="mr-auto topnav navbar-nav">
        <div className="mr-auto flex-container navbar-nav">
         <div><Link to="/blogs"  className="nav-link">All</Link></div>
          <div><Link to="#pricing" className="nav-link">ACM-W</Link></div>
          <div><Link to="/createnew"  className="nav-link">Create </Link></div>
          <div className="sbbb"> <Link to="/"  className="active topnav-centered nav-link">Blogflix</Link></div>
        <div><Link to="/profile" className="nav-link">Account</Link></div>
        <div>{this.props.token ? <Link to="/" className="nav-link" onClick={this.logout}>Logout</Link> : <Link to="/login" className="nav-link">Login</Link>}</div>
        
          </div>
       
          </div>
          </div>
          </nav>



        );
                
            
      }
    }
        
    

    

    const mapStateToProps = state => {
      return {
          userdata: state.userdata,
          token: state.token
      }
    } 
    const mapDispatchToProps = dispatch => {
      return {
        logout: () => dispatch(logout())
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Nav);
