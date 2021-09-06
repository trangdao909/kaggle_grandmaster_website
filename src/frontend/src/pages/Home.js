import React from 'react';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';
import {UserTile} from '../components/UserTile';
import  PaginationCustom  from '../components/PaginationCustom';
import { Jumbotron } from '../components/JumbotronComp';
import { NavigationBar } from '../components/NavigationBar';

const Styles = styled.div`  
    .backgroundCustom {
        background-color: #222;    
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 5;
    }
    
`;

export const Home =() =>  {
    const [users, setUsers] = useState({});
    //const {userId: id} = useParams();
    
    useEffect(() =>{
        const fetchUsers = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/user`);
            const data = await response.json();
            setUsers(data);
           // console.log(data);

        }
        fetchUsers();
    }, [])
        
        return ( 
            <Styles>
                <NavigationBar />
                <Jumbotron title="Welcome" text="List of Kagglers and ranking" />                
                <Container className="backgroundCustom">
                    <Row >  
                            <PaginationCustom users={users}/> 
                    </Row>
                </Container>
                
            </Styles>        
        )   
}
