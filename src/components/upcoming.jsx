import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { newRequest } from '../redux/actions'
// import { useState } from 'react'

const Upcoming = ({ info }) => {
    console.log(info)

    const [addRequest, setAddRequest] = useState('NO REQUEST MADE') 

     useEffect(() => {
         
        if(info.length>0) {
            const requestAdd = info.map((newInfo, index) => {
                const { email, request, date } = newInfo;
                return (
                    <li key={`date-index`}>
                        <span>{date}</span> 
                        <span>{request}</span>
                        <span>{email}</span>
                    </li>
                )
                    
            });
            setAddRequest(requestAdd)
            }
     }, [])


        return (
        <div className='viewIt'>
            THESE ARE REVIEWS IN THE PIPELINE
            <li>SOME MOVIE</li>
            <li>SOME MOVIE</li>
            <h1>HERE ARE YOUR REQUESTS!</h1>
            <h3 className='movReq'>{addRequest}</h3>
        </div>
    );

}

const mapStatetoProps = state => ({
    info: state.request.info
})

export default connect(mapStatetoProps)(Upcoming)