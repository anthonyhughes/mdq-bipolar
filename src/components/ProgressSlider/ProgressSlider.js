import {Slider} from "@mui/material";

function ProgressSlider({value}) {
    return (
        <Slider
            aria-label="Progress"
            defaultValue={0}
            valueLabelDisplay="on"
            step={1}
            min={1}
            max={11}
            value={value}
        />
    );
}

export default ProgressSlider;

