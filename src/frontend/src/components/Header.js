import './Header.scss';
import kaggleLogo from '../assets/kaggle-logo.png';

export const Header = () =>{

    return(
        <header className="Header">
            <img src={kaggleLogo}  alt="kaggle-logo" className="kaggle-logo" />            
        </header>
    )
}