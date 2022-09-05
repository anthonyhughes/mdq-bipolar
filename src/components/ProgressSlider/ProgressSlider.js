import {Slider} from "@mui/material";

function ProgressSlider({value, min = 1, max = 11}) {
    return (
        <Slider
            aria-label="Progress"
            defaultValue={0}
            valueLabelDisplay="on"
            step={1}
            min={min}
            max={max}
            value={value}
            sx={{
                color: '#0690e6',
            }}
        />
    );
}

export default ProgressSlider;

