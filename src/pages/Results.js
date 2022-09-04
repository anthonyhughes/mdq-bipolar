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

function Results() {
    const {allQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const resultCount = sum(allQuestionAnswers)
    const spectrumSelection = spectrum.filter((level) => (
        resultCount >= level.thresholdScore[0] && resultCount <= level.thresholdScore[1])
    )[0]

    return (
        <div>
            <div className="App">
                <header className="App-results-header">
                    <p>
                        Mood Questionnaire Results
                    </p>
                    <div className={"App-results-subtitle"}>
                        The questions are based on an evidence-based screening tool but are indicative only and do not
                        form a formal diagnosis
                    </div>
                </header>
            </div>
            <div className={"App-results"}>
                <div className={"App-results-body-title"}>
                    These results indicate that...
                </div>
                <div className={"App-results-body-subtitle"}>
                    {spectrumSelection.subtitle}
                </div>
                <div className="App-body-slider">
                    <ProgressSlider value={1} min={1} max={44}/>
                    <div className="App-results-spectrum-text">
                        <div className={"App-body-slider-text"}>
                            Bipolar unlikely
                            (0 - 15)
                        </div>
                        <div className={"App-body-slider-text"}>
                            Possible bipolar / depression
                            (16 - 24)
                        </div>
                        <div className={"App-body-slider-text"}>
                            Likely bipolar / depression
                            (25 - 48)
                        </div>
                    </div>
                    <div>
                        {spectrumSelection.answer}
                    </div>
                    <div onClick={(event) => console.log(event)}>
                        Take the test again
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;
