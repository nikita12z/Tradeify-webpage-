import React from 'react';

function StatisticsHome() {
    return ( 
        <div class="container mt-5 p-3">

            <div class="row p-3">

                <div class="col-6 p-5">
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                    <br></br>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Tradeify with ₹4.5+ lakh crores worth of equity investments.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h2 className='fs-4'>The Tradeify universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>

                <div class="col-6">

                    <img src="../images/ecosystem.png" style={{width:"90%"}}/>

                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default StatisticsHome;