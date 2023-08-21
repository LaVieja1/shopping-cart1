/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import './HeaderNav.css';

export const HeaderNav = () => {
    return (
        <nav className="headerNav">
            <div className="message"><p>WE SHIP WORLDWIDE</p></div>
            <div className="links">
                <Link to="/">
                    <Badge>
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Badge>
                </Link>
                <PersonIcon />
            </div>
        </nav>
    );
};
