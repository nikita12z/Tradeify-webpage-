import React from 'react';
import HeroHome from './HeroHome';
import AwardsHome from './AwardsHome';
import PricingHome from './PricingHome';
import EducationHome from './EducationHome';
import OpenAccount from '../OpenAccount';
import StatisticsHome from "./StatisticsHome";


function HomePage() {
    return ( 
        <>
            <HeroHome/>
            <AwardsHome/>
            <StatisticsHome/>
            <PricingHome/>
            <EducationHome/>
            <OpenAccount/>
        </>
     );
}

export default HomePage;