import {Card, CardContent} from "@mui/material";
import {useContext} from "react";
import AllQuestionAnswersContext from "../../contexts/AllQuestionAnswersContext";

function Answer({answer, handleAnswerClick, questionId, answerId}) {
    const {allQuestionAnswers, setAllQuestionAnswers} = useContext(AllQuestionAnswersContext)
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
