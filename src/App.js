import React, { Component } from "react";
import styled from "styled-components";
import HeroCart from "./js/Moleculas/HeroCart/HeroCart";
import Flex from "./js/Atoms/Flex";
import Box from "./js/Atoms/Box";
import FaceCard from "./js/Moleculas/Carousel";
import axios from "axios";

const props = {
  name: "Batman",
  intelligence: "100",
  strength: "26",
  speed: "27",
  durability: "50",
  power: "47",
  combat: "100",
  src: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
};

const props1 = {
  name: "Batman",
  intelligence: "100",
  strength: "26",
  speed: "27",
  durability: "50",
  power: "47",
  combat: "100",
  src: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
};

export class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const config = {
      headers: {
        "Access-Control-Request-Headers": "*",
      }

    };
    // "Access-Control-Allow-Headers": "X-Requested-With",
    // "Access-Control-Allow-Methods": "GET",
    // "Access-Control-Allow-Origin": "*"

    // function getUserAccount() {
    //   return axios.get(
    //     "https://superheroapi.com/api/2089251891142345/01",
    //     config
    //   );
    // }

    // function getUserPermissions() {
    //   return axios.get(
    //     "https://superheroapi.com/api/2089251891142345/02",
    //     config
    //   );
    // }

    // axios.all([getUserAccount(), getUserPermissions()]).then(
    //   axios.spread(function(acct, perms) {
    //     // console.log(acct, perms);
    //   })
    // );
    axios.get("/test")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <StyledBox bg="black" mt={["8px", "20px"]}>
        <Flex justify="center" flexDirection={["column", "column", "row"]}>
          <Box m={1}>
            <HeroCart {...props} />
          </Box>
          <Box m={1}>
            <HeroCart {...props1} />
          </Box>
        </Flex>
        <Flex justify="center" flexDirection={["column", "column", "row"]}>
          <Box mx={3} w={["270px", "270px", "270px", "540px", "1080px"]}>
            <FaceCard />
          </Box>
        </Flex>
      </StyledBox>
    );
  }
}

const StyledBox = styled(Box)`
  height: 100%;
`;
