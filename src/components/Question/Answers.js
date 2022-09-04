import Answer from "./Answer";

function Answers({answers, handleAnswerClick, questionId, allQuestionAnswers}) {
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
                        allQuestionAnswers={allQuestionAnswers}
                    />
                )
            })}
        </div>
    );
}

export default Answers;
