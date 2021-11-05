import styled from 'styled-components';
import {  MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import Ptr from '../../images/pizza-3.jpg';


export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
url(${Ptr});
height: 100vh;
background-position: center;
background-size: cover;
`;

// export const HeroBg = styled.div`

// position: absolute;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
// `;

// export const VideoBg = styled.video`

// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: #232a34;
// `;
// export const ImgBg = styled.img`

// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: #232a34;
// `;

export const HeroContent = styled.div`
  height: calc(100vh - 10px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
font-size: clamp(2.5rem, 10vw, 5rem);
margin-bottom: 1rem;
box-shadow: 3px 5px #27ae60;
letter-spacing: 3px;

@media screen and (max-width: 768px) {
   font-size: 40px;
}

@media screen and (max-width: 480px) {
   font-size: 32px;
}
`;

export const HeroP = styled.p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;

@media screen and (max-width: 768px) {
    font-size: 24px;
 }
 
 @media screen and (max-width: 480px) {
    font-size: 18px;
 }
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;
export const Hbtn = styled.div`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    
}
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;


