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
import ArtifactPicture from "../components/ArtifactPicture";
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

import ragtrade from "../images/ragtrade.jpg";
import fastfashionwaste from "../images/fastfashionwaste.jpg";

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

//Color Pallet - A SUNDAY ON LA GRANDE JATTE BY GEORGES SEURAT
const colorPrimary = "#3F3F63";
const colorSecondary = "#808EB7";
const colorsArtifact = ["#8C9355", "#465946"];
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
          <NumImg src={three} alt="III" />
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
          <BigTitle>FAST FASHION</BigTitle>
          <Subtitle>
            What exactly is fast fashion? How are clothes so cheap? What impact
            do clothes have on the enviorment?
          </Subtitle>
        </Inner>
      </Content>
      <DividerMiddle
        bg={`linear-gradient(to right, ${colorSecondary} 0%, ${colorPrimary}  100%)`}
        speed={-0.2}
        offset={2}
        factor={2}
      />
      <Divider speed={0.1} offset={1.5}>
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
      <Content speed={0.4} offset={1} factor={1.8}>
        <Inner>
          <Title>The Corruption of The Fashion Cycle</Title>
          <SupplementaryInfo color={colorsArtifact[0]}>
            As you've seen, the fashion cycle is a process that keeps people
            coming back for more clothes. Somewhere along the line, certain
            brands figured out that they could sell more by turning the
            traditional four seasons into eight-ten seasons, thus creating fast
            fashion.
          </SupplementaryInfo>
          <BigImage height="30%" width="30%" src={ragtrade} />
          <ArtifactNoMedia
            name="Los Angeles: The Fast Fashion Hub"
            color={colorsArtifact[0]}
            more="http://vestoj.com/the-la-rag-trade/"
          >
            Fast fashion starts first and foremost at the runway. A large
            variety of clothing labels take designs from runway shows, and
            quickly design and manufacture for brands such as Forever 21.
          </ArtifactNoMedia>
          <SupplementaryInfo color={colorsArtifact[0]}>
            <i>
              "So we don't as humans prefer low quality. It was only through the
              rise of fast fashion, a business model based on the artificial
              creation of short term trends, combined with clothing that doesn't
              last, what other industries call planned obsolescence, that
              consumers were, with of course very large marketing budgets, first
              convinced to accumulate all of this stuff." - Maxine Bédat
            </i>
          </SupplementaryInfo>
          <ArtifactContainer>
            <ArtifactNoMedia
              name="How E-Commerce Drives Overconsumption"
              color={colorsArtifact[0]}
              more="https://www.coursera.org/lecture/fashion-design/maxine-bedat-zady-abecedarium-presentation-on-e-commerce-DGZRH"
            >
              This presentation goes into detail about how consumption has
              changed over the years, and how fast fashion managed to take hold
              in America. It also highlights some of the environmental concerns
              with polyester, a synthetic fiber that's non-biodegradable, and a
              component in most fast fashion garments.
            </ArtifactNoMedia>
            <ArtifactNoMedia
              name="Abusing Social Classes: The Capsule Wardrobe"
              color={colorsArtifact[0]}
              more="http://vestoj.com/capsule-contradictions/"
            >
              After more conscious consumers caught on to the fast fashion
              trend, fashion companies took a different advertising angle.
              Capsule wardrobes encouraged the higher social classes to rid
              themselves of their clothes and spend more on individual items.
            </ArtifactNoMedia>
          </ArtifactContainer>
        </Inner>
      </Content>
      <Divider
        bg={colorsArtifact[0]}
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3.7}>
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
      <Content speed={0.4} offset={2} factor={3.3}>
        <Inner>
          <Title>Fashion: the Great Polluter</Title>
          <SupplementaryInfo color={colorsArtifact[1]}>
            With cheap clothes being made at an extraordinarily fast pace, there
            are tons of garments that end up unsold or thrown away after being
            worn a few times. On top of that, clothes from fast fashion
            companies are often made using synthetic materials that make them
            difficult to decompose.
          </SupplementaryInfo>
          <ArtifactContainer>
            <BigImage height="40%" width="40%" src={fastfashionwaste} />
            <ArtifactPicture
              name="The Rise of Overconsumption"
              color={colorsArtifact[1]}
            >
              While fast fashion is a relatively new idea, consumers are already
              conditioned to pay extremly low prices for their clothes. Cheap
              labor and improved production capabilities have enabled companies
              such as H&M and Zara to sell more for less than ever.
            </ArtifactPicture>
          </ArtifactContainer>
          <SupplementaryInfo color={colorsArtifact[1]}>
            The idea of fashion industry being the second largest polluter on
            the planet is hotly debated. Even still, it's impossible to deny the
            affects the industry as many garments end up unsold and tossed in
            landfills across the globe.
          </SupplementaryInfo>
          <ArtifactNoMedia
            name="The Fast Fashion Environmental Crisis"
            color={colorsArtifact[1]}
            more="https://www.newsweek.com/2016/09/09/old-clothes-fashion-waste-crisis-494824.html"
          >
            In 2012 <b>84%</b> of unwanted clothes in the United States went
            into either a landfill or an incinerator. When fast fashion is
            designed to get people to purchase more clothing that lasts shorter
            amounts of time, the earth suffers the most.
          </ArtifactNoMedia>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={5}>
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
      <Content speed={0.4} offset={3} factor={3.3}>
        <Inner>
          <Title>The Ruthless Exploitation of Labor</Title>
          <SupplementaryInfo color={colorPrimary}>
            In order to keep costs low, clothing production is outsourced to
            countries with lax labor laws like Bangladesh and China. Workers in
            these countries are paid extremely low wages, and work in horrible
            contradictions in order to produce cheap clothes quickly.
          </SupplementaryInfo>
          <ArtifactNoMedia
            name="The Rana Plaza Disaster"
            color={colorPrimary}
            more="https://www.vqronline.org/reporting-articles/2014/04/ghosts-rana-plaza"
          >
            In 2013, one of the worst preventable tragedies in the history of
            the garment industries took place. Rana Plaza was just one of many
            producers for well known fast fashion brands, and a prime example of
            labor exploitation that is widespread in the industry.
          </ArtifactNoMedia>
        </Inner>
      </Content>
      <Content speed={0.4} offset={4} factor={1.5}>
        <Link to="/pagefour/">
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
