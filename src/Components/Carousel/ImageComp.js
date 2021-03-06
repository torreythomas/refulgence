import React from 'react';


function ImgComp({ src }) {

    let imgStyles={
        width: 50+"%",
        height: "auto"
    }

    let centerStyle={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 50+"px",
        padding: 10+"px"
    }


    return(
        <div className="center-img" style={centerStyle}>
<img src={src} alt="slide-img" style={imgStyles}></img>
</div>
    ) 

}

export default ImgComp;