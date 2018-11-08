/* global tw */
import React from "react";
import styled from "react-emotion";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";
import "typeface-cantata-one";
import "typeface-open-sans";

import SEO from "../components/SEO";
import SVG from "../components/SVG";
import ArtifactNoMedia from "../components/ArtifactNoMedia";
import ArtifactVideo from "../components/ArtifactVideo";

import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation
} from "../styles/animations";
import { hidden } from "../styles/utils";
import { colors } from "../../tailwind";
import triangle from "../images/triangle.svg";
import one from "../images/one.svg";
import youcannotsit from "../images/you-cannot-sit.png";
import "../styles/global";

const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24 justify-center items-center flex z-50")};
`;

const SupplementaryInfo = styled.div`
  ${tw(
    "text-white font-sans text-lg shadow-lg max-w-lg rounded-lg px-8 py-8 md:px-10 md:py-10 overflow-hidden shadow-lg m-4"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: ${props => props.color};
`;
const NumImg = styled.img`
  ${tw("text-center rounded-full w-64 xl:w-96 shadow-lg h-auto")};
  margin: 0 auto;
`;
const Inner = styled.div`
  ${tw("flex flex-col items-center w-full xxl:w-2/3 text-center lg:text-left")};
`;
const ArtifactNoMediaContainer = styled.div`
  ${tw("flex flex-row justify-center w-full h-full")};
`;
const BigTitle = styled.h1`
  ${tw(
    "text-center text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide"
  )};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw(
    "text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw("text-center text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4")};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const Footer = styled.footer`
  ${tw(
    "text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg"
  )};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;
const BigImage = styled.img`
  ${tw("shadow-lg max-w-sm rounded-lg overflow-hidden shadow-lg m-4")};
  height: ${props => props.height};
  width: ${props => props.width};
`;
const NavButton = styled.a`
  ${tw(
    "text-center font-sans block border border-blue text-lg rounded py-2 px-4 hover:bg-black text-white"
  )};
  background: #978874;
  text-decoration: none;
`;
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={6.2}>
      <Content speed={0.4} offset={0}>
        <Inner>
          <BigTitle>FASHION & OVERCONSUMPTION</BigTitle>
          <Subtitle>
            How clothes wear us, and what we can do to stop it.
          </Subtitle>
        </Inner>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, #978874 0%, #978874 100%)"
        speed={-0.2}
        offset={2}
        factor={2}
      />
      <Content speed={0.4} offset={1} factor={1}>
        <Inner>
          <NumImg src={one} alt="I" />
          <BigTitle>THE FORCES OF FASHION</BigTitle>
          <Subtitle>
            What keeps people coming back to buy more clothes? Who dictates
            what's in style and what's not? How does the fashion cycle work?
          </Subtitle>
        </Inner>
      </Content>
      <Divider
        bg="#23262b"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Content speed={0.4} offset={2.5}>
        <Inner>
          <Title>Trends and The Fashion Cycle</Title>
          <SupplementaryInfo color="slategrey">
            When looking at runway shows, it's hard to see how any of it affects
            what we wear every day. They're over the top, extravagent, and
            nobody with any sense would wear half of those outfits to work or
            class. Understanding how those shows disseminate into the general
            public is the key to understanding the fashion cycle.
          </SupplementaryInfo>
          <ArtifactVideo
            name="The Trickle Down Effect"
            color="slategrey"
            more="https://www.youtube.com/watch?v=awmyDjY-8e8"
            embedd="https://www.youtube.com/embed/awmyDjY-8e8"
          >
            <i>The Devil Wears Prada</i> may be a saterical film about the
            fashion industry, but this iconic scene does a lot to explain the
            way high fashion trickles down to the general public. This is the
            basis of the fashion cycle that dictates what we as a society wear.
          </ArtifactVideo>
          <ArtifactNoMedia
            name="The History of the Fashion Cycle"
            color="slategrey"
            more="http://vestoj.com/keywords-in-defining-dress-the-fashion-cycle/"
          >
            The fashion cycle follows a basic model: higher social classes
            dictate what is fashionable, and lower social classes emulate it
            until it is not. This was first introduced by Thorstein Veblen in
            1899 in the text
            <i>The Theory of the Leisure Class</i>
          </ArtifactNoMedia>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4.1}>
        <Inner>
          <Title>Fashion Journalism and Trendsetting</Title>
          <BigImage height="504px" width="511px" src={youcannotsit} />
          <SupplementaryInfo color="slategrey">
            <i>
              "One of the differences between art and fashion is that, though it
              has relatively little effect, there still is such a thing as art
              criticism. Fashion criticism on the other hand is nonexistent
              because anyone who would dare to write something against a major
              advertiser would be immediately not just fired but thrown into the
              East River." - Glenn O’Brien, editor-at-large at Maxim
            </i>
          </SupplementaryInfo>
          <ArtifactNoMediaContainer>
            <ArtifactNoMedia
              name="The Link Between Journalism and the Fashion Industry"
              color="slategrey"
              more="http://vestoj.com/fashion-writing-on-fighting-the-system/"
            >
              Journalists and members of the fashion industry have a complicated
              relationship. Saying the "wrong" thing about someone or something
              you're not supposed to can result in being blacklisted from
              private runway shows, and other industry events.
            </ArtifactNoMedia>
            <ArtifactNoMedia
              name="What's Wrong With the Fashion Industry?"
              color="slategrey"
              more="http://vestoj.com/whats-wrong-with-the-fashion-industry-4/"
            >
              From an ethical standpoint, Fashion journalism has a lot of very
              serious issues. While Instagram and other forms of social media
              are becoming a large player in Fashion advertising, they come with
              their own set of ethical issues as well.
            </ArtifactNoMedia>
          </ArtifactNoMediaContainer>
          <SupplementaryInfo color="slategrey">
            <i>
              "Fashion advertising and editorial complement each other. Fashion
              is all about creating desire, and both advertisers and editors
              want to seduce the consumer; after all, that’s our job." - Hamish
              Bowles, American Vogue editor
            </i>
          </SupplementaryInfo>
        </Inner>
      </Content>
      <Content speed={0.4} offset={5.2}>
        <Inner>
          <Title>Trends and Overconsumption</Title>
          <SupplementaryInfo color="slategrey">
            Understanding how fashion trends play a role in our lives is an
            important part of reducing our overall consumption. But why is
            buying less clothes so important?
          </SupplementaryInfo>
        </Inner>
        <Footer>
          &copy; 2018 by Victor Perez{" "}
          <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          .
        </Footer>
      </Content>
      <Content speed={0.4} offset={5.5}>
        <Inner>
          <NavButton href="#">Next Page ></NavButton>
        </Inner>
      </Content>
    </Parallax>
  </React.Fragment>
);

export default Index;
