import React, { useState } from "react";

import { Typography, Grid, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function AddAccessory() {
    const [automated, setAutomated] = useState();
    const [accessory, setAccessory] = useState({
        category: "Accessory",
        name: "",
        colour: "",
        imgUrl: "",
        price: "",
        length: "",
        automated: automated,
        tieBack: "",
        other: "",
    });

    const handleRadioChange = (event) => {
        setAutomated(event.target.value === "auto" ? true : false);
    };

    const handleTextChange = (event) => {
        setAccessory({ ...accessory, [event.target.name]: event.target.value });
    };

    const handleAccessorySubmit = () => {};

    return (
        <>
            <Typography variant="h6">Add Accessory</Typography>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField
                        id="track-input"
                        label="Accessory Name"
                        variant="outlined"
                        onChange={handleTextChange}
                        name="name"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="track-type-input"
                        label="Accessory Colour"
                        variant="outlined"
                        onChange={handleTextChange}
                        name="colour"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="track-color-input"
                        label="Accessory Length"
                        variant="outlined"
                        onChange={handleTextChange}
                        name="length"
                    />
                </Grid>
                <Grid item>
                    <RadioGroup
                        aria-label="single-double-input"
                        name="single-double-input"
                        onChange={handleRadioChange}
                        row
                    >
                        <FormControlLabel
                            value="auto"
                            control={<Radio />}
                            label="Automated"
                        />
                        <FormControlLabel
                            value="not-auto"
                            control={<Radio />}
                            label="Not Automated"
                        />
                    </RadioGroup>
                </Grid>
                <Grid item>
                    <TextField
                        id="finial-style-input"
                        label="Tie Back"
                        variant="outlined"
                        onChange={handleTextChange}
                        name="tieBack"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="finial-color-input"
                        label="Accessories"
                        variant="outlined"
                        onChange={handleTextChange}
                        name="other"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="price-input"
                        label="Price"
                        variant="outlined"
                        type="number"
                        onChange={handleTextChange}
                        name="price"
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAccessorySubmit}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default AddAccessory;
