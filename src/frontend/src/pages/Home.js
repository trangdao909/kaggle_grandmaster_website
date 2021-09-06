import React from 'react';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';
import {UserTile} from '../components/UserTile';

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

export const Home = () => {
    const [users, setUsers] = useState({});
    //const {userId: id} = useParams();
    
    useEffect(() =>{
        const fetchUsers = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/user`);
            const data = await response.json();
            setUsers(data);
            console.log(data);

        }
        fetchUsers();
    }, [])
    return ( 
        <Styles>
            <Container>
                <Row>                 
                    {users.map(user => <UserTile key={user.id}   userName={user.displayName} userRank={user.currentRanking}/>)}                 
                </Row>
            </Container>
        </Styles>
     
    )
}