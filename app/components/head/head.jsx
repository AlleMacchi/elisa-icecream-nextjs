import React from "react";

export default function Head(props){
    return(
        <React.Fragment>
            <title>{props.title}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="desription" content={props.content}/>
            <link rel="alternate" hreflang="en-au" href={props.href} />
        </React.Fragment>
    )
}