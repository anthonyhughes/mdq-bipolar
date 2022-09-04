import {Box, Card, CardContent} from "@mui/material";
import {useContext} from "react";
import AllQuestionAnswersContext from "../../contexts/AllQuestionAnswersContext";

function Answer({answer, handleAnswerClick, questionId, answerId}) {
    const {allQuestionAnswers} = useContext(AllQuestionAnswersContext)
    const isPreviouslyAnswered = questionId in allQuestionAnswers;
    const selectedCSSClass = isPreviouslyAnswered && allQuestionAnswers[questionId] === answerId ?
        "AnswerCardContent-selected" :
        "AnswerCardContent"
    return (
        <div className={"AnswerCard"}>
            <Box sx={{boxShadow: 5}}>
                <Card
                    onClick={(event) => handleAnswerClick(questionId, answerId)}>
                    <CardContent className={selectedCSSClass}>
                        {answer}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default Answer;
