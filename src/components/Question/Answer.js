import {Card, CardContent} from "@mui/material";

function Answer({answer, handleAnswerClick, questionId, answerId, allQuestionAnswers}) {
    const isPreviouslyAnswered = questionId in allQuestionAnswers;
    const selectedCSSClass = isPreviouslyAnswered && allQuestionAnswers[questionId] === answerId ?
        "AnswerCardContent-selected" :
        "AnswerCardContent"
    return (
        <Card
            onClick={(event) => handleAnswerClick(questionId, answerId)}
            className={"AnswerCard"}>
            <CardContent className={selectedCSSClass}>
                {answer}
            </CardContent>
        </Card>
    );
}

export default Answer;
