import React from 'react';
import { Jumbotron as Jumbo , Container } from 'react-bootstrap';
import styled from 'styled-components';
import robotHandImg from '../assets/robot_hand.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${robotHandImg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
   
  }
  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .jumbo-text {
    padding-top: 3rem;
  }
`;

export const Jumbotron = (props) => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="jumbo-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </Container>
    </Jumbo>
  </Styles>
)