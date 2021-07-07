import React from 'react';
import ishopLogo from '../../images/nab-logo.png'
import DropDown from '../Header/DropDown/DropDown'
import './Footer.css'

const languages = [
    "English",
    "Bengali",
    "Spanish",
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
  const currency = ["$ - USD", "৳ - BDT", "₹ - INR", "£ - GBP", "€ - EUR", "¥ - JPY"];
  const footerLinks = [
    {
      title: "Get to Know Us",
      list: ["About ishop", "Connect with Us", "ishop Cares", "Gift a Smile"],
    },
    {
      title: "Make Money with Us",
      list: [
        "Sell products on ishop",
        "Sell apps on ishop",
        "Become an Affiliate",
        "Advertise Your Products",
        "Self-Publish with Us",
        "Host an ishop Hub",
        "› See More",
      ],
    },
    {
      title: "ishop Payment",
      list: [
        "ishop Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "ishop Currency Converter",
      ],
    },
    {
      title: "Let Us Help You",
      list: [
        "ishop and COVID-19",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Devices",
        "ishop Assistant",
      ],
    },
  ];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerInner">
                <div className="footerLinks">
                {footerLinks.map((link) => (
                    <div className="footerRow">
                    <h6>{link.title}</h6>
                    <ul>
                        {link.list.map((item) => (
                        <li>{item}</li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
                <div className="footerBottom">
                    <img src={ishopLogo} alt="logo"  className='footerLogo'/>
                    <span className="footerCopy">
                        &copy; 2021 | developed by {" "}
                        <a href="http://sahinur.netlify.app/">Sahinur Islam</a>
                    </span>
                    <span className="footerDropDownSpan">
                        <DropDown
                            className='footerDropDown footerLangDropDown'
                            items={languages}
                            defaultItem={languages[0]}
                        />
                        <DropDown
                            className='footerDropDown footerCurrDropDown'
                            items={currency}
                            defaultItem={currency[0]}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;