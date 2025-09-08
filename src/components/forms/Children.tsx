'use client';

import { useAppState } from "@/lib/formState";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, Button, Field, Input } from '@/components/ui/Forms';
import { AlertCircle, Pencil, PlusCircle, Trash2 } from 'lucide-react';
import { useState } from "react";
import { STATES_LIST } from "@/lib/utils";
import { Select } from "../ui/Forms/Select";
import { Application } from "@/models/Application";

const fieldArrayName = 'children';

export const Children = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const [ editIndex, setEditIndex ] = useState(-1);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const { fields, remove, append, update } = useFieldArray({
    control,
    name: "children",
    rules: { minLength: 1, maxLength: 5, required: 'Please add at least one (1) child.' },
  });

  const saveData = (data: any) => {
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    delete state.nextOverride;
    setState({ ...state, ...data });
    setForm({ form: nextOverride != '' ? nextOverride : 'roi' });
  };
  
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Child(ren)</h2>
                <p>Please add all your child(ren) that will be utilizing the Education Department and its services.</p>
              </div>
            </div>
          </div>
          {errors?.[fieldArrayName]?.root && (
            <div className="form-row">
              <div className="form-control">
                <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{errors?.[fieldArrayName]?.root?.message}</small>
              </div>
            </div>
          )}
          {fields.map((field: any, index: number) => (
            <div key={field.id} className="form-subsection shadow">
              <div className="form-subsection-header flex gap-2">
                <span className="mr-auto">{field.firstName ?? 'Child'} {field.lastName ?? `#${index + 1}`}</span>
                <button type="button"  className="inline-block btn-link" onClick={() => setEditIndex(index)}>
                  <Pencil size="16" />
                </button>
                <button onClick={() => remove(index)}>
                  <Trash2 size="16" color="red" />
                </button>
              </div>
              {editIndex == index && (
                <div className="form-subsection-body">
                  <ChildForm
                    update={update}
                    index={index}
                    value={field}
                    setEditIndex={setEditIndex}
                  />
                </div>
              )}
            </div>
          ))}
          {fields?.length < 5 && (
            <div className="form-row">
              <div className="form-control text-center">
                <Button
                  type="button"
                  onClick={() => {
                    append({});
                    setEditIndex(fields.length);
                  }}
                >
                  <span className="flex items-center">
                    <PlusCircle size="12px" className="mr-4" />
                    Add Child
                  </span>
                </Button>
              </div>
            </div>
          )}
          <div className="form-row">
            <Button type="button" onClick={() => setForm({ form: 'emergencyContacts' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
            <Button className="ml-auto btn-primary btn-thin" disabled={!isValid || fields?.length < 1}>Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}

export const ChildForm = ({ update, index, value, setEditIndex }: {
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
            id={'firstName'}
            type="text"
            required
          />
        </Field>
        <Field label="Last Name" error={errors?.lastName}>
          <Input
            {...register(`lastName`, { required: 'Last name is required' })}
            id={'lastName'}
            type="text"
            required
          />
        </Field>
      </div>
      <div className="form-row">
        <Field label="Birthdate" error={errors?.birthdate} className="w-1/3">
          <Input
            {...register(`birthdate`, { required: 'Birthdate is required' })}
            id={`birthdate`}
            type="date"
            required
          />
        </Field>
      </div>
      {/* <div className="form-row">
        <Field label="Email" error={errors?.email} className="w-2/3">
          <Input
            {...register(`email`)}
            id="email"
            type="email"
          />
        </Field>
        <Field label="Child's Phone" error={errors?.phone} className="w-1/3">
          <Input
            {...register(`phone`)}
            id="phone"
            type="tel"
          />
        </Field>
      </div> */}
      <div className="form-row">
        <Field label="Current School" error={errors?.currentSchool} className="">
          <Input
            {...register(`currentSchool`, { required: 'Current school is required' })}
            id="currentSchool"
            type="text"
            required
          />
        </Field>
      </div>
      <div className="form-row">
        <Field label="Current/Rising Grade" error={errors?.grade} className="w-3/5">
          <Input
            {...register(`grade`, { required: 'Grade level is required' })}
            id="grade"
            type="text"
            required
          />
        </Field>
      </div>
      <div className="form-row">
        <Field label="Address" error={errors?.address} className="w-3/5">
          <Input
            {...register(`address`, { required: 'Address is required' })}
            id="address"
            type="text"
            required
          />
        </Field>
        <Field label="Apt/Unit" error={errors?.address2} className="w-2/5">
          <Input
            {...register(`address2`)}
            id=""
            type="text"
          />
        </Field>
      </div>
      <div className="form-row">
        <Field label="City" error={errors?.city} className="w-1/3">
          <Input
            {...register(`city`, { required: 'City is required' })}
            id="city"
            type="text"
            required
          />
        </Field>
        <Field label="State" error={errors?.state} className="w-1/3">
          <Select {...register(`state`, { required: 'State is required' })} required>
            {Object.keys(STATES_LIST).map((state: any, index: number) => (
              <option key={index} value={state}>{STATES_LIST[state]}</option>
            ))}
          </Select>
        </Field>
        <Field label="Zip" error={errors?.zip} className="w-1/3">
          <Input
            {...register(`zip`, { required: 'Zip is required' })}
            id="zip"
            type="text"
            required
          />
        </Field>
      </div>
      <div className="form-row">
        <Button
            className="btn btn-thin btn-primary ml-auto"
            onClick={handleSubmit((data) => {
              update(index, data);
              setEditIndex(-1);
            })}
          >
            Save
            <span className="rightArrow"></span>
          </Button>
      </div>
    </>
  );
}