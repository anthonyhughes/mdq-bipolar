import QuestionTitle from "./QuestionTitle";
import QuestionSubtitle from "./QuestionSubtitle";
import Answers from "./Answers";
import {Box, Card, CardContent} from "@mui/material";
import QuestionText from "./QuestionText";

function Question({title, subtitle, answers, handleAnswerClick, questionId, question}) {
    return (
        <div className="Question">
            <Box sx={{boxShadow: 5}}>
                <Card className={"Question-Card"} sx={{}}>
                    <CardContent>
                        <QuestionTitle title={title}/>
                        <div className={"Question-text-body"}>
                            <QuestionSubtitle subtitle={subtitle}/>
                            <QuestionText question={question}/>
                        </div>
                        <Answers
                            answers={answers}
                            handleAnswerClick={handleAnswerClick}
                            questionId={questionId}
                        />
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default Question;
