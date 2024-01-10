import React from "react";
import Script from "next/script";

export default function Head(props){
    return(
        <React.Fragment>
            <title>{props.title}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content={props.content}/>
            <link rel="alternate" hreflang="en-au" href={props.href} />
            <Script src={props.srcScript} />
        </React.Fragment>
    )
}