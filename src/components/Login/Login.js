import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { IconButton, Button } from "@mui/material";
import React from "react";
import './Login.css'

export default function Login() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className="block">
                    <TextField id="outlined-basic" label="Username" variant="outlined"></TextField>
                </div>
                <div className="block">
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div className="block">
                    <Button variant="contained">Login</Button>
                </div>
            </div>
        </>
    );
}