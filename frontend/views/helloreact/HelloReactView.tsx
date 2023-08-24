import { Button } from '@hilla/react-components/Button.js';
import { ComboBox } from '@hilla/react-components/ComboBox.js';
import { DatePicker } from '@hilla/react-components/DatePicker.js';
import { NumberField } from '@hilla/react-components/NumberField.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useBinder } from '@hilla/react-form';
import { FormEndpoint } from 'Frontend/generated/endpoints';
import EntityModel from 'Frontend/generated/com/example/application/endpoints/helloreact/FormEndpoint/EntityModel';
import { useEffect } from 'react';
import { Notification } from '@hilla/react-components/Notification.js';

const comboBoxItems = ['foo', 'bar'];

export default function FormView() {
  const { model, submit, field, read } = useBinder(EntityModel, {
    onSubmit: async (e) => {
      await FormEndpoint.sendEntity(e);
      Notification.show(`Submitted: ${JSON.stringify(e)}`);
    }
  });

  useEffect(() => {
    FormEndpoint.getEntity().then(read);
  }, []);

  return (
    <>
      <section className="flex p-m gap-m items-baseline flex-wrap">
        <TextField label="Name" {...field(model.name)}></TextField>
        <ComboBox label="Choose" {...field(model.choice)} items={comboBoxItems}></ComboBox>
        <NumberField label="Number" {...field(model.number)}></NumberField>
        <DatePicker label="Date" {...field(model.date)}></DatePicker>
      </section>
      <section className="flex p-m gap-m items-baseline">
        <Button onClick={submit}>submit</Button>
      </section>
    </>
  );
}
