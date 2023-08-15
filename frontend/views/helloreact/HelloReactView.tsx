import { Button } from '@hilla/react-components/Button.js';
import { ComboBox } from '@hilla/react-components/ComboBox.js';
import { DatePicker } from '@hilla/react-components/DatePicker.js';
import { NumberField } from '@hilla/react-components/NumberField.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useField, useBinder } from 'Frontend/form/binder.js';
import { FormEndpoint } from 'Frontend/generated/endpoints';
import EntityModel from 'Frontend/to-be-generated/com/example/application/endpoints/helloreact/FormEndpoint/EntityModel';
import { useState } from 'react';

const comboBoxItems = ['foo', 'bar'];

export default function FormView() {
  const [ name, setName ] = useState('');

  const { model, submit, } = useBinder(EntityModel, {onSubmit: FormEndpoint.sendEntity});
  const nameField = useField(model.name);
  const choiceField = useField(model.choice);
  const numberField = useField(model.number);
  const dateField = useField(model.date);

  return (
    <>
      <section className="flex p-m gap-m items-baseline">
        <TextField label="Name" {...nameField}></TextField>
        <ComboBox label="Choose" {...choiceField} items={comboBoxItems}></ComboBox>
        <NumberField label="Number" {...numberField}></NumberField>
        <DatePicker label="Date" {...dateField}></DatePicker>
        <Button onClick={submit}>submit</Button>
      </section>
    </>
  );
}
