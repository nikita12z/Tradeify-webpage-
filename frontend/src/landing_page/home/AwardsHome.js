import React from 'react';

function AwardsHome() {
    return ( 

    <div className='container mt-5'>

        <div class="row">

            <div class="col-6">
                <img src="../images/largestbroker.svg"/> 
            </div>

            <div class="col-6 mt-4 mb-5">
                <h1>Largest stock broker in India</h1>
                <br></br>
                <p>1.5+ Crore Tradeify clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                
                <div class="row mt-4">

                    <div class="col-6">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>

                </div>

                <img src='../images/pressLogos.png' style={{width:"90%"}}/>
            </div>

        </div>

    </div>
    );
}

export default AwardsHome;