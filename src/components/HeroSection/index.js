import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import 
{
HeroContainer,
 HeroContent,
 HeroItems,
 HeroH1,
 HeroP,
 HeroBtnWrapper,
 ArrowForward,
 ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id='home'>

            <HeroContent>
               <HeroItems>
                <HeroH1> 
                Sagu bakar terenak yang perna ada
                </HeroH1>
                <HeroP>
               Siap dalam 60 detik
                </HeroP>
                
                <HeroBtnWrapper>
                    <Button
                     to='menu' 
                     onMouseEnter={onHover} 
                     onMouseLeave={onHover}
                     primary='true'
                     dark='true'> 
                       Pesan Yuh {hover ? <ArrowForward /> :  <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;