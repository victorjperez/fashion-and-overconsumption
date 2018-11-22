/* global tw */
import React from "react";
import { Link } from "gatsby"
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
import one from "../images/one.svg";
import youcannotsit from "../images/you-cannot-sit.png";
import "../styles/global";
import {
  Divider,
  DividerMiddle,
  Content,
  SupplementaryInfo,
  NumImg,
  Inner,
  ArtifactContainer,
  BigTitle,
  Title,
  Subtitle,
  WaveWrapper,
  InnerWave,
  Footer,
  BigImage,
  NavButton
} from "../styles/pagecomps";

//Color Pallet - PINK PANTHER BY JEFF KOONS
const colorPrimary = "#A26775";
const colorSecondary = "#D6AABE";
const colorsArtifact = ["#B69F7F","#76A9A2"];
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5.5}>
      <Content speed={0.4} offset={0}>
        <Inner>
          <BigTitle>FASHION & OVERCONSUMPTION</BigTitle>
          <Subtitle>
            How clothes wear us, and what we can do to stop it.
          </Subtitle>
        </Inner>
      </Content>
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

      <DividerMiddle
        bg={`linear-gradient(to right, ${colorSecondary} 0%, ${colorPrimary}  100%)`}
        speed={-0.2}
        offset={2}
        factor={2}
      />
      <Divider
        bg={colorsArtifact[1]}
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Content speed={0.4} offset={2.3}>
        <Inner>
          <Title>Trends and The Fashion Cycle</Title>
          <ArtifactVideo
            name="The Trickle Down Effect"
            color={colorsArtifact[0]}
            embedd="https://www.youtube.com/embed/awmyDjY-8e8"
          >
            <i>The Devil Wears Prada</i> may be a saterical film about the
            fashion industry, but this iconic scene does a lot to explain the
            way high fashion trickles down to the general public. This is the
            basis of the fashion cycle that dictates what we as a society wear.
          </ArtifactVideo>
          <SupplementaryInfo color={colorsArtifact[0]}>
            When looking at runway shows, it's hard to see how any of it affects
            what we wear every day. They're over the top, extravagent, and
            nobody with any sense would wear half of those outfits to work or
            class. Understanding how those shows disseminate into the general
            public is the key to understanding the fashion cycle.
          </SupplementaryInfo>
          <ArtifactNoMedia
            name="The History of the Fashion Cycle"
            color={colorsArtifact[0]}
            more="http://vestoj.com/keywords-in-defining-dress-the-fashion-cycle/"
          >
            The fashion cycle follows a basic model: higher social classes
            dictate what is fashionable, and lower social classes emulate it
            until it is not. This was first introduced by Thorstein Veblen in
            1899 in the text <i>The Theory of the Leisure Class</i>
          </ArtifactNoMedia>
        </Inner>
      </Content>
      <Content speed={0.4} offset={3.8}>
        <Inner>
          <Title>Fashion Journalism and Trendsetting</Title>
          <BigImage height="504px" width="511px" src={youcannotsit} />
          <SupplementaryInfo color={colorsArtifact[1]}>
            <i>
              "One of the differences between art and fashion is that, though it
              has relatively little effect, there still is such a thing as art
              criticism. Fashion criticism on the other hand is nonexistent
              because anyone who would dare to write something against a major
              advertiser would be immediately not just fired but thrown into the
              East River." - Glenn O’Brien, editor-at-large at Maxim
            </i>
          </SupplementaryInfo>
          <ArtifactContainer>
            <ArtifactNoMedia
              name="The Link Between Journalism and the Fashion Industry"
              color={colorsArtifact[1]}
              more="http://vestoj.com/fashion-writing-on-fighting-the-system/"
            >
              Journalists and members of the fashion industry have a complicated
              relationship. Saying the "wrong" thing about someone or something
              you're not supposed to can result in being blacklisted from
              private runway shows, and other industry events.
            </ArtifactNoMedia>
            <ArtifactNoMedia
              name="What's Wrong With the Fashion Industry?"
              color={colorsArtifact[1]}
              more="http://vestoj.com/whats-wrong-with-the-fashion-industry-4/"
            >
              From an ethical standpoint, Fashion journalism has a lot of very
              serious issues. While Instagram and other forms of social media
              are becoming a large player in Fashion advertising, they come with
              their own set of ethical issues as well.
            </ArtifactNoMedia>
          </ArtifactContainer>
          <SupplementaryInfo color={colorsArtifact[1]}>
            <i>
              "Fashion advertising and editorial complement each other. Fashion
              is all about creating desire, and both advertisers and editors
              want to seduce the consumer; after all, that’s our job." - Hamish
              Bowles, American Vogue editor
            </i>
          </SupplementaryInfo>
        </Inner>
      </Content>
      <Content speed={0.4} offset={4.7}>
        <Inner>
          <Title>Trends and Overconsumption</Title>
          <SupplementaryInfo color={colorPrimary}>
            Understanding how fashion trends play a role in our lives is an
            important part of reducing our overall consumption. But why is
            this such an important topic?
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
      <Content speed={0.4} offset={4.9}>
        <Inner>
          <Link
            to="/pagetwo/"
          ><NavButton color={colorPrimary}>
            Next Page >
             
          </NavButton></Link>
        </Inner>
      </Content>
      <Divider fill={colorSecondary} speed={0.2} offset={4.6}>
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
    </Parallax>
  </React.Fragment>
);

export default Index;
