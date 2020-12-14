import React from 'react'
import Bros from "../media/BSATS.png"
// import { connect } from 'react-redux'
// import { useState } from 'react'

const MainPage = props => {
        return (
            <div className="mainPic" >
                Main page,<br/>
                <img src={Bros} width='25%' alt="test"/>
            </div>
    );

}

export default MainPage