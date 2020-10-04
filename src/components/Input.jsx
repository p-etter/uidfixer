import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    label: {
        "&$focusedLabel": {
          color: "#b1dae7"
        },
        "&$erroredLabel": {
          color: "orange"
        }
      },
      focusedLabel: {},
      input: {
        color: "#b1dae7",
      },
      header: {
          color: "#b1dae7",
      },
      output: {
        color: "#b1dae7",
    },
      textField: {
        color: 'white',
        width: '400px',
    },
  }));
  
  
const Input = ({
    handleChange,
}) => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h1 className={classes.header}>Gimme UUID!</h1>
                </Grid>
                <Grid item xs={12}>
                <TextField
                            label="UUID"
                            id="margin-none"
                            className={classes.textField}
                            onChange={handleChange}
                            InputLabelProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}                        
                        />
                </Grid>
            </Grid>

        </>
    )
}
export default Input;