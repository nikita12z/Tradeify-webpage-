import React from 'react';

function EducationHome() {
    return ( 
        <div class="container mt-5 p-3">

        <div class="row p-3">

            <div class="col-6">

                <img src="../images/education.svg" style={{width:"85%"}}/>

            </div>

            <div class="col-6 p-5">

                <h1 className='fs-3 mb-4'>Free and open market education</h1>
                <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                <br></br><br></br>
                <p className='text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>

            </div>


            
        </div>
    </div>
     );
}

export default EducationHome;