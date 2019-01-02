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

import waterinfographic from "../images/water_info.jpg";
import "../styles/global";
import {
  HeaderNav,
  Divider,
  DividerMiddle,
  Content,
  SupplementaryInfo,
  NumImg,
  NavImg,
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

//Color Pallet - ANNA ZBOROWSKA BY AMEDEO MODIGLIANI
const colorPrimary = "#7E2F28";
const colorSecondary = "#D58E40";
const colorsArtifact = ["#202938", "#1D2025"];
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.1} offset={0} factor={1}>
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
      <Content speed={0.4} offset={0} factor={1}>
        <Inner>
          <NumImg src={two} alt="II" />
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

          <BigTitle>THE COST OF CLOTHES</BigTitle>
          <Subtitle>
            What is the true cost of what you wear? How many resources go into a
            peice of clothing? How are clothes manufactured?
          </Subtitle>
        </Inner>
      </Content>
      <DividerMiddle
        bg={`linear-gradient(to right, ${colorSecondary} 0%, ${colorPrimary}  100%)`}
        speed={-0.2}
        offset={2}
        factor={2}
      />
      <Divider speed={0.1} offset={1.8}>
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
      <Content speed={0.4} offset={1} factor={2.3}>
        <Inner>
          <Title>The Denim Manufacturing Process (At a Glance)</Title>
          <SupplementaryInfo color={colorsArtifact[0]}>
            When you look at a peice of clothing, you don't necessarily see all
            that time and effort that went into it. Jeans specifically have been
            an American staple for years, and many people own at least two or
            three pairs. How high is the cost for each pair of jeans?
          </SupplementaryInfo>
          <BigImage height="70%" width="70%" src={waterinfographic} />
          <ArtifactContainer>
            <ArtifactNoMedia
              name="It All Starts With Water"
              color={colorsArtifact[0]}
              more="https://goodonyou.eco/fashion-and-water-the-thirsty-industry/"
            >
              You might not think about it, but the outfit you're wearing right
              now might have taken thousands of gallons to produce. Growing the
              cotton alone for a pair of jeans takes approximately <b>1,500</b>{" "}
              gallons of water. This is in addition to the washing and detailing
              that goes into it.
            </ArtifactNoMedia>
            <ArtifactVideo
              name="An Ecologically and Human Expensive Process"
              color={colorsArtifact[0]}
              embedd="https://www.youtube.com/embed/rdWa7MYNHOk"
            >
              Once a pair of jeans are manufactured, the process doesn't stop
              there. Even more water is used in making your jeans looked worn
              in. In addition, harmful chemicals are used which are hazardous to
              both the environment and workers' health.
            </ArtifactVideo>
          </ArtifactContainer>
          <ArtifactNoMedia
            name="An In-Depth Look at Denim Wash"
            color={colorsArtifact[0]}
            more="https://www.coats.com/Guidance/Working-with-Denim-Wash"
          >
            The are many different washes and variations to denim, each with
            their own costs associated with them. This brochure takes a deeper
            look at each of the processes and the drawbacks associated with
            them.
          </ArtifactNoMedia>
          <SupplementaryInfo color={colorsArtifact[0]}>
            Of course, that isn't even the half of what goes into making a pair
            of jeans. There's the weaving of the actual denim material, the
            construction of the jeans, and other things to consider.
          </SupplementaryInfo>
        </Inner>
      </Content>
      <Divider
        bg={colorsArtifact[0]}
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3.9}>
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

      <Content speed={0.4} offset={2} factor={4}>
        <Inner>
          <Title>The Finanical Cost of Clothing</Title>
          <SupplementaryInfo color={colorsArtifact[1]}>
            Now that you know a little about the manufacturing process, what
            else do you think goes into the tag price of an article of clothing?
          </SupplementaryInfo>
          <ArtifactVideo
            name="Why Are Clothes So Expensive?"
            color={colorsArtifact[1]}
            embedd="https://www.youtube.com/embed/EihI7oApeuw"
          >
            To many people, an $80 sweater is seen as an absurd waste of money.
            Why pay that much when you can get one for $20 at H&M? Here's why
            you shouldn't scoff at high prices.
          </ArtifactVideo>
          <ArtifactContainer>
            <ArtifactNoMedia
              name="The Cost of Runway Shows"
              color={colorsArtifact[1]}
              more="https://www.businessinsider.com/how-much-do-fashion-shows-cost-2013-9"
            >
              While runway shows may seem like an unnecessary expenditure, these
              costly events are important advertising for brands. A single show
              at New York Fashion Week can cost around <b>$460,000</b>.
            </ArtifactNoMedia>
            <ArtifactVideo
              name="Designing at a Glance"
              color={colorsArtifact[1]}
              embedd="https://www.youtube.com/embed/0WVOhnq1cro"
            >
              We covered how clothes are manufactured, but there is so much that
              goes into simply designing a peice of clothing. This video covers
              one of the numerous steps that go into the design process.
            </ArtifactVideo>
          </ArtifactContainer>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={4}>
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
      <Content speed={0.4} offset={3} factor={3.5}> 
        <Inner>
          <Title>How Are Clothes So Affordable?</Title>
          <SupplementaryInfo color={colorPrimary}>
            Knowing all this, it's no wonder that a single garment can cost
            hundreds of dollars to purchase. Why is it then that you can walk
            into a store with $50 and come out with bags of clothing?
          </SupplementaryInfo>
        </Inner>
      </Content>
      <Content speed={0.4} offset={4.3}>
        <Link to="/pagethree/">
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
      <Divider fill={colorSecondary} speed={0.2} offset={4}>
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
