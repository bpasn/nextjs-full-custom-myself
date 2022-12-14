import { FormControl, TextField } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

export type FromLable = {
    lable: string;
    type: HTMLInputTypeAttribute,
    name: string
}
export function ItemFrom({ lable, type, name }: FromLable): JSX.Element {
    return <FormControl sx={{
        width: "100%",
    }}>
        <TextField fullWidth label={lable} type={type} id="fullWidth" name={name} />
    </FormControl>;
}