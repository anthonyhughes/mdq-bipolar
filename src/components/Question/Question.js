import QuestionTitle from "./QuestionTitle";
import QuestionSubtitle from "./QuestionSubtitle";
import Answers from "./Answers";
import {Card, CardContent} from "@mui/material";

function Question({title, subtitle, answers, handleAnswerClick, questionId, allQuestionAnswers}) {
    return (
        <div className="Question">
            <Card variant="outlined">
                <CardContent>
                    <QuestionTitle title={title}/>
                    <QuestionSubtitle subtitle={subtitle}/>
                    <Answers
                        answers={answers}
                        handleAnswerClick={handleAnswerClick}
                        questionId={questionId}
                        allQuestionAnswers={allQuestionAnswers}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default Question;
