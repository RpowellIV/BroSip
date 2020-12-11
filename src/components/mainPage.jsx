import React from 'react'
import Bros from "../media/BSATS.png"
// import { connect } from 'react-redux'
// import { useState } from 'react'

const MainPage = props => {
        return (
            <div className="mainPic" >
                Main page
                <p>
                    <img src={Bros} width='50%' alt="test"/>
                </p>
        </div>
    );

}

export default MainPage