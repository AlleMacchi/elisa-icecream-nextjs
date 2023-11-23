import React from "react";
import './diclaimer.css';
import Head from "../../app/components/head/head";

export default function Diclaimer(){
    return(
        
        <div className="Diclaimer-container">
            <Head
                title='Diclaimer'
                content="This website is operated by Elisa Gelato Pty Ltd"
                href="https://elisagelato.com.au/disclaimer" 
            />
        <h1 className="Diclaimer-title">Website use</h1>
        <p className="Diclaimer-p">This website is operated by Elisa Gelato Pty Ltd (Elisa Gelato). 
        By accessing our site, you agree to be bound by the following terms and conditions. 
        We are not responsible if information made available on this site is not accurate, complete or current. 
        The material on this site is provided for general information only and should not be relied upon. 
        Any reliance on the material on this site is at your own risk. We reserve the right to modify 
        the contents of this site at any time, but we have no obligation to update any information on our site.
        Elisa Gelato is the owner or licensee of all intellectual property rights in the trademarks, brands, 
        and logos identified on our website, all content, images, photographs, text, design, illustrations and 
        descriptions of the products, and in the design and layout of the Elisa Gelato site.  
        Except as permitted under the Copyright Act 1968 (Cth), use of any content of the Elisa Gelato site 
        is strictly prohibited without prior written consent of Elisa Gelato.</p>
        </div>
    )
}