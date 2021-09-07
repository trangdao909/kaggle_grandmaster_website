import React from 'react';
import { Container, Row, Col, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Jumbotron } from '../components/JumbotronComp';
import { NavigationBar } from '../components/NavigationBar';


const Styles = styled.div`  
    
    .backgroundCustom {
        background-color: #222;
        position: relative;
        margin:0 ;
        z-index: 5;
        padding: 5rem;
    }
    .row-gap{
        margin-bottom: 1rem;
    }
    .kaggle{
        color: #20BEFF;
        font-weight: bold;
    }
   
`;

export const Overview = () => {
    
    return (
        <Styles>
            <NavigationBar />
            <Jumbotron title="About This Project" text="Info about Frontend, Backend Techniques and Kaggle website" />
            <Container className="backgroundCustom">
                <Row className="row-gap">
                    <Col md="5">
                        <Card>
                            <Card.Header>Frontend Tech</Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>React</ListGroupItem>
                                    <ListGroupItem>React Bootstrap</ListGroupItem>
                                    <ListGroupItem>react-minimal-pie-chart</ListGroupItem>
                                    <ListGroupItem>jw-react-pagination</ListGroupItem>
                                    <ListGroupItem>styled-components</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md="6">
                        <Card>
                            <Card.Header>Backend Tech</Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Spring Boot</ListGroupItem>
                                    <ListGroupItem>Spring JPA</ListGroupItem>
                                    <ListGroupItem>Spring Hsql for in-memory sql</ListGroupItem>
                                    <ListGroupItem>Spring Batch reads .csv file from Kaggle.com </ListGroupItem>
                                    <ListGroupItem>Spring MVC</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>                    
                    <Col md="11">
                            <Card>
                                <Card.Header><span className="kaggle">Kaggle </span> Website Overview</Card.Header>
                                <Card.Body>
                                   <Card.Text>
                                   Kaggle, a subsidiary of Google LLC, is an online community of data scientists 
                                   and machine learning practitioners. ... Kaggle got its start in 2010 by offering
                                    machine learning competitions and now also offers a public data platform, a cloud-based 
                                    workbench for data science, and Artificial Intelligence education (wikipedia).
                                   </Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col  md="1"></Col>
                </Row>
               
            </Container>
        </Styles>
     
    )
}