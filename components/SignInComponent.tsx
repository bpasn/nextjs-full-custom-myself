import { Grid } from '@mui/material'
import React, { DetailedHTMLProps, FC, FormEvent, FormHTMLAttributes, useState } from 'react'
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { ItemFrom } from '../utils/FormElement';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store'
import { signIn } from '../slices/Auth/authSlices';

type Props = {}
type User = {
    email: string;
    password: string
}

const SignInComponent: FC<Props> = (props: Props) => {
    const [_User, setUser] = useState<User | null>()
    const dispatch = useDispatch<AppDispatch>()
    const handleLogin = async (e: React.ChangeEvent<HTMLInputElement | any>) => {
        e.preventDefault()
        setUser({
            email: e.target.email.value,
            password: e.target.password.value
        })
        if (_User) {
            dispatch(signIn(_User))
        }
    }
    return <Box>
        <form onSubmit={handleLogin}>
            <Grid container rowSpacing={1} style={{
            }}>
                <Grid item md={12} xs={12}>
                    <ItemFrom type="email" lable="Email" name="email" />
                </Grid>
                <Grid item md={12} xs={12}>
                    <ItemFrom type="password" lable="Password" name="password" />
                </Grid>
            </Grid>
            <Box mt={2} textAlign="center">
                <Button size="large" variant="contained" type="submit" >Sign In</Button>
            </Box>
        </form>
    </Box>
}
export default SignInComponent