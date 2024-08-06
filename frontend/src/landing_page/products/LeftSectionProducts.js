import React from 'react';

// adding common props to sections
function LeftSectionProduct({
    imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className='row p-5'>

            <div className='col-4 p-5'>
                <img src={imageURL}/>
            </div>

            <div className='col-3'></div>

            <div className='col-5 p-5 mt-5'>

                <h1 className='fs-2 text-muted'>{productName}</h1>
                <br/>
                <p>{productDesription}</p>

                <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                
                <div className='mt-4'>
                    <a href={googlePlay}><img src="../images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="../images/appstoreBadge.svg"/></a>
                </div>
                
            </div>

        </div>
    );
}

export default LeftSectionProduct;