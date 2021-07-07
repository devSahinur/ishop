import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import './DropDown.css';


const DropDown = ({ className, items, defaultItem }) => {
    const [dropDown, setDropDown] = useState(false);
    const [selected, setSelected] = useState(defaultItem || 'Not Selected')


    return (
        <span
            className={`dripDown ${className} ${dropDown && 'dropDownOpen'} `}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropDown((dropDown) => !dropDown);
            }}
        >
            {selected} <KeyboardArrowDownRoundedIcon className='dropDownIcon'/>
            {dropDown && (
                <motion.ul
                    className='dropDownMenu'
                    initial={{ opacity: 0, y: "-10%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-10%" }}
                >
                    {items.map((item) => (
                        <li
                            onClick={(e) => {
                                setSelected(item);
                                setDropDown(false);
                                e.stopPropagation();
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </motion.ul>
            )}
        </span>
    );
};

export default DropDown;