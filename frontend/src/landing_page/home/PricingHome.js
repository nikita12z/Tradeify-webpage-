import React from 'react';

function PricingHome() {
    return ( 
        <div className='container mt-5'>
            
            <div className='row'>

                <div className='col-1'></div>

                <div className='col-5'>
                    <h1>Unbeatable pricing</h1>
                    <br></br>
                    <p>We pioneered the concept of discount broking and price<br></br> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>


                <div className='col-5'>
                    <div className='row text-center'>

                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>

                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>

                    </div>
                </div>

                <div className='col-1'></div>

            </div>

        </div>
    );
}

export default PricingHome;