import '../App.css';
import {spectrum} from "../resources/Spectrum";
import {useContext} from "react";
import AllQuestionAnswersContext from "../contexts/AllQuestionAnswersContext";
import ProgressSlider from "../components/ProgressSlider";

const sum = (allQuestionAnswers) => {
    let final = 0;
    Object.values(allQuestionAnswers).forEach((res) => final += res);
    return final;
}

function Results({setCurrentQuestion}) {
    const {allQuestionAnswers, setAllQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const resultCount = sum(allQuestionAnswers)
    const spectrumSelection = spectrum.filter((level) => (
        resultCount >= level.thresholdScore[0] && resultCount <= level.thresholdScore[1])
    )[0]

    const handleRetake = () => {
        setCurrentQuestion(1)
        setAllQuestionAnswers({})
    }

    return (
        <div>
            <div className="App">
                <header className="App-results-header">
                    <p>
                        mood questionnaire results
                        <div className={"App-results-subtitle"}>
                            The questions are based on an evidence-based screening tool but are indicative only and do not
                            form a formal diagnosis
                        </div>
                    </p>
                </header>
                <div className={"App-results"}>
                    <div className={"App-results-body-subtitle"}>
                        these results indicate that...
                    </div>
                    <h1 className={"App-results-body-title"}>
                        {spectrumSelection.subtitle}
                    </h1>
                    <div className="App-body-slider">
                        <ProgressSlider value={resultCount} min={0} max={44}/>
                        <div className="App-results-spectrum-text">
                            <div className={"App-body-slider-text"}>
                                Bipolar unlikely
                                (0 - 15)
                            </div>
                            <div className="appVr" />
                            <div className={"App-body-slider-text"}>
                                Possible bipolar / depression
                                (16 - 24)
                            </div>
                            <div className="appVr" />
                            <div className={"App-body-slider-text"}>
                                Likely bipolar / depression
                                (25 - 44)
                            </div>
                        </div>
                        <p className={"App-results-spectrum-answer"}>
                            {spectrumSelection.answer}
                        </p>
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
