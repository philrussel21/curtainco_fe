import React from 'react'

import { useCurtainContext } from '../../../config/CurtainCoContext'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useStyles from './UserDashboardStyles'


function ProfileInformation() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()
    let user = {
        email: 'null',
        address: 'null',
        phone: 'null',
        companyName: 'null',
    }
    
    if (state.currentUser) { 
        user = state.currentUser 
        user.address = `${user.address1}, ${user.suburb}, ${user.state}, ${user.postcode}`
    }

    function handleEdit() {
        alert('to build this feature')
    }

    return (
        <Container>

            <Typography variant="h5" className={classes.heading}>
                { user.fullName }
            </Typography>

            <Grid container direction="column">
                <Grid item>{ user.email }</Grid>
                <Grid item>{ user.address }</Grid>
                <Grid item>{ user.phone }</Grid>
                <Grid item>{ user.companyName }</Grid>
            </Grid>
            <Button variant="outlined" color="primary" onClick={handleEdit}>Edit Information</Button>
        </Container>
    )
}

export default ProfileInformation
