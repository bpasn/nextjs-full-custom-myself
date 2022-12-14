import { ToggleButtonGroup } from '@mui/material'
import { Container } from '@mui/material'
import React, { FC } from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { ToggleButton } from '@mui/material';
import SignInComponent from '../components/SignInComponent';
import SignUpComponent from '../components/SignUpComponent';
type Props = {}
const AuthScreen: FC<Props> = (props: Props) => {
    const [alignment, setAlignment] = React.useState<string | null>('signin');
    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null,) => {
        setAlignment(newAlignment);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container >
                <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
                    <ToggleButtonGroup value={alignment} onChange={handleChange} exclusive sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                        <ToggleButton value="signin" aria-label="left aligned" >
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" >
                                Sign In
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="signup" aria-label="right aligned" >
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" >
                                Sign Up
                            </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {
                        // {/* Show form action */}
                        alignment === 'signin' ? <SignInComponent /> : <SignUpComponent />

                    }
                </Box>
            </Container >
        </Box >
    )
}
export default AuthScreen