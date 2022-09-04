import '../App.css';
import Question from "../components/Question";
import {useContext, useState} from "react";
import {Questions} from "../resources/Questions";
import ProgressSlider from "../components/ProgressSlider";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AllQuestionAnswersContext from "../contexts/AllQuestionAnswersContext"
import Results from "./Results";

function Questionnaire() {
    const {allQuestionAnswers, setAllQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const userCanMoveForward = (currentQuestion in allQuestionAnswers)

    const handleAnswerClick = (questionId, answerId) => {
        allQuestionAnswers[currentQuestion] = answerId;
        setAllQuestionAnswers(allQuestionAnswers);
        setCurrentQuestion(currentQuestion + 1);
    }

    const handleBackArrowClick = (data) => {
        if (currentQuestion === 1) return;
        setCurrentQuestion(currentQuestion - 1)
    }

    const handleForwardArrowClick = (data) => {
        if (!userCanMoveForward) return;
        setCurrentQuestion(currentQuestion + 1)
    }

    return (Object.keys(allQuestionAnswers).length === 11 ?
            <Results allQuestionAnswers={allQuestionAnswers}/> :
            <div className="App">
                <header className="App-header">
                    <p>
                        take our quick bipolar test
                    </p>
                </header>
                <div className="App-body">
                    <div className="App-body-title"/>
                    <div className="App-body-container">
                        <div className="App-body-questions">
                            <ArrowBackIosIcon
                                color={(currentQuestion === 1) ? "disabled" : "primary"}
                                onClick={handleBackArrowClick}
                                sx={{fontSize: 60}}
                            />
                            {Questions
                                .filter((question, index) => index + 1 === currentQuestion)
                                .map((question, index) => {
                                    return (
                                        <Question
                                            key={index}
                                            title={question.title}
                                            subtitle={question.subtitle}
                                            answers={question.answers}
                                            questionId={question.id}
                                            handleAnswerClick={handleAnswerClick}
                                        />
                                    )
                                })}
                            <ArrowForwardIosIcon
                                color={userCanMoveForward
                                    ? "primary"
                                    : "disabled"}
                                onClick={handleForwardArrowClick}
                                sx={{fontSize: 60}}
                            />
                        </div>
                        <div className="App-body-slider">
                            <ProgressSlider value={currentQuestion}/>
                            <div className={"App-body-slider-text"}>
                                Question {currentQuestion} of 11
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Questionnaire;
