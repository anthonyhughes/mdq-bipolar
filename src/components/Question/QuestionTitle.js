import {Typography} from "@mui/material";

function QuestionTitle({title}) {
    return (
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
    );
}

export default QuestionTitle;
