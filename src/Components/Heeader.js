import React, { Component } from 'react';
import logo from './Images/Layer 46@1X.png';
import './CSS/Heedar.css';
import back from './Images/BackgroundChess.png';
import facebook from './Images/facebook.png';
import twitter from './Images/twitter.png';
import instagram from './Images/instagram.png';
import linkedin from './Images/linkedin.png';
import symbolstart from './Images/symbolstart.png';
import purple from './Images/purple.png';

class Header extends Component {
    render(){
        return (
      <div className="background">
          <div className="layer">
          
            <div className="headerspace">
            <span className="nav">Inspiration</span>
            <span className="nav">What Is Gambit</span>
            <span className="nav">The Players</span>
            </div>
            <div  className="logo">
            <img src={logo} alt="logo"/>
            </div>
            <div style={{float:'right'}}>
              <div className="regs" id="reg1"/>
              <div className="regs" id="reg2"/>
              <div className="regs" id="reg3"/>
            </div>
            <div id="navspace">
                <span className="nav">The Game</span>
                <span className="nav">Skill Level</span>
                <span className="nav">Philosophy</span>
                <span className="nav">Let’s Play</span>
            </div>
            {/* <div > */}
            {/* <h2 id="letsplay">let’s<br/>play</h2> */}
            {/* <p className="underletsplaytxt">PR, Social Media &amp; Influencers Engagement</p> */}
            {/* <h2 id="letsplay">play</h2> */}
          {/* </div> */}
      </div>
             </div> 
        );
    }
}

export default Header;