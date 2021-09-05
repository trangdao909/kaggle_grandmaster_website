import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { MatchDetailCard } from "../components/MatchDetailCard"
import { YearSelector } from '../components/YearSelector';
import "./UserPage.scss";
// import kaggleLogo from '../assets/kaggle-logo.png';
import twitterLogo from '../assets/twitter-logo.jpg';
import header from '../assets/header.jpg';
import  '../components/Header';
import { Header } from '../components/Header';




export const UserPage = () =>{
    const [user, setUser] = useState({});
    //const {userId: id} = useParams();
    
    useEffect(() =>{
        const fetchUser = async () =>{
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/user/37166`);
            const data = await response.json();
            setUser(data);
            console.log(data);

        }
        fetchUser();
    }, [])
    return (
        <div className="UserPage">  
            
            <div className="header">     
                <Header />        
                <div className="header-text">
                    <h1 className="user-name">{user.displayName}</h1>               
                    <h2 className="rank">Rank: #{user.currentRanking}</h2>  
                </div>                                
            </div> 
           
            <div className="body">    
               
                <h2 className="title">{user.tier}</h2>
                <h1>{user.userJoinDate}</h1>
                <h1>{user.points}</h1>
                <div>Pie chart</div>
                
            </div>             
            

            
           <div className="footer">
                <Link to="">Url Link</Link>
                <img src={twitterLogo} alt="twitter-logo" className="twitter-logo" />
           </div>
            
                
        </div>
    );
}

