import '../App.css';
import {spectrum} from "../resources/Spectrum";
import {useContext, useState} from "react";
import AllQuestionAnswersContext from "../contexts/AllQuestionAnswersContext";
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import {Button} from "@mui/material";
import Indicators from "./Indicators";
import {calculateSpectrum} from "../utils/SpectrumUtils";

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

function Results({setCurrentQuestion}) {
    const {allQuestionAnswers, setAllQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const {spectrumResult, countOfYesAnswers} = calculateSpectrum(allQuestionAnswers)
    const spectrumSelection = spectrum[spectrumResult]
    const [displayAnswers, setDisplayAnswers] = useState(false);

    return (displayAnswers ?
            <Indicators
                setCurrentQuestion={setCurrentQuestion}
                setAllQuestionAnswers={setAllQuestionAnswers}
                setDisplayAnswers={setDisplayAnswers}
                countOfYesAnswers={countOfYesAnswers}
            /> :
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
                        <div className={"App-results-spectrum-answer"}>
                            <p>
                                {spectrumSelection.answer}
                            </p>
                        </div>
                        <Button
                            // variant={"outlined"}
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: '#F5821CFF' }}
                            size={"large"}
                            onClick={() => {
                                setDisplayAnswers(true);
                            }}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
    )
}

export default Results;
