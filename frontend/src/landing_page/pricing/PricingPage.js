import React from 'react';
import HeroPricing from './HeroPricing';
import BrokeragePricing from './BrokeragePricing';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
            <HeroPricing/>
            <OpenAccount/>
            <BrokeragePricing/>
        </>
     );
}

export default PricingPage;