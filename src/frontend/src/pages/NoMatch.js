import React from 'react';
import { Jumbotron } from '../components/JumbotronComp';
import { NavigationBar } from '../components/NavigationBar';


export const NoMatch =() =>  {  
        
        return ( 
            <React.Fragment>
                <NavigationBar />
                <Jumbotron title="Page Not Found" text="" />           
            </React.Fragment>        
        )   
}
