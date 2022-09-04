import './App.css';
import {createContext, useContext, useState} from "react";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";
import AllQuestionAnswersContext from "./contexts/AllQuestionAnswersContext"

function App() {
    const [allQuestionAnswers, setAllQuestionAnswers] = useState({});

    return (
        <AllQuestionAnswersContext.Provider value={{allQuestionAnswers, setAllQuestionAnswers}}>
            <Questionnaire/>
        </AllQuestionAnswersContext.Provider>
    )
}

export default App;
