import React, { Component } from 'react';
import './CSS/Inspiration.css';
import BigCircle from './Images/BigCircle.png';
import Chess from './Images/Chess.png';
import MediumCircle from './Images/MediumCircle.png';
import SmallCircle from './Images/SmallCircle.png';
class Inspiration extends Component {
    render(){
      return (
        <section className="insppart">
          <h2 id="inspheader">Inspiration</h2>
         {/* <span>
         <div>
            
             <div className="alltxt">
                 <h3 className="inspsubheader">Chess [noun]:</h3>
                 <h3 className="chessgambit">Is the ultimate game of planning and strategy, the sport of intellectuals, 
                 and is rumored to have been invented right here in the Middle East over 15 centuries ago.</h3>
             </div>
             <div className="alltxt">
                 <h3 className="inspsubheader">Gambit [noun]:</h3>
                 <h3 className="chessgambit">An opening move in chess where a risk is taken to secure an advantageous position. 
                 An action or set of actions you carry out in order to gain an advantage in a situation or game. 
                 A remark made to start a conversation with someone</h3>
             </div>
         </div>
         </span> */}
         {/* <span className="circlechess">
        //     <img src={BigCircle} alt="big circle" className="bigcircle"/>
        //     <img src={Chess} alt="chess" className="chess"/>
        // </span>
        //     <img src={MediumCircle} alt="chess" className="mediumcircle"/>
        //     <img src={SmallCircle} alt="chess" className="smallcircle"/>     */}
         {/* </div> */}
        </section>
    );
  }
  }
  
  export default Inspiration;