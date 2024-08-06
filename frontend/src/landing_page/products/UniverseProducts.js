import React from 'react';

function UniverseProducts() {
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
          <h1>The Tradeify Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className='row text-center'>

            <div className="col-4 p-3 mt-5">
                <img src="../images/smallcaseLogo.png" />
                <p className="text-small text-muted mt-2 mt-2">Thematic investment platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="../images/streakLogo.png"  style={{width:"45%"}}/>
                <p className="text-small text-muted mt-2">Algo & strategy platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="../images/sensibullLogo.svg" style={{width:"60%"}} />
                <p className="text-small text-muted mt-2">Options trading platform</p>
            </div>

          </div>
          
          <div className='row'>
            <div className="col-4 p-3 mt-5">
                <img src="../images/zerodhaFundhouse.png" style={{width:"45%"}} />
                <p className="text-small text-muted mt-2">Asset management</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="../images/tijori.svg" style={{width:"45%"}} />
                <p className="text-small text-muted mt-2">Fundamental research platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="../images/dittoLogo.png" style={{width:"35%"}} />
                <p className="text-small text-muted mt-2">Insurance</p>
            </div>
          </div>


          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>

        </div>
      </div>
     );
}

export default UniverseProducts;