import Answer from "./Answer";

function Answers({answers, handleAnswerClick, questionId}) {
    return (
        <div className={"Answers"}> {
            answers.map((answer, index) => {
                return (
                    <Answer
                        key={index}
                        answerId={index}
                        questionId={questionId}
                        answer={answer}
                        handleAnswerClick={handleAnswerClick}
                    />
                )
            })}
        </div>
    );
}

export default Answers;
