import './App.css';
import {useState} from "react";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";

function App() {
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState(false)

    return questionnaireCompleted ? (<Results/>) : (<Questionnaire/>);
}

export default App;
