import React from "react";

const Footer = () => {
    const footerLinks = [
        { name: "GENERAL ENQUIRY", email: "info@gdl.com.ng" },
        { name: "ASSET MANAGEMENT", email: "assetmanagement@gdl.com.ng" },
        { name: "FINANCE", email: "finance@gdl.com.ng" },
        { name: "SECURITIES TRADING", email: "securities@gdl.com.ng" },
        { name: "INVESTMENT RESEARCH", email: "research@gdl.com.ng" },
        { name: "CUSTOMER CARE", email: "customerservice@gdl.com.ng" },
    ];

    return (
        <div className="footer col d-flex flex-wrap">
            <div className="col-lg-3 col-md-6 col-sm-12 footer_headerText">
                <h3>LAGOS</h3>
                <p>
                    1, Afolabi Lesi Street, <br /> Ilupeju, Lagos
                </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 footer_headerText">
                <h3>EMAILS</h3>
                <div className="d-flex justify-content-between w-100 flex-wrap footer_emailsContainer">
                    {footerLinks.map((e) =>
                        <div key={e.name} className='col-lg-6 pl-0 footer_subheaderText'>
                            <h3>{e.name}</h3>
                            <a href={`mailto:${e.email}`}>
                                {e.email}
                            </a>
                        </div>)}

                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer_headerText">
                    <h3 className='footer_hederText'>Tel</h3>
                    <a href='tel:+234 (0) 705 443 5000'>+234 (0) 705 443 5000</a>
            </div>
        </div>
    );
};

export default Footer;
