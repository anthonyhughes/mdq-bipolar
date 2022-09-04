import {Typography} from "@mui/material";

function QuestionSubtitle({subtitle}) {
    return (
        <Typography variant="body2" color="text.secondary">
            {subtitle}
        </Typography>
    );
}

export default QuestionSubtitle;
