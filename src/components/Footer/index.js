import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLiksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinksTitle,
    FooterLink,
    SosialMedia,
    SosialMediaWrap,
    SosialLogo,
    WebsiteRights,
    SosialIcons,
    SosialIconLink,
    Bars
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLiksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinksTitle> About Us </FooterLinksTitle>
                                <FooterLink to='/'> How it works </FooterLink>
                                <FooterLink to='/'> Testimonials </FooterLink>
                                <FooterLink to='/'> Careers </FooterLink>
                                <FooterLink to='/'> Teams of Service </FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinksTitle> Videos </FooterLinksTitle>
                                <FooterLink to='/'> Submit video </FooterLink>
                                <FooterLink to='/'> Agency </FooterLink>
                                <FooterLink to='/'> Influercer </FooterLink>
                                <FooterLink to='/'> Download </FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinksTitle> Contact </FooterLinksTitle>
                                <FooterLink to='/'> Contact </FooterLink>
                                <FooterLink to='/'> Support </FooterLink>
                                <FooterLink to='/'> Destinations </FooterLink>
                                <FooterLink to='/'> Sponsorship </FooterLink>
                                
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinksTitle> Social Media </FooterLinksTitle>
                                <FooterLink to='/'> Facebook </FooterLink>
                                <FooterLink to='/'> Instagram </FooterLink>
                                <FooterLink to='/'> Youtube </FooterLink>
                                
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLiksContainer>
                <SosialMedia>
                    <SosialMediaWrap>
                        <SosialLogo to='/' onClick={toggleHome} > <Bars/> Ko qu Resto </SosialLogo>
                        <WebsiteRights>Ko qu Resto @{new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SosialIcons>
                            <SosialIconLink href="https://www.facebook.com/johan.nasendi/" target="_blank" aria-label="Facebook"> <FaFacebook /> </SosialIconLink>
                            <SosialIconLink href="https://www.instagram.com/johan.nasendi/" target="_blank" aria-label="Instagram"> <FaInstagram /> </SosialIconLink>
                            <SosialIconLink href="https://www.youtube.com/channel/UCH1XAiQ851VQkDQ83Iwj5vg" target="_blank" aria-label="Youtube"> <FaYoutube /> </SosialIconLink>
                           
                            <SosialIconLink href="https://www.linkedin.com/in/johannasendi/" target="_blank" aria-label="Linked"> <FaLinkedin /> </SosialIconLink>
                        </SosialIcons>
                    </SosialMediaWrap>
                </SosialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
