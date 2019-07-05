import React from 'react';

function Footer() {
    return (
        <div style={style}>
            <h6>
                Beam® is a registered trademark of Southern Telecom, Inc.
            </h6>
        </div>
    )
}

const style = {
    position: "relative", 
    left: 0, 
    bottom: 0, 
    width: "100%", 
    marginTop:"3%", 
    textAlign: "center"
}

export default Footer;

/*
position: "relative", left: 0, bottom: 0, width: "100%", marginTop:"3%", textAlign: "center"
*/