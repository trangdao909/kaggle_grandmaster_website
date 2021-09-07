import React from 'react';
import {useEffect, useState} from 'react';
import { Container, Row} from 'react-bootstrap';
import styled from 'styled-components';
import  PaginationCustom  from '../components/PaginationCustom';
import { Jumbotron } from '../components/JumbotronComp';
import { NavigationBar } from '../components/NavigationBar';

const Styles = styled.div`  
    .backgroundCustom {
        background-color: #222;    
        position: relative;
        margin:0 ;
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
