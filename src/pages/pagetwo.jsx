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
import one from "../images/one.svg";
import youcannotsit from "../images/water_infographic.jpg";
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
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={6.2}>
      <Content speed={0.4} offset={0.1}>
        <Inner>
          <NumImg src={one} alt="I" />
          <BigTitle>HOW CLOTHES ARE MADE</BigTitle>
          <Subtitle>
            What is the true cost of what you wear? How many resources go into a
            peice of clothing? How are clothes manufactured?
          </Subtitle>
        </Inner>
      </Content>
      <Divider
        bg="#23262b"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Content speed={0.4} offset={1}>
        <Inner>
          <Title>The Denim Manufacturing Process</Title>
          <SupplementaryInfo color="slategrey">
            When you look at a peice of clothing, you don't necissarily see all
            that time and effort that went into it. Jeans are a good example of
            clothing with a high ecological and work cost.
          </SupplementaryInfo>
          <ArtifactContainer>
            <BigImage height="185px" width="320px" src={youcannotsit} />
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
          </ArtifactContainer>
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
          <ArtifactContainer>
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
          </ArtifactContainer>
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
