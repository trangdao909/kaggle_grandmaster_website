import React from 'react';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';

const Styles = styled.div`  
     .user-detail  {
        background-color: lightgrey;      
        color: black;
        margin: auto;
        border-radius: 2rem;
        & > h6 {
            padding-top: 2rem;
        }
    }
  .pie-chart {
        margin-top: 1rem;
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
    }, [])
    return (
        <Styles>
            <Container>
                <Row>
                    <Col md="6" className="user-detail">                
                        <h6 className="title"><span>Title        :  </span>{user.tier}</h6> 
                        <h6 className="title"><span>Join Date    :  </span>{user.userJoinDate}</h6>                
                        <h6 className="title"><span>Total Points :  </span>{user.points}</h6>
                        <h6 className="title"><span> Personal Website :  </span>{user.userUrl}</h6>
                                
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
                        lineWidth={15}
                        paddingAngle={0}
                        radius={50}
                        rounded
                        startAngle={0}
                        viewBoxSize={[100, 100]}
                        label={(data) => data.dataEntry.value + " " + data.dataEntry.title}
                        labelPosition={65}
                        labelStyle={{
                            fontSize: "0.25rem",
                            fontColor: "FFFFFA",
                            fontWeight: "800",
                        }}
                        />
                    {/* <PieChart
                        label={(props) => {  return props.dataEntry.value ;  }}
                        data={[            
                            { title: 'Gold Medals', value: user.totalGoldMedals, color: '#f2d675' },
                            { title: 'Silver Medals', value:  user.totalSilverMedals, color: '#C4C4C4' },
                            { title: 'Bronze Medals', value:  user.totalBronzeMedals, color: '#57472C' },
                        ]}
                        /> */}
                    </Col>
                </Row>
            </Container>
        </Styles>
     
    )
}