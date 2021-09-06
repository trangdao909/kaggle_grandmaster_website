import React from 'react';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';

const Styles = styled.div`  
    .cart  {
        background-color: lightgrey;      
        color: black;
        margin: 0.5rem auto;
        border-radius: 1rem;
        & > h6 {
            padding-top: 2rem;
        }
    }
   .user-name{
        color: #20BEFF;
        
    }
`;

export const UserTile = (props) => {
   
   
    return (
        <Styles>
            <Container>
                <Row className="cart">
                    <Col md="6" className="user-name">                
                        <h6 className="title">{props.userName}</h6>
                    </Col>
                    <Col md="4" className="">
                        <h6 className="title">#{props.userRank}</h6>
                    </Col>
                    <Col md="2" className="">
                        <h3 className="title"> ></h3>
                    </Col>
                </Row>
            </Container>
        </Styles>
     
    )
}