import React from 'react';
import { motion } from "framer-motion";
import TextTruncate from "react-text-truncate";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import { useHistory } from "react-router-dom";
import defaultImage from "../../images/default.jpg";
import './Product.css'

const Product = ({ product, id }) => {
    const { discount, price, category, originalPrice, rating, imgUrl, name} = product;
    console.log(product)
    return (
        <motion.div
            className='product'
            initial="initial"
            animate="in"
            exit="out"
            // variants={pageZoom}
            // transition={pageTransition}
            layout
            // onClick={() => history.push(`/product/${id}`, { product: item })}
        >
            <motion.div layoutId={id} className='productImage' >
                {discount && <span className='banner'>Offer!</span>}
                <img src={imgUrl} alt="img" />
            </motion.div>
            <div className="productDetails">
                <span className="productCategory">{category}</span>
                <TextTruncate 
                    line={3}
                    element='h6'
                    containerClassName='productName'
                    truncateText="…"
                    text={name}
                />
                <div className="productFooter">
                    <p className="productPrice">
                        <b>${price}</b>{' '}
                        {discount && (
                            <small>
                                <del>${originalPrice}</del>
                            </small>
                        )}
                    </p>
                    <div className="productRating">
                        <StarRateRoundedIcon  style={{ color:'#f90' }} />
                        {rating}
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Product;