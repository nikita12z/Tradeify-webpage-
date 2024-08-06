import React from 'react';
import { render, screen } from '@testing-library/react';
//extend-export added to delay the checking time to see if data is loaded
import '@testing-library/jest-dom/extend-expect'

//importing component:
import Hero from "../landing_page/home/HeroHome";

//Test Suite: can give multiple test cases at once:
describe('Hero Component', ()=>{

    //comment for us (test title)
    test('renders hero image', ()=>{

        render(<Hero/>);
        //now we're tryin to get an img jiska alt text = hero image
        const heroImage = screen.getByAltText("Hero Img");
        //to tell test what result we are expecting 
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "../images/homeHero.png");

    });

    //2nd test case:
    test('renders signup button', ()=>{
        
        render(<Hero/>);
        //now we're tryin to get an img jiska button name signup now hai.
        const SignupButton = screen.getByRole("button", {name:"/signup now/i"});
        //to tell test what result we are expecting 
        expect(SignupButton).toBeInTheDocument();
        expect(SignupButton).toHaveClass("btn-primary");

    });
});