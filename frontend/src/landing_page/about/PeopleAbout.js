import React from 'react';

function PeopleAbout() {
    return ( 
        <div className="container p-5">
            <div className="row p-3 mt-5 border-top">

                <div>
                    <h1 className='text-center'>Website Built by:</h1>
                </div>

                <div className='row mt-2 text-muted'>

                    <div className='col-6 p-3 text-center'>
                        <img src='../images/Nikita Patil Photo.jpg' style={{borderRadius:"90%", width: "60%"}}/>
                    </div>

                    <div className="col-6 p-3 mt-5">
                        <p>
                            Nithin Kamath founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>A Zerodha Clone (Tradeify) built by <b>Nikita Patil</b></p>
                        <p>Cummins College Of Engineering, Pune</p>
                        <p>Connect to me on <a href="https://www.linkedin.com/in/nikita-patil-2784bb234/" style={{textDecoration:"none"}}>LinkedIn</a>/ <a href="https://www.instagram.com/nikitapatilz/"  style={{textDecoration:"none"}}>Instagram</a></p>
                    </div>

                </div>
            </div>
      </div>     
    );
}

export default PeopleAbout;