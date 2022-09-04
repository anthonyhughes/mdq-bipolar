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
            <Results /> :
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
                                onClick={handleBackArrowClick}
                                sx={{
                                    fontSize: 60,
                                    color: (currentQuestion === 1)
                                        ? "#455b6e"
                                        : "#0690e6"
                                }}
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
                                onClick={handleForwardArrowClick}
                                sx={{
                                    fontSize: 60,
                                    color: (userCanMoveForward)
                                        ? "#0690e6"
                                        : "#455b6e"
                                }}
                            />
                        </div>
                        <div className="App-body-slider">
                            <ProgressSlider value={currentQuestion}/>
                            <div className={"App-body-slider-text"}>
                                Question {currentQuestion} of 11
                            </div>
                        </div>
                        <div className={"App-body-blurb"}>
                            When answering the above statements think about whether they have usually applied to you across much of your adult life - if the symptoms you are experiencing are new to you it could be indicative of certain types of Bipolar or it could be a result of something else.
                        </div>
                        <br/>
                        <div className={"App-body-blurb"}>
                            This test assumes that you have already had at least one episode of depression in your life, and will give an indication as to whether you are experiencing the most common symptoms of Bipolar disorder. It cannot replace a full assessment nor should be used to self diagnose or decide upon a treatment plan.
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Questionnaire;
