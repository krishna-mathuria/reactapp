import  React,{Component} from 'react';
import {Link} from 'react-router-dom'
import '../Home.css';

class SingleBlog extends Component{
    constructor(props){
        super(props)
    }
        
        
        render(){
        return(

<div className="SingleBlog">

 {/* <div className="grid-item-categories">
  <div className="thumbnail_container-categories">
      <div className="thumbnail-categories">

        <img src={this.props.data.thumbnail} align="right" className="img2-profile"/> 
       
  
    <button className="b2-profile"><Link to={'/blog/'+this.props.data.slug}>Read</Link></button>
        <h4 className="profile-text">{this.props.data.title}</h4>
        <p className="profile2-text">{this.props.data.description}</p>
        
      
   </div>
     </div>
      </div> */}
<div className="grid-item-profile2">
 <div className="container-fluid">
  <div className="row">
    <div className="col-md-9">
    <h4 className="profile-text">{this.props.data.title}</h4>
        <p className="profile2-text">{this.props.data.description}</p>
</div>
<div className="col-md-1">
<Link to={'/blog/'+this.props.data.slug}><button className="b3-profile">Read</button></Link>
</div>
<div className="col-md-2">
       
<img src={this.props.data.thumbnail} align="right" className="img3-profile"/> 
       
      
        </div>
        </div>
        </div>

      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default SingleBlog;