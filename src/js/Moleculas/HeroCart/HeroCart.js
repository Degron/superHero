import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "../../Atoms/Text";
import Box from "../../Atoms/Box";
import Flex from "../../Atoms/Flex";
import Image from "../../Atoms/Image";

export default class HeroCart extends Component {
  render() {
    return (
      <StyledBox bg="darkGray" color="white" p={["15px", "22px"]}>
        <Flex mb={["39px", "58px"]}>
          <Box width={1 / 2} mr={["8px", "16px"]}>
            <StyledImage src={this.props.image.url} />
          </Box>
          <Box width={1 / 2}>
            <Text
              fontSize={["18px", "18px", "18px", "24px", "24px"]}
              color="white"
              mb={["8px", "16px"]}
            >
              {this.props.name}
            </Text>

            <Text
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
              color="white"
            >
              intelligence: {this.props.powerstats.intelligence}
            </Text>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
              color="white"
            >
              strength: {this.props.powerstats.strength}
            </Text>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
              color="white"
            >
              speed: {this.props.powerstats.speed}
            </Text>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
              color="white"
            >
              durability: {this.props.powerstats.durability}
            </Text>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
              color="white"
            >
              power: {this.props.powerstats.power}
            </Text>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
              color="white"
            >
              combat: {this.props.powerstats.combat}
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="center" />
      </StyledBox>
    );
  }
}

const StyledBox = styled(Box)`
  border: 2px solid #424242;
`;

const StyledImage = styled(Image)`
  max-height: 400px;
  object-fit: cover;
`;

HeroCart.propTypes = {
  image: PropTypes.shape({ url: PropTypes.string }),
  name: PropTypes.string,
  powerstats: PropTypes.shape({
    intelligence: PropTypes.string,
    strength: PropTypes.string,
    speed: PropTypes.string,
    durability: PropTypes.string,
    power: PropTypes.string,
    combat: PropTypes.string
  })
};
