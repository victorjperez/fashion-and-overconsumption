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

import vivienneOne from "../images/vivienne-1.jpeg";
import vivienneTwo from "../images/vivienne-2.jpeg";
import vivienneThree from "../images/vivienne-3.jpeg";

import hannahOne from "../images/hannah-1.jpg";
import hannahTwo from "../images/hannah-2.jpg";
import kateshoes from "../images/kateshoes.jpg";
import sashiko from "../images/sashiko.jpg";
import dress from "../images/dress.jpg";

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

//Color Pallet - MONA LISA BY LEONARDO DA VINCI
const colorPrimary = "#697153";
const colorSecondary = "#A0A584";
const colorsArtifact = ["#43362A", "#A88B4C"];
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={6.5}>
      <Divider speed={0.1} offset={0} factor={1}>
        <UpDown>
          <SVG icon="shorts" width={6} fill={colorsArtifact[0]} left="85%" top="75%" />
          <SVG icon="dress" width={8} fill={colorsArtifact[0]} left="70%" top="20%" />
          <SVG icon="dressShirt" width={8} fill={colorsArtifact[1]} left="25%" top="5%" />
          <SVG icon="shirt" className={hidden} width={24} fill={colorsArtifact[0]} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="shirt" className={hidden} width={16} fill={colorsArtifact[0]} left="20%" top="90%" />
          <SVG icon="dressShirt" width={12} fill={colorsArtifact[1]} left="90%" top="30%" />
          <SVG icon="shirt" width={16} fill={colorsArtifact[0]} left="70%" top="90%" />
          <SVG icon="dressShirt" className={hidden} width={16} fill={colorsArtifact[1]} left="18%" top="75%" />
          <SVG icon="shirt" width={6} fill={colorsArtifact[0]} left="75%" top="10%" />
          <SVG icon="dress" className={hidden} width={8} fill={colorsArtifact[0]} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="shirt" width={6} fill={colorsArtifact[0]} left="4%" top="20%" />
        <SVG icon="shirt" width={12} fill={colorsArtifact[0]} left="80%" top="60%" />
        <SVG icon="shorts" width={6} fill={colorsArtifact[0]} left="10%" top="10%" />
        <SVG icon="shorts" width={12} fill={colorsArtifact[0]} left="29%" top="26%" />
        <SVG icon="boot" width={16} fill={colorsArtifact[1]} left="75%" top="30%" />
        <SVG icon="boot" width={8} fill={colorsArtifact[1]} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0} factor={1}>
        <Inner>
          <HeaderNav>
            <Link to="/"><NavImg src={one} alt="I" /></Link>ー
            <Link to="/pagetwo/"><NavImg src={two} alt="II" /></Link>ー
            <Link to="/pagethree/"><NavImg src={three} alt="III" /></Link>ー
            <Link to="/pagefour/"><NavImg src={four} alt="IV" /></Link>
          </HeaderNav>
          <NumImg src={four} alt="IV" />
          <BigTitle>REDUCING YOUR FROOTPRINT</BigTitle>
          <Subtitle>
            What can you do to reduce your consumption? Is donating helpful? 
            How can fashion be more sustainable?
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
          <SVG icon="shorts" className={hidden} width={6} fill={colorsArtifact[0]} left="50%" top="75%" />
          <SVG icon="dress" className={hidden} width={8} fill={colorsArtifact[1]} left="70%" top="20%" />
          <SVG icon="dressShirt" width={8} fill={colorsArtifact[0]} left="25%" top="5%" />
          <SVG icon="dress" className={hidden} width={24} fill={colorsArtifact[1]} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="shirt" className={hidden} width={16} fill={colorsArtifact[0]} left="5%" top="80%" />
          <SVG icon="dressShirt" width={12} fill={colorsArtifact[1]} left="95%" top="50%" />
          <SVG icon="shirt" width={6} fill={colorsArtifact[1]} left="85%" top="15%" />
          <SVG icon="dress" className={hidden} width={8} fill={colorsArtifact[1]} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="shirt" width={6} fill={colorsArtifact[1]} left="4%" top="20%" />
        <SVG icon="shirt" width={12} fill={colorsArtifact[0]} left="70%" top="60%" />
        <SVG icon="shorts" width={6} fill={colorsArtifact[1]} left="10%" top="10%" />
        <SVG icon="shorts" width={12} fill={colorsArtifact[0]} left="20%" top="30%" />
        <SVG icon="boot" width={8} fill={colorsArtifact[1]} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={1.8}>
        <Inner>
          <Title>The Easiest Option: Buy Less Clothes</Title>
          <SupplementaryInfo color={colorsArtifact[0]}>
            There are many different ways that you can make an impact as a consumer,
            but one thing matters the most above all else: buying less clothes.
          </SupplementaryInfo>
          <ArtifactNoMedia
              name="What About Donating?"
              color={colorsArtifact[0]}
            more="https://www.npr.org/2013/01/09/168946170/thanks-but-no-thanks-when-post-disaster-donations-overwhelm"
          >
            One of the first things that usually comes to mind when thinking about conscious fashion
            is donating. Unfortunately, most places are overrun with clothing donations and turn down
            hordes of clothes. At the end of the day they'll just end up in a landfill.
          </ArtifactNoMedia>
          <SupplementaryInfo color={colorsArtifact[0]}>
            Consumers do have an impact on the industry at large, but fashion companies are also responsible for
            the effects of fashion. In response to Fast Fashion, some companies 
            are slowing down the fashion cycle and taking stands against overconsumption.
          </SupplementaryInfo>
            <ArtifactNoMedia
              name="safia minney's ethical fashion revolution"
              color={colorsArtifact[0]}
            more="https://i-d.vice.com/en_uk/article/j589bk/catching-up-with-slow-fashion-safia-minneys-ethical-fashion-revolution"
            >
              If fashion is to be more sustainable, everything needs to be slowed down. It allows companies 
              to ensure that what they are doing is ethical, and allows consumers to be more careful about what they purchase.
              Sadia Minney talks about her fair trade label in this interview.
          </ArtifactNoMedia>
          <ArtifactContainer>
            <BigImage height="40%" width="40%" src={vivienneTwo} />
            <BigImage height="40%" width="40%" src={vivienneOne} />
            <BigImage height="40%" width="40%" src={vivienneThree} />
          </ArtifactContainer>
          <ArtifactNoMedia
            name="Vivienne Westwood SS19 Collection"
            color={colorsArtifact[0]}
            more="http://www.dazeddigital.com/fashion/article/41350/1/vivienne-westwood-ss19-lookbook-campaign-film-buy-less-dress-up"
          >
           Designers can also use their collections and shows as a platform to talk about issues with their
           own industry. In this collection Westwood combines trash and a DIY asthetic to get people
           talking about societal and environmental issues in consumption.
          </ArtifactNoMedia>
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
          <SVG icon="dress" className={hidden} width={8} fill={colorPrimary} left="70%" top="20%" />
          <SVG icon="dressShirt" width={8} stroke={colorSecondary} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="dressShirt" width={12} stroke={colorSecondary} left="95%" top="50%" />
          <SVG icon="shirt" width={6} fill={colorPrimary} left="85%" top="15%" />
          <SVG icon="dress" className={hidden} width={8} fill={colorPrimary} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="shirt" width={6} fill={colorPrimary} left="4%" top="20%" />
        <SVG icon="shirt" width={12} fill={colorPrimary} left="70%" top="60%" />
        <SVG icon="shorts" width={12} fill={colorPrimary} left="20%" top="30%" />
        <SVG icon="boot" width={8} stroke={colorSecondary} left="80%" top="70%" />
      </Divider> 
      <Content speed={0.4} offset={3.9}>
        <Inner>
          <Title>Repairing and Refurbishing</Title>
          <SupplementaryInfo color={colorsArtifact[1]}>
            It's easy to just say "buy less clothes," and leave it at that, but it's much more difficult
            to put it into practice. Repairing broken clothes and modifying unworn clothes to keep them fresh
            can be a good way to extend the lifetime of what you wear.
          </SupplementaryInfo>
          <ArtifactContainer>
            <BigImage height="40%" width="40%" src={hannahOne} />
            <BigImage height="40%" width="40%" src={hannahTwo} />
          </ArtifactContainer>
          <ArtifactPicture
            name="Hannah's Repaired Jeans"
            color={colorsArtifact[1]}
          >
            Instead of purchasing a new pair of jeans when the crotch blew, Hannah cut off the sleaves 
            of another denim jacket and used it to repair them. She also personalized them using fabric
            from a shortened red plaid dress and added patches.
          </ArtifactPicture>
          <ArtifactContainer>
            <ArtifactPicture
              name="Sashiko Stitching for repairs"
              color={colorsArtifact[1]}
            >
              There are many interesting ways to customize your clothing when doing repairs. Sashiko Stitching
              for example, is a form of Japanese embroidery that's used for both repairing and reinforcing garments.
            </ArtifactPicture>
            <BigImage height="40%" width="40%" src={sashiko} />
          </ArtifactContainer>
          <ArtifactContainer>
            <BigImage height="40%" width="40%" src={kateshoes} />
            <ArtifactPicture
              name="Kate's Shoes"
              color={colorsArtifact[1]}
           >
              There are other times where one might simply become bored of the clothes they own.
              This can also be avoided by modifying garments. The longer you can keep each individual
              peice of clothing, the less clothes you'll need to buy at the end of the day.
            </ArtifactPicture>
          </ArtifactContainer>
        </Inner>
      </Content>
      <Divider
        bg={colorsArtifact[0]}
        clipPath="polygon(100% 82%, 0 94%, 0 16%, 100% 4%)"
        speed={0.2}
        offset={4.8}
      />  
      <Divider speed={0.1} offset={5.5}>
        <UpDown>
          <SVG icon="shorts" className={hidden} width={6} fill={colorsArtifact[1]} left="50%" top="75%" />
          <SVG icon="dress" className={hidden} width={8} fill={colorsArtifact[1]} left="70%" top="20%" />
          <SVG icon="dressShirt" width={8} fill={colorsArtifact[1]} left="25%" top="5%" />
          <SVG icon="dress" className={hidden} width={24} fill={colorsArtifact[1]} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="shirt" className={hidden} width={16} fill={colorsArtifact[1]} left="5%" top="80%" />
          <SVG icon="dressShirt" width={12} fill={colorsArtifact[1]} left="95%" top="50%" />
          <SVG icon="shirt" width={6} fill={colorsArtifact[1]} left="85%" top="15%" />
          <SVG icon="dress" className={hidden} width={8} fill={colorsArtifact[1]} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="shirt" width={6} fill={colorsArtifact[1]} left="4%" top="20%" />
        <SVG icon="shirt" width={12} fill={colorsArtifact[1]} left="70%" top="60%" />
        <SVG icon="shorts" width={6} fill={colorsArtifact[1]} left="10%" top="10%" />
        <SVG icon="shorts" width={12} fill={colorsArtifact[1]} left="20%" top="30%" />
        <SVG icon="boot" width={8} fill={colorsArtifact[1]} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={5.5}>
        <Inner>
          <Title>Closing Remarks: The Future of Fashion</Title>
          <SupplementaryInfo color={colorPrimary}>
            As you might have gathered by now, our current model of clothing consumption 
            is unsustainable. Clothes will continue you fill landfills, and the best thing
            we can do to stop it is to consume less while looking for better alternatives.
          </SupplementaryInfo>
          <ArtifactContainer>
            <BigImage height="40%" width="40%" src={dress} />
            <ArtifactPicture
              name="Aniela Hoitink's Mycelium Dress"
              color={colorPrimary}
            >
              Biodegradable clothing is one avenue designers can take for the future of clothing.
              This dress is made purely from peices of mushroom mycelium. This is one of the many 
              possibilities for sustainable clothing.
              </ArtifactPicture>
          </ArtifactContainer>
        </Inner>
      </Content>
      <Content speed={0.4} offset={5.999}>
      <Footer>
        &copy; 2018 by Victor Perez{" "}
          <a href="https://github.com/victorjperez/fashionandoverconsumption">
          Github Repository
          </a>
        .
        </Footer>
       </Content>
      <Divider fill={colorSecondary} speed={0.2} offset={5.6}>
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
