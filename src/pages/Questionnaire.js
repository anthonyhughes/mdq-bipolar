import '../App.css';
import Question from "../components/Question";
import {useContext, useRef, useState} from "react";
import {Questions} from "../resources/Questions";
import ProgressSlider from "../components/ProgressSlider";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AllQuestionAnswersContext from "../contexts/AllQuestionAnswersContext"
import Results from "./Results";
import {calculateSpectrum} from "../utils/SpectrumUtils";

function Questionnaire() {
    const containerRef = useRef(null);
    const {allQuestionAnswers, setAllQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [slide, setSlide] = useState(true);
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

    const question = Questions.filter((question, index) => index + 1 === currentQuestion)[0]
    const {countOfNoAnswers} = calculateSpectrum(allQuestionAnswers)

    return (Object.keys(allQuestionAnswers).length === Questions.length ||
        (Object.keys(allQuestionAnswers).length === 13 && countOfNoAnswers > 7) ?
            <Results setCurrentQuestion={setCurrentQuestion}/> :
            <div className="App">
                <div className="App-body">
                    <div className="App-body-container">
                        <div className="App-body-questions">
                            <ArrowBackIosIcon
                                onClick={handleBackArrowClick}
                                sx={{
                                    fontSize: 50,
                                    color: (currentQuestion === 1)
                                        ? "#455b6e"
                                        : "#0690e6",
                                    flexWrap: 'wrap',
                                    paddingLeft: '10px'
                                }}
                            />
                            {slide && <Question
                                title={question.title}
                                subtitle={question.subtitle}
                                question={question.question}
                                answers={'answers' in question ? question.answers : question.ynAnswers}
                                questionId={question.id}
                                handleAnswerClick={handleAnswerClick}
                                slide
                                ref={containerRef}
                                containerRef={containerRef}
                            />}
                            <ArrowForwardIosIcon
                                onClick={handleForwardArrowClick}
                                sx={{
                                    fontSize: 50,
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
