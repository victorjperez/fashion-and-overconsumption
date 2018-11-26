import styled from "react-emotion";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";
import { hidden } from "../styles/utils";
import { colors } from "../../tailwind";
import triangle from "../images/triangle.svg";
import "../styles/global";
import {
  rotate,
  //   UpDown,
  //   UpDownWide,
  waveAnimation
} from "../styles/animations";

export const HeaderNav = styled.header`
  ${tw("flex flex-row items-center justify-between w-1/3 h-full opacity-75 absolute")};
  color: white;
  top: -420px;
`;

export const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

export const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24 justify-center items-center flex z-50")};
`;

export const SupplementaryInfo = styled.div`
  ${tw(
    "text-white opacity-80 font-sans tracking-wide text-lg md:text-xl shadow-lg max-w-lg rounded-lg px-8 py-8 md:px-10 md:py-10 overflow-hidden shadow-lg m-4"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: ${props => props.color};
`;
export const NumImg = styled.img`
  ${tw("text-center rounded-full w-64 xl:w-96 shadow-lg h-auto")};
  margin: 0 auto;
`;

export const NavImg = styled.img`
  ${tw("text-center rounded-full w-8 xl:w-10 shadow-lg h-auto")};
  margin: 0 auto;
`;
export const Inner = styled.div`
  ${tw("flex flex-col justify-between items-center w-full xxl:w-3/5 text-center lg:text-left")};
`;
export const ArtifactContainer = styled.div`
  ${tw("flex flex-row flex-no-wrap items-start overflow-x-auto lg:justify-center w-full h-full")};
`;
export const BigTitle = styled.h1`
  ${tw(
    "text-center text-3xl md:text-6xl font-serif text-white mb-6 tracking-wide"
  )};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Title = styled.h1`
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

export const Subtitle = styled.p`
  ${tw("text-center text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4")};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

export const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

export const Footer = styled.footer`
  ${tw(
    "text-center text-black absolute p-6 font-sans text-sm lg:text-lg"
  )};
  bottom: 250px;
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
`;
export const BigImage = styled.img`
  ${tw("shadow-lg rounded-lg  shadow-lg m-4")};
  height: ${props => props.height};
  width: ${props => props.width};
  image-orientation: from-image;
`;
export const NavButton = styled.a`
  ${tw(
    "text-center font-sans pin-b block border border-blue text-lg rounded py-2 px-4 hover:bg-black text-white"
  )};
  background-color: ${props => props.color};
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
