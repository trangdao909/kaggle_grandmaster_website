import React from 'react';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';

const Styles = styled.div`  
    .cart  {
        background-color: #E5E6EB;      
        color: #222;        
        margin: 0.5rem auto;
        border-radius: 1rem;        
        padding: 1rem 1rem;
        
    }
   .user-name{
               
    }
    .rank{
       
    }
`;

export const UserTile = (props) => {
   
   
    return (
        <Styles>
            <Container>
                <Row className="cart">
                    <Col md="6" className="user-name">                
                        {props.userName}
                    </Col>
                    <Col md="4" className="rank">
                        #{props.userRank}
                    </Col>
                    <Col md="2" className="">                        
                        <Link to={`/users/${props.id}`}> More > </Link>
                    </Col>
                </Row>
            </Container>
        </Styles>
     
    )
}