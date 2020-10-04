import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      lightBlue: {
          color: "#b1dae7",
      },
  }));

const Output = ({
    formattedText,
    toUpperCase
}) => {
    const classes = useStyles();
    const text = formattedText ? formattedText : '';
    const correctCasing = toUpperCase ? text.toUpperCase() : text.toLowerCase();
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <p className={classes.lightBlue}>{correctCasing}</p>
                </Grid>
            </Grid>
        </>
    )
}
export default Output;