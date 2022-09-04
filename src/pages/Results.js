import '../App.css';

function Results({allQuestionAnswers}) {
    const sum = (results) => {
        let final = 0;
        results.forEach((res) => final += res);
        return final;
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Mood Questionnaire Results
                </p>
                <p>
                    The questions are based on an evidence-based screening tool but are indicative only and do not form
                    a formal diagnosis
                </p>
                <p>
                    You have scored {sum(Object.values(allQuestionAnswers))}
                </p>
            </header>

        </div>
    )
}

export default Results;
