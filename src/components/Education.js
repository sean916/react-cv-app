import { React, Component } from "react"

const Education = ({
    currentEduInfo,
    handleSchoolNameChange,
    handleSchoolLocationChange,
    handleDegreeChange,
    handleGradYearChange,
    handleEducationSubmit

}) => {

    if (currentEduInfo.editMode === true) {
        return (
            <form>
                <hr></hr>
                <label htmlFor='schoolName'>School / University Name: </label>
                <input type='text' id='schoolName' onChange={handleSchoolNameChange} value={currentEduInfo.schoolName}></input>
                <br></br>

                <label htmlFor='schoolLocation'>Location of the School: </label>
                <input type='text' id='schoolLocation' onChange={handleSchoolLocationChange} value={currentEduInfo.schoolLocation}></input>
                <br></br>

                <label htmlFor='degree'>Degree / Major: </label>
                <input type='text' id='degree' onChange={handleDegreeChange} value={currentEduInfo.degreeName}></input>
                <br></br>

                <label htmlFor='gradYear'>Year of Graduation: </label>
                <input type='text' id='gradYear' onChange={handleGradYearChange} value={currentEduInfo.gradYear}></input>
                <br></br>

                <button onClick={handleEducationSubmit}>Submit Education</button>
                <hr></hr>
            </form>
        )
    }

    if (currentEduInfo.editMode === false) {
        return (
            <div className='container'>
                <hr></hr>
                    <h1>Education</h1>
                    <h4>{currentEduInfo.schoolName}</h4>
                    <p>{currentEduInfo.schoolLocation}</p>
                    <p>{currentEduInfo.degreeName}</p>
                    <p>{currentEduInfo.gradYear}</p>
                    <button onClick={handleEducationSubmit}>Edit Education</button>
                <hr></hr>
            </div>            
        )
    }
}

export default Education
