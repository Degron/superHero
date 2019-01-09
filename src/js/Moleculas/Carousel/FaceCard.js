import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../Atoms/Image";
import { scaleIndex } from "./constants";
import Box from "../../Atoms/Box";

export const windowHeight = 720;
export const windowWidth = 1280;

export const horizontalSafeSpace = windowWidth * 0.077;
export const navMenuWidth = windowWidth * 0.25;

export const gold = "rgba(244, 189, 24, 1)"; //#f4bd18;
export const darkGray = "rgba(66, 66, 66, 1)"; //#424242'
export const transparent = "rgba(0, 0, 0, 0)"; //transparent
export const aToZGradient = "#f2e7c3";

export const transformPerformance = `
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
`;

// ==== SUPES META ====
export const easeTime = `.35s`;
export const allEase = `all ${easeTime} ease`;
export const transitionAllEase = `transition: ${allEase};`;

export const fnRemoveSpacing = str => {
  return str.replace(/\s/g, "");
};

//===== GPU performance utilities - used for transitions in css/styled-component styles ====

export const deviceTranslateX = (device, x = 0, y = 0, z = 0) =>
  device ? `translate3d(${x}, ${y}, ${z})` : `translateX(${x})`;

export const deviceTranslateY = (device, x = 0, y = 0, z = 0) =>
  device ? `translate3d(${x}, ${y}, ${z})` : `translateX(${x})`;

export default class FaceCard extends Component {
  render() {
    const {} = this.props;

    return (
      <Row>
        <RowInner pb={1}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(element => {
            return (
              <ItemWrap mr={1} className={"tile"} key={element}>
                <StyledImage src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg" />
              </ItemWrap>
            );
          })}
        </RowInner>
      </Row>
    );
  }
}

const duration = "450ms";
const tileWidth = 100;
const tileHeight = tileWidth / (16 / 9);
const growFactor = 1.5;
const moveLeft = -((tileWidth * (growFactor - 1)) / 2);

const ItemWrap = styled(Box)`
  position: relative;
  display: inline-block;
  width: ${tileWidth}px;
  cursor: pointer;
  transition: ${duration} all;
  transform-origin: center left;
  &:hover {
    transform: scale(${growFactor});
    opacity: 1;
  }
`;

const StyledImage = styled(Image)`
  width: ${tileWidth}px;
  object-fit: cover;
`;

const RowInner = styled(Box)`
  transition: ${duration} transform;
  white-space: nowrap;
  margin: ${tileHeight / 2}px 0;
  &:hover {
    transform: translate3d(${moveLeft}px, 0, 0);
  }
`;

const Row = styled(Box)`
  width: 100%;
  height: 300px;
`;


//2089251891142345

// https://superheroapi.com/api/2089251891142345