import './App.css';
import GenInfo from './components/GenInfo'
import Education from './components/Education'
import Employment from './components/Employment'
import { React, Component } from "react";
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super()

    this.state = {
      Gen: {
        editMode: true,
        userName: '',
        userEmail: '',
        userPhone: ''
      },
      Edu: {
        editMode: true,
        schoolName: '',
        schoolLocation: '',
        degreeName: '',
        gradYear: ''
      },
      Emp: {
        job: {
          companyName: '',
          positionTitle: '',
          task: { text: '', id: uniqid() },
          tasks: [],
          startDate: '',
          endDate: '',
          id: uniqid(),
        },
        jobs: [],
        editMode: true
      }

    }
  }

  // Employment functions here

  handleEmpSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        editMode: !this.state.Emp.editMode,
        job: {
          companyName: '',
          positionTitle: '',
          task: { text: '', id: uniqid() },
          tasks: [],
          startDate: '',
          endDate: '',
          id: uniqid()
        },
        jobs: this.state.Emp.jobs
      }
    })
  }

  handleJobSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        editMode: this.state.Emp.editMode,
        jobs: this.state.Emp.jobs.concat(this.state.Emp.job),
        job: {
          companyName: '',
          positionTitle: '',
          task: { text: '', id: uniqid() },
          tasks: [],
          startDate: '',
          endDate: '',
          id: uniqid()
        }
      }
    })
  }

  handleEndDateChange = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        job: {
          companyName: this.state.Emp.job.companyName,
          positionTitle: this.state.Emp.job.positionTitle,
          task: { text: this.state.Emp.job.task.text, id: this.state.Emp.job.task.id},
          tasks: this.state.Emp.job.tasks,
          startDate: this.state.Emp.job.startDate,
          endDate: e.target.value,
          id: this.state.Emp.job.id
        },
        jobs: this.state.Emp.jobs,
        editMode: this.state.Emp.editMode
      }
    })
  }

  handleStartDateChange = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        job: {
          companyName: this.state.Emp.job.companyName,
          positionTitle: this.state.Emp.job.positionTitle,
          task: { text: this.state.Emp.job.task.text, id: this.state.Emp.job.task.id},
          tasks: this.state.Emp.job.tasks,
          startDate: e.target.value,
          endDate: this.state.Emp.job.endDate,
          id: this.state.Emp.job.id
        },
        jobs: this.state.Emp.jobs,
        editMode: this.state.Emp.editMode
      }
    })
  }

  handleTaskSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        job: {
          companyName: this.state.Emp.job.companyName,
          positionTitle: this.state.Emp.job.positionTitle,
          tasks: this.state.Emp.job.tasks.concat(this.state.Emp.job.task),
          task: { text: '', id: uniqid() },
          startDate: this.state.Emp.job.startDate,
          endDate: e.target.value,
          id: this.state.Emp.job.id
        },
        jobs: this.state.Emp.jobs,
        editMode: this.state.Emp.editMode
      }
    })
  }

  handleTaskChange = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        job: {
          companyName: this.state.Emp.job.companyName,
          positionTitle: this.state.Emp.job.positionTitle,
          task: { text: e.target.value, id: this.state.Emp.job.task.id},
          tasks: this.state.Emp.job.tasks,
          startDate: this.state.Emp.job.startDate,
          endDate: this.state.Emp.job.endDate,
          id: this.state.Emp.job.id
        },
        jobs: this.state.Emp.jobs,
        editMode: this.state.Emp.editMode
      }
    })
  }

  handlePositionTitle = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        job: {
          companyName: this.state.Emp.job.companyName,
          positionTitle: e.target.value,
          task: { text: this.state.Emp.job.task.text, id: this.state.Emp.job.task.id},
          tasks: this.state.Emp.job.tasks,
          startDate: this.state.Emp.job.startDate,
          endDate: this.state.Emp.job.endDate,
          id: this.state.Emp.job.id
        },
        jobs: this.state.Emp.jobs,
        editMode: this.state.Emp.editMode
      }
    })
  }

  handleCompanyNameChange = (e) => {
    e.preventDefault();
    this.setState({
      Emp: {
        job: {
          companyName: e.target.value,
          positionTitle: this.state.Emp.job.positionTitle,
          task: { text: this.state.Emp.job.task.text, id: this.state.Emp.job.task.id},
          tasks: this.state.Emp.job.tasks,
          startDate: this.state.Emp.job.startDate,
          endDate: this.state.Emp.job.endDate,
          id: this.state.Emp.job.id
        },
        jobs: this.state.Emp.jobs,
        editMode: this.state.Emp.editMode
      }
    })
  }


  // Edu functions here
  handleSchoolNameChange = (e) => {
    e.preventDefault();
    this.setState({
      Edu: {
        editMode: this.state.Edu.editMode,
        schoolName: e.target.value,
        schoolLocation: this.state.Edu.schoolLocation,
        degreeName: this.state.Edu.degreeName,
        gradYear: this.state.Edu.gradYear
      }
    })
  }

  handleSchoolLocationChange = (e) => {
    e.preventDefault();
    this.setState({
      Edu: {
        editMode: this.state.Edu.editMode,
        schoolName: this.state.Edu.schoolName,
        schoolLocation: e.target.value,
        degreeName: this.state.Edu.degreeName,
        gradYear: this.state.Edu.gradYear
      }
    })
  }

  handleDegreeChange = (e) => {
    e.preventDefault();
    this.setState({
      Edu: {
        editMode: this.state.Edu.editMode,
        schoolName: this.state.Edu.schoolName,
        schoolLocation: this.state.Edu.schoolLocation,
        degreeName: e.target.value,
        gradYear: this.state.Edu.gradYear
      }
    })
  }

  handleGradYearChange = (e) => {
    e.preventDefault();
    this.setState({
      Edu: {
        editMode: this.state.Edu.editMode,
        schoolName: this.state.Edu.schoolName,
        schoolLocation: this.state.Edu.schoolLocation,
        degreeName: this.state.Edu.degreeName,
        gradYear: e.target.value
      }
    })
  }

  handleEducationSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Edu: {
        editMode: !this.state.Edu.editMode,
        schoolName: this.state.Edu.schoolName,
        schoolLocation: this.state.Edu.schoolLocation,
        degreeName: this.state.Edu.degreeName,
        gradYear: this.state.Edu.gradYear
      }
    })
  }

  // General Info functions here
  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({
      Gen: { 
        editMode: this.state.Gen.editMode,
        userName: e.target.value,
        userEmail: this.state.Gen.userEmail,
        userPhone: this.state.Gen.userPhone
      }
    })
  }

  handleEmailChange = (e) => {
    e.preventDefault();
    this.setState({
      Gen: {
        editMode: this.state.Gen.editMode,
        userName: this.state.Gen.userName,
        userEmail: e.target.value,
        userPhone: this.state.Gen.userPhone
      }
    })
  }

  handlePhoneChange = (e) => {
    e.preventDefault();

    this.setState({
      Gen: {
        editMode: this.state.Gen.editMode,
        userName: this.state.Gen.userName,
        userEmail: this.state.Gen.userEmail,
        userPhone: e.target.value 
      }
    })
  }

  

  handleGenSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Gen: { 
        editMode: !this.state.Gen.editMode,
        userName: this.state.Gen.userName,
        userEmail: this.state.Gen.userEmail,
        userPhone: this.state.Gen.userPhone
       }
    })
  }


  render() {

    return (
      <div className="App">

        <GenInfo 
        currentGenInfo={this.state.Gen} 
        handleNameChange={this.handleNameChange} 
        handleEmailChange={this.handleEmailChange}
        handlePhoneChange={this.handlePhoneChange}
        handleGenSubmit={this.handleGenSubmit}
         />

         <Education
         currentEduInfo={this.state.Edu}
         handleSchoolNameChange={this.handleSchoolNameChange}
         handleSchoolLocationChange={this.handleSchoolLocationChange}
         handleDegreeChange={this.handleDegreeChange}
         handleGradYearChange={this.handleGradYearChange}
         handleEducationSubmit={this.handleEducationSubmit}        
         />

         <Employment
         currentEmpInfo={this.state.Emp}
         handleEmpSubmit={this.handleEmpSubmit}          
         handleJobSubmit={this.handleJobSubmit}
         handleEndDateChange={this.handleEndDateChange}
         handleStartDateChange={this.handleStartDateChange}
         handleTaskSubmit={this.handleTaskSubmit}
         handleTaskChange={this.handleTaskChange}
         handlePositionTitle={this.handlePositionTitle}
         handleCompanyNameChange={this.handleCompanyNameChange}
         />

      </div>
    );
  }
}

export default App;