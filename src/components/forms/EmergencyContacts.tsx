'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { useAppState } from '@/lib/formState';
import { Form, Button, Field, Input } from '@/components/ui/Forms';
import { PlusCircle, Pencil, Trash2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Application } from '@/models/Application';

const fieldArrayName = "emergencyContacts";

export const EmergencyContacts = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const [ editIndex, setEditIndex ] = useState(-1);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const { fields, remove, append, update } = useFieldArray({
    rules: {
      minLength: 1,
      maxLength: 2,
      required: 'Please add at least one emergency contact.'
    },
    name: "emergencyContacts",
    control,
  });

  const saveData = (data: any) => {
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    delete state.nextOverride;
    setState({ ...state, ...data });
    setForm({ form: nextOverride != '' ? nextOverride : 'children' });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Emergency Contacts</h2>
                <p>These individuals will be contacted in the event the primary or secondary contacts are unavailable.</p>
              </div>
            </div>
          </div>
          {errors?.[fieldArrayName]?.root && (
            <div className="form-row">
              <div className="form-control"><small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{errors?.[fieldArrayName]?.root?.message}</small></div>
            </div>
          )}
          {fields.map((field: any, index: number) => (
            <div key={field.id} className="form-subsection shadow">
              <div className="form-subsection-header flex gap-2">
                <span className="mr-auto">{field.firstName ?? 'Emergency'} {field.lastName ?? `Contact #${index + 1}`}</span>
                <button type="button" className="inline-block btn-link" onClick={() => setEditIndex(index)}>
                  <Pencil size="16" />
                </button>
                <button onClick={() => remove(index)}>
                  <Trash2 size="16" color="red" />
                </button>
              </div>
              {editIndex == index && (
                <div className="form-subsection-body">
                  <EmergencyContactForm
                    update={update}
                    index={index}
                    value={field}
                    setEditIndex={setEditIndex}
                  />
                </div>
              )}
            </div>
          ))}
          {fields.length < 2 &&
            <div className="form-row">
              <div className="form-control text-center">
                <Button
                  type="button"
                  onClick={() => {
                    append({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                    });
                    setEditIndex(fields.length);
                  }}
                >
                  <span className="flex items-center">
                    <PlusCircle size="12px" className="mr-4" />
                    Add Emergency Contact
                  </span>
                </Button>
              </div>
            </div>
          }
          <div className="form-row">
            <Button type="button" onClick={() => setForm({ form: 'secondaryContact' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
            <Button className="ml-auto btn-primary btn-thin" disabled={!isValid || fields?.length < 1}>Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}

export const EmergencyContactForm = ({ update, index, value, setEditIndex }: {
  update: CallableFunction;
  index: number;
  value: any;
  setEditIndex: CallableFunction;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: value });

  return (
    <>
      <div className="form-row">
        <Field label="First Name" error={errors?.firstName}>
          <Input
            {...register(`firstName`, { required: 'First name is required' })}
            type="text"
            required
          />
        </Field>
        <Field label="Last Name" error={errors?.lastName}>
          <Input
            {...register(`lastName`, { required: 'Last name is required' })}
            type="text"
            required
          />
        </Field>
      </div>
      <div className="form-row">
        <Field label="Email" error={errors?.email} className="w-2/3">
          <Input
            {...register(`email`, { required: 'Email is required' })}
            type="email"
            required
          />
        </Field>
        <Field label="Phone" error={errors?.phone} className="w-1/3">
          <Input
            {...register(`phone`, { required: 'Phone is required' })}
            type="tel"
            required
          />
        </Field>
      </div>
      <div className="form-row">
        <Button
          className="ml-auto btn btn-thin btn-primary"
          onClick={handleSubmit((data) => {
            update(index, data);
            setEditIndex(-1);
          })}
        >
          Save<span className="rightArrow"></span>
        </Button>
      </div>
    </>
  );
}