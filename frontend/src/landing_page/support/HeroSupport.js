import React from 'react';

function HeroSupport() {
    return ( 

        <section className="container-fluid" id="supportHero">

            <div className="" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track tickets</a>
                
            </div>

            <div className="HeroPart row p-5" >
                <div className='col-6'>

                    <h4 className='mb-4 fs-5'>Search for an answer or browse help topics to create a ticket</h4>
                    <div>
                        <input placeholder='
                            Eg: how do i activate F&O, why is my order getting rejected ...
                        ' />
                        
                    </div>
                    
                    <a href="">Track account opening</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Intraday margins</a>
                    <br/>
                    <a href="">Kite user manual</a>

                </div>

                <div className='col-6 mt-3'>
                    <h1 className="fs-5">Featured</h1>
                    <ol>
                        <li>
                        <a href="">Surveillance measure on scrips - July 2024</a>
                        </li>
                        <li>
                        <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>

                </div>

            </div>

        </section>

     );
}

export default HeroSupport;