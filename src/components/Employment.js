import { React, Component } from "react";

const Employment = ({
    currentEmpInfo,
    handleEmpSubmit,     
    handleJobSubmit,
    handleEndDateChange,
    handleStartDateChange,
    handleTaskSubmit,
    handleTaskChange,
    handlePositionTitle,
    handleCompanyNameChange
    
}) => {
    if (currentEmpInfo.editMode === true) {

        if (currentEmpInfo.jobs.length > 0) {
            return (
                <div className="container">
                    <h2>Employment</h2>

                    {currentEmpInfo.jobs.map((job) => {
                        return (
                            <div key={job.id}>
                                <hr></hr>
                                <h4>{job.companyName}</h4>
                                <h4>{job.positionTitle} from {job.startDate} to {job.endDate}</h4>
                                {job.tasks.map((task) => {
                                    return (
                                        <p key={task.id}> - {task.text}</p>
                                    )
                                })}
                                
                                <hr></hr>

                            </div>
                        )
                    })}
                    
                    <form>
                        <hr></hr>
                        <label htmlFor="companyName">Company Name: </label>
                        <input id="companyName" type="text" onChange={handleCompanyNameChange} value={currentEmpInfo.job.companyName}></input>
                        <br></br>

                        <label htmlFor="positionTitle">Position Title: </label>
                        <input id="positionTitle" type="text" onChange={handlePositionTitle} value={currentEmpInfo.job.positionTitle}></input>
                        <br></br>

                        <label htmlFor="startDate">Job Start Date: </label>
                        <input id="startDate" type="text" onChange={handleStartDateChange} value={currentEmpInfo.job.startDate}></input>
                        <br></br>

                        <label htmlFor="endDate">End Date (or present / current): </label>
                        <input id="endDate" type="text" onChange={handleEndDateChange} value={currentEmpInfo.job.endDate}></input>
                        <br></br>

                        <label htmlFor="task">Tasks and Duties: </label>
                        <input id="task" type="text" onChange={handleTaskChange} value={currentEmpInfo.job.task.text}></input>
                        <button onClick={handleTaskSubmit}>Submit Task / Duty</button>
                        <br></br>
                       
                        {currentEmpInfo.job.tasks.map((task) => {
                        return (
                            <p key={task.id}> - {task.text}</p>
                        )
                    })}

                        <button onClick={handleJobSubmit}>Submit Job</button>
                        <br></br>
                        <hr></hr>

                        <button onClick={handleEmpSubmit}>Submit Employment History</button>

                    </form>

                </div>
            )
        } else if (currentEmpInfo.job.tasks.length > 0) {
            return (
                <div className="container">
                    <form>
                        <label htmlFor="companyName">Company Name: </label>
                        <input id="companyName" type="text" onChange={handleCompanyNameChange} value={currentEmpInfo.job.companyName}></input>
                        <br></br>

                        <label htmlFor="positionTitle">Position Title: </label>
                        <input id="positionTitle" type="text" onChange={handlePositionTitle} value={currentEmpInfo.job.positionTitle}></input>
                        <br></br>

                        <label htmlFor="startDate">Job Start Date: </label>
                        <input id="startDate" type="text" onChange={handleStartDateChange} value={currentEmpInfo.job.startDate}></input>
                        <br></br>

                        <label htmlFor="endDate">End Date (or present / current): </label>
                        <input id="endDate" type="text" onChange={handleEndDateChange} value={currentEmpInfo.job.endDate}></input>
                        <br></br>

                        <label htmlFor="task">Tasks and Duties: </label>
                        <input id="task" type="text" onChange={handleTaskChange} value={currentEmpInfo.job.task.text}></input>
                        <button onClick={handleTaskSubmit}>Submit Task / Duty</button>
                        <br></br>

                            {currentEmpInfo.job.tasks.map((task) => {
                                return (
                                    <p key={task.id}> - {task.text}</p>
                                )
                            })}

                        <button onClick={handleJobSubmit}>Submit Job</button>
                            <br></br>
                            <hr></hr>

                        <button onClick={handleEmpSubmit}>Submit Employment History</button>

                    </form>
                </div>
            )
        } else if (currentEmpInfo.job.tasks.length === 0) {
            return (
                <div className="container">
                    <form>
                        <label htmlFor="companyName">Company Name: </label>
                        <input id="companyName" type="text" onChange={handleCompanyNameChange} value={currentEmpInfo.job.companyName}></input>
                        <br></br>

                        <label htmlFor="positionTitle">Position Title: </label>
                        <input id="positionTitle" type="text" onChange={handlePositionTitle} value={currentEmpInfo.job.positionTitle}></input>
                        <br></br>

                        <label htmlFor="startDate">Job Start Date: </label>
                        <input id="startDate" type="text" onChange={handleStartDateChange} value={currentEmpInfo.job.startDate}></input>
                        <br></br>

                        <label htmlFor="endDate">End Date (or present / current): </label>
                        <input id="endDate" type="text" onChange={handleEndDateChange} value={currentEmpInfo.job.endDate}></input>
                        <br></br>

                        <label htmlFor="task">Tasks and Duties: </label>
                        <input id="task" type="text" onChange={handleTaskChange} value={currentEmpInfo.job.task.text}></input>
                        <button onClick={handleTaskSubmit}>Submit Task / Duty</button>
                        <br></br>

                        <button onClick={handleJobSubmit}>Submit Job</button>
                            <br></br>
                            <hr></hr>

                        <button onClick={handleEmpSubmit}>Submit Employment History</button>

                    </form>
                </div>
            )

        }
    } else {
       
        return (
            <div className="container">
                <h2>Employment</h2>
                {currentEmpInfo.jobs.map((job) => {
                    return (
                        <div key={job.id}>
                            <h4>{job.companyName}</h4>
                            <h4>{job.positionTitle} from {job.startDate} to {job.endDate}</h4>
                            {job.tasks.map((task) => {
                                return (
                                    <p key={task.id}>{task.text}</p>
                                )
                            })}
                        </div>
                    )
                })}
                
            </div>
        )
    }
    
}


  export default Employment;

