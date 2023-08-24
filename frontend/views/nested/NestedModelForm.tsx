import { AbstractModel } from "@hilla/form";
import { Button } from "@hilla/react-components/Button.js";
import { Notification } from "@hilla/react-components/Notification.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { FieldDirectiveResult, useBinder, useBinderNode } from "@hilla/react-form";
import Address from "Frontend/generated/com/example/application/endpoints/helloreact/Address";
import AddressModel from "Frontend/generated/com/example/application/endpoints/helloreact/AddressModel";
import PersonModel from "Frontend/generated/com/example/application/endpoints/helloreact/PersonModel";

function AddressSubForm({model}: {model: AddressModel}) {
  const { field } = useBinderNode<Address, AddressModel>(model);

  return <fieldset className="flex p-m gap-m items-end flex-wrap">
    <legend>Address</legend>
    <TextField label="Street address" {...field(model.streetAddress)} />
    <TextField label="City" {...field(model.city)} />
    <TextField label="Country" {...field(model.country)} />
    <TextField label="Zip code" {...field(model.country)} />
  </fieldset>;
}

export default function NestedModelForm() {
  const { model, field, submit } = useBinder(PersonModel, {
    async onSubmit(value) {
      Notification.show(JSON.stringify(value));
    },
  });

  return (
    <>
      <section className="flex p-m gap-m items-end flex-wrap">
        <TextField label="Your name" {...field(model.name)} />
        <AddressSubForm model={model.address} />
        <Button onClick={submit}>
          Say hello
        </Button>
      </section>
    </>
  );
}