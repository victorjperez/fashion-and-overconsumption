/* global tw */
import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Frame = styled.div`
  ${tw("shadow-lg max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg m-4")};
  background: ${props => props.color};
  flex: 0 0 auto; 
`;
const Nameplate = styled.div`
  width: 100%;
  ${tw("relative no-underline px-8 py-8 md:py-10 lg:px-10 lg:py-12 text-white")};
`;
const Description = styled.div`
  /* color: ${props => props.color}; */
  ${tw("text-white tracking-wide opacity-75 font-sans text-sm md:text-lg")};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw(
    "text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const MoreInfo = styled.a`
  ${tw(
    "inline-block bg-grey-light px-5 py-1 text-sm text-center font-sans text-grey-darker pt-5"
  )};
  width: 100%;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    background-color: #FFFFFF;
  }
`;
const ArtifactNoMedia = ({ color, name, children, more }) => (
  <Frame color={color}>
    <Nameplate color={color}>
      <Title>{name}</Title>
      <Description color={color}>{children}</Description>
    </Nameplate>
    <MoreInfo href={more}>Learn More</MoreInfo>
  </Frame>
);
export default ArtifactNoMedia;

ArtifactNoMedia.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  color: PropTypes.any.isRequired,
  more: PropTypes.string.isRequired
};
