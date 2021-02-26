import React from "react";

const Footer = () => {
    const footerLinks = [
        { name: "GENERAL ENQUIRY", email: "customerservice@gdl.com.ng" },
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
                    <h3>8am - 4pm : Phone calls</h3>
                    <h3>4pm - 6pm : Whatsapp </h3>
            </div>
        </div>
    );
};

export default Footer;
