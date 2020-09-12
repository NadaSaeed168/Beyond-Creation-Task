import React, { Component } from 'react';
import './CSS/WhoWeAre.css';
import Horse from './Images/Horse.png';
import King from './Images/King.png';

class WhoWeAre extends Component {
    render(){
      return (
          <div className="WhoWeAre">
            <h2 id="whowearetxt">Who We Are</h2>
            <p id="txtunderwhoweare">Gambit Communications is a consultancy founded by Jamal Al Mawed bringing together experienced communications 
                talent spanning agency and client side, corporate and consumer, regional and international.</p>
              <div className="circles" id="circle1">
                {/* <div className="beside"> */}
                <img src={Horse} alt="Horse" className="horse"/>
                {/* </div> */}
              </div>
                {/* <div className="beside"> */}
                  <p className="horsetext" id="text1">Our aim is to offer you the strategic thinking, digital acumen, communications expertise,  
                    creative executions, influencer relations and practical thinking that will allow you to achieve your business objectives, 
                    start conversations and stay one move ahead of your competition.</p>
                {/* </div> */}
              {/* </div> */}
              <div className="circles" id="circle2">
              {/* <div className="beside"> */}
                <img src={King} alt="King" className="king"/>
                {/* </div> */}
              </div>
                {/* <div className="beside"> */}
                  <p className="horsetext" id="text2">We aim to be the region’s first ‘premium’ agency,
                  in that we hire only the best of the best  at every experience level. 
                  Our unique business model allows us to pay for the best and retain the best without passing that cost on to the client.</p>
                {/* </div> */}
              {/* </div> */}
            </div>
      );
    }
}

export default WhoWeAre;