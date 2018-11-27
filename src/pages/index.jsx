/* global tw */
import React from "react";
import { Link } from "gatsby";
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
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";

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
  HeaderNav,
  NavImg,
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
const colorsArtifact = ["#B69F7F", "#76A9A2"];
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={6.2}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG
            icon="dress"
            className={hidden}
            width={48}
            stroke={colors.orange}
            left="10%"
            top="20%"
          />
          <SVG
            icon="boot"
            width={48}
            stroke={colors.red}
            left="60%"
            top="70%"
          />
          <SVG
            icon="shorts"
            width={6}
            fill={colors["grey-darker"]}
            left="60%"
            top="15%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="dressShirt"
            className={hidden}
            width={16}
            fill={colors["blue-dark"]}
            left="80%"
            top="10%"
          />
          <SVG
            icon="dress"
            width={12}
            stroke={colors.white}
            left="90%"
            top="50%"
          />
          <SVG
            icon="shirt"
            width={16}
            fill={colors["grey-darker"]}
            left="70%"
            top="90%"
          />
          <SVG
            icon="dress"
            width={16}
            stroke={colors["grey-darkest"]}
            left="30%"
            top="65%"
          />
          <SVG
            icon="shirt"
            width={6}
            fill={colors["grey-darkest"]}
            left="75%"
            top="10%"
          />
          <SVG
            icon="coat"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="shirt"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="5%"
          top="70%"
        />
        <SVG
          icon="shirt"
          width={6}
          fill={colors["grey-darkest"]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="shirt"
          width={12}
          fill={colors["grey-darkest"]}
          left="50%"
          top="60%"
        />
        <SVG
          icon="coat"
          width={8}
          fill={colors["grey-darkest"]}
          left="95%"
          top="90%"
        />
        <SVG
          icon="coat"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="40%"
          top="80%"
        />
        <SVG
          icon="dress"
          width={8}
          stroke={colors["grey-darker"]}
          left="25%"
          top="5%"
        />
        <SVG icon="shirt" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG
          icon="shorts"
          className={hidden}
          width={64}
          fill={colors.purple}
          left="5%"
          top="90%"
        />
        <SVG
          icon="shorts"
          width={6}
          fill={colors["grey-darkest"]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="shorts"
          width={12}
          fill={colors["grey-darkest"]}
          left="40%"
          top="30%"
        />
        <SVG
          icon="boot"
          width={16}
          stroke={colors["grey-darker"]}
          left="10%"
          top="50%"
        />
        <SVG
          icon="boot"
          width={8}
          stroke={colors["grey-darker"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Inner>
          <BigTitle>FASHION & OVERCONSUMPTION</BigTitle>
          <Subtitle>
            How clothes wear us, and what we can do to stop it.
          </Subtitle>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={1}>
        <UpDown>
          <SVG
            icon="shorts"
            width={6}
            fill={colorsArtifact[0]}
            left="85%"
            top="75%"
          />
          <SVG
            icon="dress"
            width={8}
            fill={colorsArtifact[0]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="dressShirt"
            width={8}
            fill={colorsArtifact[1]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="shirt"
            className={hidden}
            width={24}
            fill={colorsArtifact[0]}
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="shirt"
            className={hidden}
            width={16}
            fill={colorsArtifact[0]}
            left="20%"
            top="90%"
          />
          <SVG
            icon="dressShirt"
            width={12}
            fill={colorsArtifact[1]}
            left="90%"
            top="30%"
          />
          <SVG
            icon="shirt"
            width={16}
            fill={colorsArtifact[0]}
            left="70%"
            top="90%"
          />
          <SVG
            icon="dressShirt"
            className={hidden}
            width={16}
            fill={colorsArtifact[1]}
            left="18%"
            top="75%"
          />
          <SVG
            icon="shirt"
            width={6}
            fill={colorsArtifact[0]}
            left="75%"
            top="10%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorsArtifact[0]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="shirt"
          width={6}
          fill={colorsArtifact[0]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="shirt"
          width={12}
          fill={colorsArtifact[0]}
          left="80%"
          top="60%"
        />
        <SVG
          icon="shorts"
          width={6}
          fill={colorsArtifact[0]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="shorts"
          width={12}
          fill={colorsArtifact[0]}
          left="29%"
          top="26%"
        />
        <SVG
          icon="boot"
          width={16}
          fill={colorsArtifact[1]}
          left="75%"
          top="30%"
        />
        <SVG
          icon="boot"
          width={8}
          fill={colorsArtifact[1]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={1} factor={1}>
        <Inner>
          <NumImg src={one} alt="I" />
          <HeaderNav>
            <Link to="/">
              <NavImg src={one} alt="I" />
            </Link>
            ー
            <Link to="/pagetwo/">
              <NavImg src={two} alt="II" />
            </Link>
            ー
            <Link to="/pagethree/">
              <NavImg src={three} alt="III" />
            </Link>
            ー
            <Link to="/pagefour/">
              <NavImg src={four} alt="IV" />
            </Link>
          </HeaderNav>
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
      <Divider speed={0.1} offset={2.3}>
        <UpDown>
          <SVG
            icon="shorts"
            className={hidden}
            width={6}
            fill={colorsArtifact[0]}
            left="50%"
            top="75%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorsArtifact[1]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="dressShirt"
            width={8}
            fill={colorsArtifact[0]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={24}
            fill={colorsArtifact[1]}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="shirt"
            className={hidden}
            width={16}
            fill={colorsArtifact[0]}
            left="5%"
            top="80%"
          />
          <SVG
            icon="dressShirt"
            width={12}
            fill={colorsArtifact[1]}
            left="95%"
            top="50%"
          />
          <SVG
            icon="shirt"
            width={6}
            fill={colorsArtifact[1]}
            left="85%"
            top="15%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorsArtifact[1]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="shirt"
          width={6}
          fill={colorsArtifact[1]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="shirt"
          width={12}
          fill={colorsArtifact[0]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="shorts"
          width={6}
          fill={colorsArtifact[1]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="shorts"
          width={12}
          fill={colorsArtifact[0]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="boot"
          width={8}
          fill={colorsArtifact[1]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={2.3}>
        <Inner>
          <Title>Trends and The Fashion Cycle</Title>
          <ArtifactVideo
            name="The Trickle Down Effect"
            color={colorsArtifact[0]}
            embedd="https://www.youtube.com/embed/awmyDjY-8e8"
          >
            <i>The Devil Wears Prada</i> may be a satirical film about the
            fashion industry, but this iconic scene does a lot to explain the
            way high fashion trickles down to the general public. This is the
            basis of the fashion cycle that dictates what we as a society wear.
          </ArtifactVideo>
          <SupplementaryInfo color={colorsArtifact[0]}>
            When looking at runway shows, it's hard to see how any of it affects
            what we wear every day. Understanding how those shows disseminate into the general
            public is the key to understanding the fashion cycle.
          </SupplementaryInfo>
          <ArtifactNoMedia
            name="The History of the Fashion Cycle"
            color={colorsArtifact[0]}
            more="http://vestoj.com/keywords-in-defining-dress-the-fashion-cycle/"
          >
            The fashion cycle follows a basic model: higher social classes
            dictate what is fashionable, and lower social classes emulate it
            until it's not. This was first introduced by Thorstein Veblen in
            1899 in the text <i>The Theory of the Leisure Class</i>
          </ArtifactNoMedia>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={4.2}>
        <UpDown>
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorPrimary}
            left="70%"
            top="20%"
          />
          <SVG
            icon="dressShirt"
            width={8}
            stroke={colorSecondary}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="dressShirt"
            width={12}
            stroke={colorSecondary}
            left="95%"
            top="50%"
          />
          <SVG
            icon="shirt"
            width={6}
            fill={colorPrimary}
            left="85%"
            top="15%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorPrimary}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="shirt" width={6} fill={colorPrimary} left="4%" top="20%" />
        <SVG icon="shirt" width={12} fill={colorPrimary} left="70%" top="60%" />
        <SVG
          icon="shorts"
          width={12}
          fill={colorPrimary}
          left="20%"
          top="30%"
        />
        <SVG
          icon="boot"
          width={8}
          stroke={colorSecondary}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Fashion Journalism and Trendsetting</Title>
          <BigImage height="40%" width="40%" src={youcannotsit} />
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
              From an ethical standpoint, fashion journalism has a lot of very
              serious issues. While Instagram and other forms of social media
              are becoming a large player in fashion advertising, they come with
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
      <Divider speed={0.1} offset={5.3}>
        <UpDown>
          <SVG
            icon="shorts"
            className={hidden}
            width={6}
            fill={colorsArtifact[1]}
            left="50%"
            top="75%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorsArtifact[1]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="dressShirt"
            width={8}
            fill={colorsArtifact[1]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={24}
            fill={colorsArtifact[1]}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="shirt"
            className={hidden}
            width={16}
            fill={colorsArtifact[1]}
            left="5%"
            top="80%"
          />
          <SVG
            icon="dressShirt"
            width={12}
            fill={colorsArtifact[1]}
            left="95%"
            top="50%"
          />
          <SVG
            icon="shirt"
            width={6}
            fill={colorsArtifact[1]}
            left="85%"
            top="15%"
          />
          <SVG
            icon="dress"
            className={hidden}
            width={8}
            fill={colorsArtifact[1]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="shirt"
          width={6}
          fill={colorsArtifact[1]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="shirt"
          width={12}
          fill={colorsArtifact[1]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="shorts"
          width={6}
          fill={colorsArtifact[1]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="shorts"
          width={12}
          fill={colorsArtifact[1]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="boot"
          width={8}
          fill={colorsArtifact[1]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={5.3}>
        <Inner>
          <Title>Trends and Overconsumption</Title>
          <SupplementaryInfo color={colorPrimary}>
            Understanding how fashion trends play a role in our lives is an
            important part of reducing our overall consumption. But why is this
            such an important topic?
          </SupplementaryInfo>
        </Inner>
      </Content>
      <Content speed={0.4} offset={5.6}>
        <Link to="/pagetwo/">
          <NavButton color={colorPrimary}>Next Page ></NavButton>
        </Link>
        <Footer>
          &copy; 2018 by Victor Perez{" "}
          <a href="https://github.com/victorjperez/fashionandoverconsumption">
            Github Repository
          </a>
          .
        </Footer>
      </Content>
      <Divider fill={colorSecondary} speed={0.2} offset={5.25}>
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
