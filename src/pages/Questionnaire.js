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

    return (Object.keys(allQuestionAnswers).length === Questions.length ?
            <Results setCurrentQuestion={setCurrentQuestion}/> :
            <div className="App">
                <div className="App-body">
                    <div className="App-body-container">
                        <div className="App-body-questions">
                            <ArrowBackIosIcon
                                onClick={handleBackArrowClick}
                                sx={{
                                    fontSize: 60,
                                    color: (currentQuestion === 1)
                                        ? "#455b6e"
                                        : "#0690e6",
                                    flexWrap: 'wrap',
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
                                            question={question.question}
                                            answers={'answers' in question ? question.answers : question.ynAnswers}
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
                                        : "#455b6e",
                                    flexWrap: 'wrap'
                                }}
                            />
                        </div>
                        <div className="App-body-slider">
                            <ProgressSlider value={currentQuestion} max={Questions.length}/>
                            <p className={"App-body-slider-question"}>
                                question {currentQuestion} of {Questions.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Questionnaire;
