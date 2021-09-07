import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';
import { Jumbotron } from '../components/JumbotronComp';
import { NavigationBar } from '../components/NavigationBar';

const Styles = styled.div`  
     .user-detail  {            
        color: white;
        margin: auto;
        border-radius: 2rem;
        font-weight: 600;
        & > div {
            padding-top: 2rem;
        }
    }
     .pie-chart {
        margin-top: 1rem;
        
    }
    .backgroundCustom {
        background-color: #222;
        position: relative;
        margin:0 ;
        z-index: 5;
    }
`;

export const User = () => {
    const [user, setUser] = useState({});
    const {userId: id} = useParams();
    
    useEffect(() =>{
        const fetchUser = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/user/${id}`);
            const data = await response.json();
            setUser(data);
            console.log(data);

        }
        fetchUser();
    }, [id])
    return (
        <Styles>
            <NavigationBar />
            <Jumbotron title={user.displayName} text={`Ranking: #${user.currentRanking}`} />
            <Container className="backgroundCustom">
                <Row>
                    <Col md="6" className="user-detail">    
                        <Row>
                            <Col>Title:</Col>
                            <Col>{user.tier}</Col>
                        </Row>  
                        <Row>
                            <Col>Join Date:</Col>
                            <Col>{user.userJoinDate}</Col>
                        </Row>  
                        <Row>
                            <Col>Total Points:</Col>
                            <Col>{user.points}</Col>
                        </Row>   
                        <Row>
                            <Col>Kaggle Profile:</Col>
                            <Col> 
                            <a href={`https://www.kaggle.com${user.userUrl}`}>{user.userUrl}</a> </Col>
                        </Row>       
                       
                    </Col>
                    <Col md="6" className="pie-chart">
                        <PieChart
                        animate
                        animationDuration={500}
                        animationEasing="ease-out"
                        center={[50, 50]}
                        data={[            
                            { title: 'Gold Medals', value: user.totalGoldMedals, color: '#f2d675' },
                            { title: 'Silver Medals', value:  user.totalSilverMedals, color: '#C4C4C4' },
                            { title: 'Bronze Medals', value:  user.totalBronzeMedals, color: '#57472C' },
                        ]}
                        lengthAngle={360}
                        lineWidth={45}
                        paddingAngle={0}
                        radius={50}
                        rounded
                        startAngle={0}
                        viewBoxSize={[100, 100]}
                        label={(data) => data.dataEntry.value + " " + data.dataEntry.title}
                        labelPosition={80}
                        labelStyle={{
                            fontSize: "0.18rem",
                            fontColor: "FFFFFA",
                            fontWeight: "800",
                        }}
                        />
                  
                    </Col>
                </Row>
            </Container>
        </Styles>
     
    )
}