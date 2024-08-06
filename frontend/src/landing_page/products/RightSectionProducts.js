import React from 'react';

function RightSectionProduct({
    imageURL, productName, productDesription, learnMore}) {
    return ( 
        <div className='container'>
        <div className='row align-items-center'>

        <div className='col-5 p-5 mt-5'>

            <h1 className='fs-2 text-muted'>{productName}</h1>
            <br/>
            <p>{productDesription}</p>

            <div>
                <a href={learnMore} style={{textDecoration:"none"}}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>

            
        </div>
        
        <div className='col-4'>
            <img src={imageURL}/>
        </div>

        <div className='col-1'></div>

        </div>

    </div>
     );
}

export default RightSectionProduct;