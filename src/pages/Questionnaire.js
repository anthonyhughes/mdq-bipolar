import '../App.css';
import Question from "../components/Question";
import {useState} from "react";
import {Questions} from "../resources/Questions";
import ProgressSlider from "../components/ProgressSlider";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Questionnaire() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [allQuestionAnswers, setAllQuestionAnswers] = useState({});

    const handleAnswerClick = (questionId, answerId) => {
        allQuestionAnswers[currentQuestion] = answerId
        setAllQuestionAnswers(allQuestionAnswers)
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleBackArrowClick = (data) => {
        if(currentQuestion === 1) return;
        setCurrentQuestion(currentQuestion - 1)
    }

    const handleForwardArrowClick = (data) => {
        if(currentQuestion <= 11) return;
        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Mood disorder questionnaire - bipolar UK
                </p>
            </header>
            <div className="App-body">
                <div className="App-body-title">
                    Take our quick bipolar test
                </div>
                <div className="App-body-container">
                    <div className="App-body-questions">
                        <ArrowBackIosIcon
                            color={(currentQuestion === 1) ? "disabled" : "primary"}
                            onClick={handleBackArrowClick}
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
                                        allQuestionAnswers={allQuestionAnswers}
                                    />
                                )
                            })}
                        <ArrowForwardIosIcon
                            color={(currentQuestion <= 11) ? "disabled" : "primary"}
                            onClick={handleForwardArrowClick}
                        />
                    </div>
                    <div className="App-body-slider">
                        <ProgressSlider value={currentQuestion}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questionnaire;
