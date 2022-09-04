import QuestionTitle from "./QuestionTitle";
import QuestionSubtitle from "./QuestionSubtitle";
import Answers from "./Answers";
import {Box, Card, CardContent} from "@mui/material";

function Question({title, subtitle, answers, handleAnswerClick, questionId}) {
    return (
        <div className="Question">
            <Box sx={{boxShadow: 5}}>
                <Card>
                    <CardContent>
                        <QuestionTitle title={title}/>
                        <QuestionSubtitle subtitle={subtitle}/>
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
