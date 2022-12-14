import { Grid, ToggleButtonGroup } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { ToggleButton } from '@mui/material';
import { ItemFrom } from '../utils/FormElement';

type Props = {}

const SignUpComponent = (props: Props) => {
    return <Box>
        <form action="">
            <Grid container rowSpacing={1} style={{
            }}>
                <Grid item md={12} xs={12}>
                    <ItemFrom type="email" lable="Email" name="email" />
                </Grid>
                <Grid item md={12} xs={12}>
                    <ItemFrom type="text" lable="Username" name="username"  />
                </Grid>
                <Grid item md={12} xs={12}>
                    <ItemFrom type="password" lable="Password" name="password"  />
                </Grid>
                <Grid item md={12} xs={12}>
                    <ItemFrom type="password" lable="Confirm Password"name="confirm_passowrd"  />
                </Grid>
            </Grid>
            <Box mt={2} textAlign="center">
                <Button size="large" variant="contained">Sign Up</Button>
            </Box>
        </form>

    </Box>
}
export default SignUpComponent