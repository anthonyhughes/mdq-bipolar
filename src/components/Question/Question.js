import QuestionTitle from "./QuestionTitle";
import QuestionSubtitle from "./QuestionSubtitle";
import Answers from "./Answers";
import {Box, Card, CardContent, Slide} from "@mui/material";
import QuestionText from "./QuestionText";

function Question({title, subtitle, answers, handleAnswerClick, questionId, question, slide, containerRef}) {
    return (
        <div className="Question">
            <Slide
                direction="left"
                in={slide}
                container={containerRef.current}
                mountOnEnter={true}
                unmountOnExit={true}
            >
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
            </Slide>
        </div>
    );
}

export default Question;
