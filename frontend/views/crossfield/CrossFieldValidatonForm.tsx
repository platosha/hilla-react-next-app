import { AbstractModel, Validator } from "@hilla/form";
import { Button } from "@hilla/react-components/Button.js";
import { Notification } from "@hilla/react-components/Notification.js";
import {
  TextField,
  TextFieldElement,
} from "@hilla/react-components/TextField.js";
import { FieldDirectiveResult, useBinder } from "@hilla/react-form";
import Person from "Frontend/generated/com/example/application/endpoints/helloreact/Person";
import PersonModel from "Frontend/generated/com/example/application/endpoints/helloreact/PersonModel";
import { useEffect, useRef } from "react";

export default function CrossFieldValidationForm() {
  const binder = useBinder(PersonModel);
  useEffect(() => {
    const validator: Validator<Person> = {
      message:
        "The emails do not match. Please check that it is written correctly in both fields.",
      validate: (value: Person) => {
        if (value.email !== value.otherEmail) {
          // Always mark the second field as invalid even though the first might be wrong
          return [{ property: binder.model.otherEmail }];
        }
        return true;
      },
    };
    binder.setValidators([...binder.validators, validator]);
  }, []);

  return (
    <div className="p-m">
      <section>
        <h2 className="mt-xl">Model validation (two values in bean)</h2>
        <div className="flex gap-m items-baseline">
          <TextField label="Your email" {...binder.field(binder.model.email)} />
          <TextField label="Your email again" {...binder.field(binder.model.otherEmail)} />
          <Button
            onClick={async () => {
              Notification.show(JSON.stringify(binder.value));
            }}
          >
            Say hello
          </Button>
        </div>
      </section>
    </div>
  );
}