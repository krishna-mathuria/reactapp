import  React,{Component} from 'react';
import '../Home.css';
import {Link} from 'react-router-dom'
class Profile2 extends Component{

        
        
        render(){
        return(

<div className="Profile">

 <div className="grid-item-profile">
 <div className="container-fluid">
  <div className="row">
    <div className="col-md-9">
    <Link to={'/blog/'+this.props.data.slug}><h4 className="profile-text">{this.props.data.title}</h4></Link>
        <p className="profile2-text">{this.props.data.description}  </p>
</div>
<div className="col-md-1">
<Link to={'/blog/'+this.props.data.slug+'/edit'}><button className="b2-profile" style={{color:"white"}}>Edit</button></Link>
</div>
<div className="col-md-2">
       
        <img src={"http://18.136.203.6:8000"+this.props.data.thumbnail} align="right" className="img2-profile" />
       
      
        </div>
        </div>
        </div>

      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default Profile2;
