import '../App.css';
import {spectrum} from "../resources/Spectrum";
import {useContext} from "react";
import AllQuestionAnswersContext from "../contexts/AllQuestionAnswersContext";
import ProgressSlider from "../components/ProgressSlider";

const calculateSpectrum = (allQuestionAnswers) => {
    console.log(allQuestionAnswers)
    const countOfYesAnswers = Object.values(allQuestionAnswers).splice(0, 13).filter((answer) => answer === 0).length;
    const countOfNoAnswers = Object.values(allQuestionAnswers).splice(0, 13).filter((answer) => answer === 1).length;
    console.log('yes', countOfYesAnswers)
    console.log('no', countOfNoAnswers)
    const periodAnswer = allQuestionAnswers[14];
    const severityAnswer = allQuestionAnswers[15];
    const familyAnswer = allQuestionAnswers[16];
    const previousDiagnosisAnswer = allQuestionAnswers[17];
    console.log(countOfYesAnswers, periodAnswer, severityAnswer, familyAnswer, previousDiagnosisAnswer)
    if (countOfYesAnswers >= 7 && periodAnswer === 0 && severityAnswer >= 2) {
        return {
            spectrumResult: 1, // possible
            countOfYesAnswers
        }
    } else {
        return {
            spectrumResult: 0, // possible
            countOfYesAnswers
        }
    }
}

function Results({setCurrentQuestion}) {
    const {allQuestionAnswers, setAllQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const {spectrumResult, countOfYesAnswers} = calculateSpectrum(allQuestionAnswers)
    const spectrumSelection = spectrum[spectrumResult]
    console.log(spectrumSelection)

    const handleRetake = () => {
        setCurrentQuestion(1)
        setAllQuestionAnswers({})
    }

    return (
        <div>
            <div className="App">
                <div className={"App-results"}>
                    <p>
                        these results indicate that...
                    </p>
                    <h1>
                        {spectrumSelection.subtitle}
                    </h1>
                    <div className="App-body-slider">
                        <ProgressSlider value={countOfYesAnswers} min={0} max={18}/>
                        <div className="App-results-spectrum-text">
                            <div className="appVr"/>
                            <p className={"App-body-slider-text"}>
                                above is a count of your selected indicators that may contribute towards the bipolar spectrum
                            </p>
                            <div className="appVr"/>
                        </div>
                        <div className={"App-results-spectrum-answer"}>
                            <p>
                                {spectrumSelection.answer}
                            </p>
                        </div>
                        <p
                            className={"App-retake-text"}
                            onClick={(event) => handleRetake()}>
                            Take the test again
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;
