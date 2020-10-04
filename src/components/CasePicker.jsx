import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const CasePicker = ({
    upperCase,
    handleChange,
}) => {
    return (
        <FormControl component="fieldset">
          <RadioGroup aria-label="position" name="position" value={upperCase} onChange={handleChange} row>
          <FormControlLabel
              value={false}
              control={<Radio color="primary" />}
              label="Lower case"
              labelPlacement="start"
            />
            <FormControlLabel
              value={true}
              control={<Radio color="primary" />}
              label="Upper case"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
    );
}
export default CasePicker;