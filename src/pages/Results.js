import '../App.css';
import {spectrum} from "../resources/Spectrum";
import {useContext} from "react";
import AllQuestionAnswersContext from "../contexts/AllQuestionAnswersContext";
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

const ICON_THEME = {
    fontSize: 120,
    flexWrap: 'wrap',
    paddingBottom: '2%',
    animation: "fadeIn 3s linear",
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        },
    },
}

const generateTheme = (colour = "#F5821CFF") => {
    return {
        color: colour,
        ...ICON_THEME
    }
}

const calculateSpectrum = (allQuestionAnswers) => {
    const countOfYesAnswers = Object.values(allQuestionAnswers).splice(0, 13).filter((answer) => answer === 0).length;
    // const countOfNoAnswers = Object.values(allQuestionAnswers).splice(0, 13).filter((answer) => answer === 1).length;
    const periodAnswer = allQuestionAnswers[14];
    const severityAnswer = allQuestionAnswers[15];
    // const familyAnswer = allQuestionAnswers[16];
    // const previousDiagnosisAnswer = allQuestionAnswers[17];
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
                        Thank you for completing the Mood Disorder Questionnaire
                    </p>
                    <h1>
                        {spectrumSelection.subtitle}
                    </h1>
                    <div className="App-body-slider">
                        {spectrumResult === 0 ?
                            <CancelIcon
                                sx={
                                    generateTheme()
                                }
                            />
                            :
                            <VerifiedIcon
                                sx={
                                    generateTheme()
                                }
                            />
                        }
                        <div className={"appHr"}/>
                        <p className={"App-body-slider-text"}>
                            You selected {countOfYesAnswers} indicator(s) that may contribute towards the bipolar
                            spectrum
                        </p>
                        <div className={"App-results-spectrum-answer"}>
                            <p>
                                {spectrumSelection.answer}
                            </p>
                        </div>
                        <p
                            className={"App-retake-text"}
                            onClick={(event) => handleRetake()}>
                            Take the Mood Disorder Questionnaire again
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;
