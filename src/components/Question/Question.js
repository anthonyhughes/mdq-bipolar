import QuestionTitle from "./QuestionTitle";
import QuestionSubtitle from "./QuestionSubtitle";
import Answers from "./Answers";
import {Box, Card, CardContent} from "@mui/material";
import QuestionText from "./QuestionText";

function Question({title, subtitle, answers, handleAnswerClick, questionId, question}) {
    return (
        <div className="Question">
            <Box sx={{boxShadow: 5}}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <QuestionTitle title={title}/>
                        <QuestionSubtitle subtitle={subtitle}/>
                        <QuestionText question={question}/>
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
