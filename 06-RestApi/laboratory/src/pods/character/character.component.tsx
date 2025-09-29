import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { formValidation } from './character.validation';
import * as classes from './character.styles';
import { CharacterEntityVm } from './character.vm';

interface Props {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled />
          <TextFieldComponent name="status" label="Status" disabled />
          <TextFieldComponent name="species" label="Species" disabled />
          <TextFieldComponent name="location.name" label="Location" disabled />
          <TextFieldComponent name="origin.name" label="Origin" disabled />
          <TextFieldComponent
            name="bestSentence"
            label="Best Sentence"
            focused
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
