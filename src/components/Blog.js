import React from 'react';
import {Link} from 'react-router-dom'
import Slider from 'infinite-react-carousel';
import '../Home.css';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/nice-select.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/unslider.css';
import '../css/responsive.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';
import {Bumbotron, Button, Carousel } from 'react-bootstrap'
import axios from 'axios';
import Blogimage from "../images/blog.jpg"
import {connect} from 'react-redux'
import {logout} from '../redux'
import Nav from "../components/Nav"

import TextTruncate from 'react-text-truncate';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router
  } from "react-router-dom";


class Blog extends React.Component { 
  constructor(props){
    super(props);
  
    this.logout = this.logout.bind(this)
  }

  logout(){
    axios.post('http://18.136.203.6:8000/auth/token/logout/',null,{
      headers: {
       Authorization: 'Token '+ this.props.token } 
  }).then(res => {
    console.log(res.data)
    this.props.logout()
  })
  }
  
 

  
  render(){

    
    const mystyle = {
      color: "black",
      fontFamily: "Open Sans",
      fontSize: "12px",
      align: "left",
      
    };
    const mystyle2 = {
      color: "black",
      fontFamily: "Open Sans",
      fontSize: "14px",
      width: "20ch"
      
    };
  
    console.log(this.props.token)
  if(this.props.data.featured[0]){
    return(

<div className="Home colour main">
  
<Nav/>
        <div>
        <MDBContainer className="ssb ">
      <MDBCarousel
      
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  
 
<br />
<br />
</div>
<section className="">
<div className="container-fluid">
<div className="row">

<div className="col-md-8 test2 table element">


<div className="grid-container_featured">
    <div className="grid-item1">FEATURED</div>
    <div className="grid-item colour2">

        <img src={"http://18.136.203.6:8000"+this.props.data.featured[0].thumbnail} height="230px" width="350px" align="center" />
        <br />
        {/* <br />
        <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.featured[0].slug}> <h4>{this.props.data.featured[0].title}</h4> </Link>
        <div className="sb22">
        <TextTruncate
        className="child"
        style={mystyle}
        align="left"
    line={3}
    element="span"
    truncateText="…"
    text= {this.props.data.featured[0].description}
    // text="nfrw rfuoew hrow rvh vrhv vew hwvovew vewhveoeivw ej fhu rfhurf hrof rfehro  " 
    />
        </div>
{/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

    </div>
    <div className="grid-item colour2">


        <img src={"http://18.136.203.6:8000"+this.props.data.featured[1].thumbnail} height="230px" width="350px" align="center" />
          
         <br />
        {/*<br />
          <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.featured[1].slug}> <h4>{this.props.data.featured[1].title}</h4> </Link>
        <div className="sb3">

        <TextTruncate
        style={mystyle}
    line={3}
    element="span"
    truncateText="…"
    text= {this.props.data.featured[1].description}
    />
    </div>

         {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}


    </div>
    <div className=" grid-item grid-item3 colour2">

        <img src={"http://18.136.203.6:8000"+this.props.data.featured[2].thumbnail} height="580px" width="350px" align="center" />
          
               <br />
        {/*<br />
         <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.featured[2].slug}> <h4>{this.props.data.featured[2].title}</h4> </Link>
        <div className="sb3">
        <TextTruncate
        style={mystyle}
    line={3}
    element="span"
    truncateText="…"
    text= {this.props.data.featured[2].description}
    />
</div>
          {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

    </div>
    <div className="grid-item colour2">

        <img src={"http://18.136.203.6:8000"+this.props.data.featured[3].thumbnail} height="230px" width="350px" align="center" />

          
               <br />
        {/*<br />
         <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.featured[3].slug}> <h4>{this.props.data.featured[3].title}</h4> </Link>

        <div className="sb3">
        <TextTruncate
        style={mystyle}
    line={3}
    element="span"
    truncateText="…"
    text= {this.props.data.featured[3].description}
    />
</div>
   {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

    </div>
    <div className="grid-item colour2">
      
        <img src={"http://18.136.203.6:8000"+this.props.data.featured[4].thumbnail} height="230px" width="350px" align="center" />
          
               <br />
        {/* <br />
        <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.featured[4].slug}> <h4>{this.props.data.featured[4].title}</h4> </Link>
        <div className="sb3">
        <TextTruncate
        style={mystyle}
    line={3}
    element="span"
    truncateText="…"
    text={this.props.data.featured[4].description}
    textTruncateChild={<a href="#">Read on</a>}
    />
    </div>
      
         {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

</div>
    </div>

</div>
<div className="col-md-4">

<div className="grid-container_latest colour">
  <div className="grid-item_latest1">LATEST</div>

  <div className="parent colour">
<div1 className="div1">
    <img src={this.props.data.latest[0].thumbnail} height="90px" width="190px" align="center" />
    
     <h4>
    <div className="d">
    <Link to={'/blog/' +this.props.data.latest[0].slug}> <h4 >{this.props.data.latest[0].title}</h4></Link>
          </div>
      
      </h4>

         
      <div className="sb2">
    
      <TextTruncate
        style={mystyle2}
    line={2}
    element="span"
    truncateText="..."
    text={this.props.data.latest[0].description}
    textTruncateChild={<a href="#"></a>}
    />
</div>
</div1>



<div2 className="div2">

<img src={this.props.data.latest[1].thumbnail} height="90px" width="190px" align="center" />

 <h4>
<div className="d">
<Link to={'/blog/' +this.props.data.latest[1].slug}> <h4 >{this.props.data.latest[1].title}</h4></Link>
      </div>
  
  </h4>

     
  <div className="sb2">

  <TextTruncate
    style={mystyle2}
line={2}
element="span"
truncateText="..."
text={this.props.data.latest[1].description}
textTruncateChild={<a href="#"></a>}
/>
</div>
    
</div2>


<div3 className="div3">

<img src={this.props.data.latest[2].thumbnail} height="90px" width="190px" align="center" />

 <h4>
<div className="d">
<Link to={'/blog/' +this.props.data.latest[2].slug}> <h4 >{this.props.data.latest[2].title}</h4></Link>
      </div>
  
  </h4>

     
  <div className="sb2">

  <TextTruncate
    style={mystyle2}
line={2}
element="span"
truncateText="..."
text={this.props.data.latest[2].description}
textTruncateChild={<a href="#"></a>}
/>
</div>
    
</div3>


<div4 className="div4">

<img src={this.props.data.latest[3].thumbnail} height="90px" width="190px" align="center" />

 <h4>
<div className="d">
<Link to={'/blog/' +this.props.data.latest[3].slug}> <h4 >{this.props.data.latest[3].title}</h4></Link>
      </div>
  
  </h4>

     
  <div className="sb2">

  <TextTruncate
    style={mystyle2}
line={2}
element="span"
truncateText="..."
text={this.props.data.latest[3].description}
textTruncateChild={<a href="#"></a>}
/>
</div>
    </div4>
    </div>


</div>
</div>
</div>
</div>




</section>




<section className="">

<div className="grid-container5 colour3">

    <div className="grid-item15 grid-item5">Popular Categories</div>
    <div className="container">
<div className="row">
    <div className=".col-md-12 flex1-container grid-item5 grid33">
      

    
    <img src={"http://18.136.203.6:8000" +this.props.data.authors[0].profilepic} align="left" />
  


      
<div>
<h3>{this.props.data.authors[0].first_name}</h3>
      <TextTruncate
        style={mystyle2}
    line={3}
    element="span"
    truncateText="..."
    text={this.props.data.authors[0].bio}
    textTruncateChild={<a href="#">Read on</a>}
    />
        
        </div>

    



    </div>
    </div>
<div className="row">
    <div className=".col-md-12 flex1-container grid-item25 grid-item5 grid33" align="">
      

      <img src={"http://18.136.203.6:8000" +this.props.data.authors[1].profilepic} align="left" />

      

      <div>
      <h3>{this.props.data.authors[1].first_name}</h3>
      <TextTruncate
        style={mystyle2}
    line={3}
    element="span"
    truncateText="..."
    text={this.props.data.authors[1].bio}
    textTruncateChild={<a href="#">Read on</a>}
    />
        
        </div>


      


    </div>
    </div>
    <div className="row">

    <div className=".col-md-12 flex1-container grid-item35 grid-item5 grid33">
      

    <img src={"http://18.136.203.6:8000" +this.props.data.authors[1].profilepic} align="" />

     

      <div>
      <h3>{this.props.data.authors[2].first_name}</h3>
      <TextTruncate
        style={mystyle2}
    line={3}
    element="span"
    truncateText="..."
    text={this.props.data.authors[2].bio}
    textTruncateChild={<a href="#">Read on</a>}
    />
        
        </div>

     



    </div>
    </div>
    </div>

  </div>

</section>

<section className="joinus">
  <div className="container-fluid">
    <div className="row cont h-100">
        <div className="col-md-8 my-auto">
       <p className="headin2" >BECOME NEWSLETTER</p>
            <p className="headin">Join Our Community Today and Stay Updated!!</p>
            <p className="headin2" ></p>
          
            
           
        </div>
        <div className="col-md-4 my-auto">
            <form className="Login">
                <input className="box1" type="text" name="" placeholder="Name" /><br />
                <input className="box1" type="text" name="" placeholder="Email" /><br />
                <button className="join" type="button">Join</button>
            </form>
        </div>
        </div>
    </div>
</section>

{/* <section>
 <div className="Crible_block">
            
            <div className="row">
                <div className="col-md-4 colour">
                                <img className="image2" src={require('../img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                   <h1 className="Crible_head">  <img className="image" src={require('../img/circle-cropped.png')} /> Lorem ipsum
                   </h1>
                </div>
                <div className="col-md-4 colour">
                    
                   <img className="image2" src={require('../img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                     <h1 className="Crible_head">  <img className="image" src={require('../img/circle-cropped.png')} /> Lorem ipsum
                     </h1>
                </div>
                <div className="col-md-4 colour">
                    <img className="image2" src={require('../img/4-512.png')} />
                    
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p> 
                    <h1 className="Crible_head">  <img className="image" src={require('../img/circle-cropped.png')} /> Lorem ipsum
                   
                    </h1>
                   
                </div>
            </div>
        </div>
        </section> */}


<br />



<br />

<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />


<section>
  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer3">
    
  <div  className= "col-md-6 footer5">
    <h2 className="footer6" style={{align:'left'}}>
     Terms of Use  |  Privacy Policy  |  Cookies
   </h2>
  
 

</div>
<div className="col-md-3 col-md-offset-3">
  <Link to="https://www.facebook.com/upesacm/" className="fa fa-facebook"></Link>
<Link to="https://twitter.com/upesacm?lang=en" className="fa fa-twitter"></Link>
<Link to="https://www.instagram.com/upesacm/?hl=en" className="fa fa-instagram"></Link>
<Link to="https://www.linkedin.com/company/upesacm/" className="fa fa-linkedin"></Link>
</div>
   
</div>
</div>
</section>
<br />

<section>
  <div className="container-fluid">
       


        <div className="row  align-items-center footer3">
    <div className=" col-md-12 footer5">
    <h2 className="footer6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </h2>
  </div>
</div>
  </div>
</section>
<br />
<br />


</div>


);
  
}
 return(
   <div>
     Loading...
   </div>
 );}
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
export default connect(mapStateToProps,mapDispatchToProps)(Blog);


