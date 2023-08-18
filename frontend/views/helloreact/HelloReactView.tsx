import { Button } from '@hilla/react-components/Button.js';
import { ComboBox } from '@hilla/react-components/ComboBox.js';
import { DatePicker } from '@hilla/react-components/DatePicker.js';
import { NumberField } from '@hilla/react-components/NumberField.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { FieldDirectiveResult, useBinder } from '@hilla/react-form';
import { FormEndpoint } from 'Frontend/generated/endpoints';
import EntityModel from 'Frontend/generated/com/example/application/endpoints/helloreact/FormEndpoint/EntityModel';
import { useState } from 'react';
import { AbstractModel } from '@hilla/form';

const comboBoxItems = ['foo', 'bar'];

export default function FormView() {
  const [ name, setName ] = useState('');

  const { model, submit, field: originalField } = useBinder(EntityModel, { onSubmit: FormEndpoint.sendEntity });
  const field = originalField as <M extends AbstractModel<any>>(model: M) => FieldDirectiveResult;

  return (
    <>
      <section className="flex p-m gap-m items-baseline">
        <TextField label="Name" {...field(model.name)}></TextField>
        <ComboBox label="Choose" {...field(model.choice)} items={comboBoxItems}></ComboBox>
        <NumberField label="Number" {...field(model.number)}></NumberField>
        <DatePicker label="Date" {...field(model.date)}></DatePicker>
        <Button onClick={submit}>submit</Button>
      </section>
    </>
  );
}
