import { Typography } from '@material-ui/core';
import React from 'react';

function Story() {
    return (
        <div>
            <div>
                <Typography variant="h3" component="h3">
                    Our Story
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam hic non temporibus ipsa ex consectetur libero
                    doloremque maiores quidem consequuntur nemo delectus eum quo
                    sed error, quod distinctio nihil inventore.
                </p>
            </div>
            <div>
                <img
                    src="https://source.unsplash.com/random/300x300"
                    alt="Image to reflect story"
                />
            </div>
        </div>
    );
}

export default Story;