import '../App.css';

function Indicators({setCurrentQuestion, setAllQuestionAnswers, setDisplayAnswers, countOfYesAnswers}) {

    const handleRetake = () => {
        setCurrentQuestion(1)
        setAllQuestionAnswers({})
        setDisplayAnswers(false)
    }


    return (
        <div>
            <div className="App">
                <div className={"App-indicators"}>
                    <h1>
                        This is how your results were assessed
                    </h1>
                    <p>
                        If you answered positively to 7 or more of the first 13 questions,
                        you would have been asked some more questions. Your answers to these questions determine whether
                        or not further medical assessment for bipolar is warranted.
                    </p>
                    <h1>
                        Your results
                    </h1>
                    <p className={"App-body-slider-text"}>
                        Out of the first 13 questions: {countOfYesAnswers}.
                    </p>
                    <p
                        className={"App-retake-text"}
                        onClick={(event) => handleRetake()}>
                        Take the Mood Disorder Questionnaire again
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Indicators;
