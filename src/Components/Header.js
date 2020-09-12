import React, { Component } from 'react';
import logo from './Images/Layer 46@1X.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css';
import back from './Images/BackgroundChess.png';
import facebook from './Images/facebook.png';
import twitter from './Images/twitter.png';
import instagram from './Images/instagram.png';
import linkedin from './Images/linkedin.png';
import symbolstart from './Images/symbolstart.png';

class Header extends Component {
  constructor(){
    super();
    this.state = {
         black: true
    }
  }

  changeColor(){
    this.setState({black: !this.state.black})
  }

  render(){
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
    <div className="background">
      <div className="layer">
        <div className="nav">
          <span className="headerspace">Inspiration</span>
          <span className="headerspace">What Is Gambit</span>
          <span className="headerspace">The Players</span>
        </div>
        <img src={logo} alt="logo" className="logo"/>
       <div className="nav" id="navspace">
          <span className="headerspace">The Game</span>
          <span className="headerspace">Skill Level</span>
          <span className="headerspace">Philosophy</span>
          <span className="headerspace">Let’s Play</span>
        </div>
        <div className="regs" id="reg1"/>
        <div className="regs" id="reg2"/>
        <div className="regs" id="reg3"/>
        {/* </div> */}
        <h1 id="letsplay">let’s <br/>play</h1>
        <p className="underletsplaytxt">PR, Social Media &amp; Influencers Engagement</p>
        <button className={btn_class} onClick={this.changeColor.bind(this)}>
          <div className="slideshow"></div>
        </button>
       {/* <nav>
        <span className="socialmedia">
          <a href="http://facebook.com"  target="_blank">
            <img src={facebook} alt="facebook" className="facebookinsta"/>
          </a>
        </span>
        <span>
          <a href="http://twitter.com"  target="_blank">
            <img src={twitter} alt="twitter" className="twitter"/>
          </a></span>
          <span>
          <a href="http://instagram.com"  target="_blank">
            <img src={instagram} alt="instagram" className="facebookinsta"/>
          </a></span>
          <span>
          <a href="http://linkedin.com"  target="_blank">
            <img src={linkedin} alt="linkedin" className="linkedin"/>
          </a>
        </span>
        </nav>
        <button>
          <img src={symbolstart} alt="start symbol"/>
          <span>start</span>
        </button> */}
      </div>
    </div>
    
  );
}
}

export default Header;