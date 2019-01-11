import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../Atoms/Image";
import Box from "../../Atoms/Box";

export default class FaceCard extends Component {
  render() {
    const { heroes, chooseHero } = this.props;

    return (
      <Row>
        <RowInner pb={1}>
          {heroes && heroes.size === 0
            ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(element => {
                return <Placeholder mx={1} bg="darkGray" key={element} />;
              })
            : heroes.map(element => {
                return (
                  <ItemWrap
                    onClick={() => {
                      chooseHero(element.id);
                    }}
                    mx={1}
                    className={"tile"}
                    key={element.id}
                    alignment={element.biography.alignment}
                  >
                    <StyledImage src={element.image.url} />
                  </ItemWrap>
                );
              })}
        </RowInner>
      </Row>
    );
  }
}

const duration = "450ms";
const tileWidth = 120;
const tileHeight = tileWidth * 1.33;
const growFactor = 1.5;
const moveLeft = -((tileWidth * (growFactor - 1)) / 2);

const ItemWrap = styled(Box)`
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.08),
    0 1px 4px 0 ${({ alignment }) => (alignment === "good" ? "green" : "red")};
  position: relative;
  display: inline-block;
  width: ${tileWidth}px;
  height: ${tileHeight}px;
  cursor: pointer;
  transition: ${duration} all;
  transform-origin: center left;
  &:hover {
    transform: scale(${growFactor});
  }
`;

const StyledImage = styled(Image)`
  width: ${tileWidth}px;
  height: ${tileHeight}px;
  object-fit: cover;
`;

const RowInner = styled(Box)`
  transition: ${duration} transform;
  white-space: nowrap;
  margin: ${tileHeight / 2}px 8px;
  &:hover {
    transform: translate3d(${moveLeft}px, 0, 0);
  }
`;

const Row = styled(Box)`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const Placeholder = styled(Box)`
  position: relative;
  display: inline-block;
  width: ${tileWidth}px;
  height: ${tileHeight}px;
`;
