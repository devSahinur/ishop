import React from 'react';
import "./Categories.css";


const categories = [
    "electronics",
    "jewellery",
    "men's clothing",
    "women's clothing",
    "appliances",
    "toys",
    "prime video",
    "movies & TV",
    "music",
    "software",
  ];

const Categories = () => {
    return (
        <div className='categories'>
            <span
                className='category active'
                // onClick={(e) => SecurityPolicyViolationEvent(e, 'all')}
            >
                All Product
            </span>
            {
                categories.map((category) =>(
                    <span
                        className='category'
                        // onClick={(e) => setActive(e, category)}
                    >
                        {category}
                    </span>
                ))
            }
            
        </div>
    );
};

export default Categories;