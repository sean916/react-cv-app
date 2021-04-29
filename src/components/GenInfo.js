import React, { Component } from "react";

const GenInfo = ({ 
    currentGenInfo, 
    handleNameChange, 
    handleEmailChange, 
    handlePhoneChange, 
    handleGenSubmit 
}) => {

        if (currentGenInfo.editMode === true) {
            return (
                <form>
                    <hr></hr>
                    <label htmlFor="userName">Name: </label>
                    <input type='text' id='userName' onChange={handleNameChange} value={currentGenInfo.userName}></input>
                    <br></br>

                    <label htmlFor="userEmail">Email: </label>
                    <input type='email' id='userEmail' onChange={handleEmailChange} value={currentGenInfo.userEmail}></input>
                    <br></br>

                    <label htmlFor="userPhone">Phone Number: </label>
                    <input type='text' id='userPhone' onChange={handlePhoneChange} value={currentGenInfo.userPhone}></input>
                    <br></br>

                    <button onClick={handleGenSubmit}>Submit General Info</button>
                    <hr></hr>
                </form>
            )
        }

        if (currentGenInfo.editMode === false) {
            return (
                <div className='container'>
                    <hr></hr>
                    <h1>Resume for {currentGenInfo.userName}</h1>
                    <p>{currentGenInfo.userEmail}</p>
                    <p>{currentGenInfo.userPhone}</p>
                    <button onClick={handleGenSubmit}>Edit General Info</button>
                    <hr></hr>
                </div>
            )
        }
    
}

export default GenInfo