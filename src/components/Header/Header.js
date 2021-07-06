import React from 'react';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { motion } from "framer-motion";
import { useHistory, useLocation } from "react-router-dom";
import DropDown from './DropDown/DropDown';
import ishopLogo from '../../images/nab-logo.png'
import './Header.css'

const languages = [
    "English",
    "Bengali",
    "French",
    "German",
    "Italian",
    "Tamil",
    "Hindi",
    "Chinese",
    "Russian",
    "Japanese",
    "Arabic",
  ];

const Header = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div className='header'>
            <div className="headerNav">
                {
                    location.pathname !== '/' && (
                        <button 
                            onClick={() => history.goBack()}
                            className='headerBack' >Back
                        </button>
                    )
                }
                <div className="headerSearch">
                    <SearchRoundedIcon className='headerSearchIcon' />
                    <input
                        type='text'
                        placeholder='Search...'
                    />
                </div>
                <DropDown
                    className='headerLangDropDown'
                    items={languages}
                    defaultItem={languages[0]}
                />
                <img src={ishopLogo} alt="ishop Logo" className='headerLogo' />
            </div>
        </div>
    );
};

export default Header;