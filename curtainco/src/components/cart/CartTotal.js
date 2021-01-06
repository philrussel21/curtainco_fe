import React from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

function CartTotal({ total, handleCheckout }) {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container justify="center" alignItems="center">
                <Grid item xs container justify="center">
                    <Typography variant="h5" component="h5">
                        Subtotal
                    </Typography>
                </Grid>
                <Grid item xs container justify="center">
                    <Typography variant="h4" component="h4">
                        ${total.toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center">
                <Grid item xs container justify="center">
                    <Link to="/products" className="link">
                        <Button variant="outlined" color="primary" size="large">
                            Continue Shopping
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs container justify="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCheckout}
                        size="large"
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CartTotal
