import Header from '../../components/javascript/Header'
import { Link } from 'react-router-dom'
import '../css/CreateDebate.css'

const CreateDebate = () => {
  return (
    <div className="createDebatePageContainer">
      <div className="layoutContainer">
        <Header variant="create-debate" />
        <div className="createDebateContentWrapper">
          <div className="createDebateContentContainer">
            <div className="createDebateHeaderSection">
              <p className="createDebateTitle">Simulated Debate Setup</p>
            </div>
            <div className="createDebateFormField">
              <label className="createDebateFormLabel">
                <p className="createDebateFormLabelText">Philosopher 1</p>
                <select className="createDebateSelect">
                  <option value="one">Select Philosopher</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="createDebateFormField">
              <label className="createDebateFormLabel">
                <p className="createDebateFormLabelText">Philosopher 2</p>
                <select className="createDebateSelect">
                  <option value="one">Select Philosopher</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="createDebateFormField">
              <label className="createDebateFormLabel">
                <p className="createDebateFormLabelText">Debate Topic</p>
                <input
                  placeholder="Enter Debate Topic"
                  className="createDebateInput"
                  value=""
                />
              </label>
            </div>
            <div className="createDebateFormField">
              <label className="createDebateFormLabel">
                <p className="createDebateFormLabelText">Debate Question</p>
                <textarea
                  placeholder="Enter Debate Question"
                  className="createDebateTextarea"
                ></textarea>
              </label>
            </div>
            <div className="createDebateSubmitSection">
              <Link to="/debate">
                <button className="createDebateSubmitButton">
                  <span className="createDebateSubmitButtonText">Start Debate</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateDebate
