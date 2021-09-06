import React from 'react';
import { Container } from 'react-bootstrap';

export const User = () => {
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
     
    )
}