import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import HeroCart from "../../Moleculas/HeroCart/HeroCart";
import Flex from "../../Atoms/Flex";
import Box from "../../Atoms/Box";
import Carousel from "../../Moleculas/Carousel";
import { setSuperHeroes } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: -1,
      bad: -1
    };

    this.chooseHero = this.chooseHero.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin}/getHeroes/1/10`)
      .then(({ data }) => {
        this.props.dispatch(setSuperHeroes([...data]));
      })
      .catch(error => {
        console.log(error);
      });
  }

  chooseHero(id) {
    this.setState(() => {
      if (this.getHeroById(id).biography.alignment === "good") {
        return { good: id };
      }
      if (this.getHeroById(id).biography.alignment === "bad") {
        return { bad: id };
      }
    });
  }

  getHeroById(id) {
    const hero = this.props.heroes.find(element => {
      return element.id === id;
    });

    return hero;
  }

  render() {
    return (
      <StyledBox bg="black" mt={["8px", "20px"]} mx={[0, 0, 0, "5%", "15%"]}>
        <Flex
          w={1}
          justify="center"
          flexDirection={["column", "column", "row"]}
        >
          <Placeholder bg="darkGray" m={1} w={[1, 1, "50%"]}>
            {this.getHeroById(this.state.good) && (
              <HeroCart {...this.getHeroById(this.state.good)} />
            )}
          </Placeholder>

          <Placeholder bg="darkGray" m={1} w={[1, 1, "50%"]}>
            {this.getHeroById(this.state.bad) && (
              <HeroCart {...this.getHeroById(this.state.bad)} />
            )}
          </Placeholder>
        </Flex>
        <Flex justify="center" flexDirection={["column", "column", "row"]}>
          <Box mx={3} mb={2} w={1}>
            <Carousel heroes={this.props.heroes} chooseHero={this.chooseHero} />
          </Box>
        </Flex>
      </StyledBox>
    );
  }
}

const StyledBox = styled(Box)`
  height: 100%;
`;

const Placeholder = styled(Box)`
  height: 506px;

  @media screen and (max-width: 32em) {
    height: 350px;
  }
`;

const mapStateToProps = state => {
  return {
    heroes: state.app.get("heroes")
  };
};

export default connect(mapStateToProps)(App);
