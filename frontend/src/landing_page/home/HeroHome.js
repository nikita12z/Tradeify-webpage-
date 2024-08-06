import React from 'react';

function HeroHome() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>

                <img src='../images/homeHero.png' alt='Hero Img' className='mb-5'/>
                <h1 className='mt-4'>Invest in everything!</h1>
                <p>Platform to invest in stocks, derivatives, mutual funds, and many more.</p>
                <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up now!</button>

            </div>
        </div>
    );
}

export default HeroHome;