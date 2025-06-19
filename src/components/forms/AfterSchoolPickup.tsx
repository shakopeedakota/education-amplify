import { useAppState } from "@/lib/formState"
import { useFieldArray, useForm } from "react-hook-form";
import { Button, Checkbox, Form, Field, Input } from "../ui/Forms";
import { PlusCircle, X } from "lucide-react";
import { Textbox } from "../ui/Forms/Textbox";
import { Child } from "@/models/Child";
import { Application } from "@/models/Application";

const fieldArrayName = 'afterSchoolPickup';

export const AfterSchoolPickup = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Application>({ defaultValues: state , mode: 'onSubmit' });

  const {
    fields: authorizedDriversFields,
    append: authorizedDriversAppend,
    remove: authorizedDriversRemove,
  } = useFieldArray({
    control,
    name: `${fieldArrayName}.authorizedDrivers`,
    rules: {
      maxLength: 4,
    },
  });

  const {
    fields: unauthorizedDriversFields,
    append: unauthorizedDriversAppend,
    remove: unauthorizedDriversRemove,
  } = useFieldArray({
    name: `${fieldArrayName}.unauthorizedDrivers`,
    control,
    rules: {
      maxLength: 2,
    },
  });

  const saveData = (data: any) => {
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    delete state.nextOverride;
    setState({ ...state, ...data });
    setForm({ form: nextOverride != '' ? nextOverride : 'medicationAdministration' });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Education Department After School Program Drop-off and Pick-up Authorization</h2>
                <p>I understand that by completing this form, I am authorizing the person or people named below to drop-off and/or pick-up my child from the Education Department.</p>
                <p>This form can be modified in the future to add or remove names provided the parent/guardian gives this information at least 30 minutes before pickup.</p>
              </div>
            </div>
            <div className="form-row">
              <Field error={errors?.[fieldArrayName]?.pickupLateNotice}>
                <Checkbox
                  {...register(`${fieldArrayName}.pickupLateNotice`, { required: 'This field is required' })}
                  label="I understand that the program closes at 5pm every day, and that my child must either be picked-up, or leave in their own car by that time. Consistently pickup up a child late will result in the need for a discussion with the Director of Education to determine appropriate next steps."
                />
              </Field>
            </div>
          </div>
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <label className="font-bold">Authorized Drivers</label>
                <p className="leading-none">
                  Please add any additional drivers you would like to authorize to pick up your children.<br/>
                  <small className="italic">Note: The primary, secondary, and emergency contacts are already authorized drivers.</small>
                </p>
              </div>
            </div>
            {authorizedDriversFields.map((field, index) => (
              <div key={index} className="form-row">
                <Field label="Name" error={errors?.[fieldArrayName]?.authorizedDrivers?.[index]?.name} className="w-2/3">
                  <Input
                    {...register(`${fieldArrayName}.authorizedDrivers.${index}.name`, { required: 'Name is required' })}
                    type="text"
                    required
                  />
                </Field>
                <Field label="Phone" error={errors?.[fieldArrayName]?.authorizedDrivers?.[index]?.phone} className="w-1/3">
                  <Input
                    {...register(`${fieldArrayName}.authorizedDrivers.${index}.phone`, { required: 'Phone is required' })}
                    type="tel"
                    required
                  />
                </Field>
                <div className="form-control self-end">
                  <button type="button" onClick={() => authorizedDriversRemove(index)} title="Remove Authorized Driver"><X /></button>
                </div>
                {errors?.[fieldArrayName]?.authorizedDrivers?.root?.message}
              </div>
            ))}
            {authorizedDriversFields.length < 4 && (
              <div className="form-row">
                <div className="form-control text-center">
                  <Button type="button" onClick={() => authorizedDriversAppend({name: '', phone: ''})}>
                    <span className="flex items-center">
                      <PlusCircle size="12px" className="mr-4" />
                      Add Authorized Driver
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <label>Please select your child(ren) who are authorized to drive their own vehicle and can leave for the day on their own.</label>
                {state?.children?.map((child: Child, index: number) => (
                  <Checkbox
                    key={index}
                    {...register(`${fieldArrayName}.studentDrivers.${index}`)}
                    label={`${child.firstName} ${child.lastName}`}
                    value={`${child.firstName} ${child.lastName}`}
                  />
                ))}
              </div>
            </div>
            <div className="form-row">
              <div className="form-control">
                <label>Please select your child(ren) who are authorized to leave with another SMSC child who drives their own vehicle. Please ensure that person is named as and Authorized Driver above.</label>
                {state?.children?.map((child: Child, index: number) => (
                  <Checkbox
                    key={index}
                    {...register(`${fieldArrayName}.leaveWithAnotherStudent.${index}`)}
                    label={`${child.firstName} ${child.lastName}`}
                    value={`${child.firstName} ${child.lastName}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <label className="font-bold">Unauthorized Drivers</label>
                <p>Please list the name(s) and description(s) of any individuals unauthorized to pickup your child.</p>
              </div>
            </div>
            {unauthorizedDriversFields.map((field, index) => (
              <UnauthorizedDriversForm
                key={field.id}
                errors={errors}
                register={register}
                remove={unauthorizedDriversRemove}
                index={index}
              />
            ))}
            {unauthorizedDriversFields.length < 2 && (
              <div className="form-row">
                <div className="form-control text-center">
                  <Button type="button" onClick={() => unauthorizedDriversAppend({name: '', description: ''})}>
                    <span className="flex items-center">
                      <PlusCircle size="12px" className="mr-4" />
                      Add Unauthorized Driver
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="form-row">
            <Button type="button" onClick={() => setForm({ form: 'sst' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
            <Button className="ml-auto btn-primary btn-thin">Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}

export const UnauthorizedDriversForm = ({ errors, register, remove, index }: {
  errors: any;
  register: CallableFunction;
  remove: CallableFunction;
  index: number;
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="form-row">
        <Field label="Name" error={errors?.[fieldArrayName]?.unauthorizedPickup?.[index].name} className="w-full">
          <Input
            {...register(`${fieldArrayName}.unauthorizedPickup.${index}.name`, { required: 'Please enter a name' })}
            type="text"
            required
          />
        </Field>
        <div className="form-control self-end">
          <button type="button" onClick={() => remove(index)} title="Remove Authorized Driver"><X /></button>
        </div>
      </div>
      <div className="form-row">
        <Field label="Description" error={errors?.[fieldArrayName]?.unauthorizedPickup?.[index].description} className="w-full">
          <Textbox
            {...register(`${fieldArrayName}.unauthorizedPickup.${index}.description`, { required: 'Please enter a description' })}
            required
          />
        </Field>
      </div>
    </div>
  );
}