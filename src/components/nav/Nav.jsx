/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <p>LIT</p>
                <p>KICKS</p>
            </div>
            <div className="nav-links">
                <Link to="/">NEW</Link>
                <Link to="/">MEN'S</Link>
                <Link to="/">WOMEN'S</Link>
                <Link to="/">BRANDS</Link>
                <Link to="/">SALE</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search"></input>
                <SearchIcon />
            </div>
        </nav>
    )
}