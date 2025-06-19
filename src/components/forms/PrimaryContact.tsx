'use client';

import { useForm } from 'react-hook-form';
import { useAppState } from "@/lib/formState";
import { Form, Input, Field, Button } from "@/components/ui/Forms";
import { STATES_LIST } from '@/lib/utils';
import { Select } from '../ui/Forms/Select';
import { Application } from '@/models/Application';

const fieldArrayName = 'primaryContact';

export const PrimaryContact = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<Application>({ defaultValues: state, mode: "onSubmit" });

  const saveData = (data: any) => {
    setState({ ...state, ...data });
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    setForm({ form: nextOverride != '' ? nextOverride : 'secondaryContact' });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Primary Contact</h2>
              </div>
            </div>
            <div className="form-row">
              <Field label="First Name" error={errors?.[fieldArrayName]?.firstName}>
                <Input
                  {...register(`${fieldArrayName}.firstName` as const, { required: 'First name is required'})}
                  id="first-name"
                  type="text"
                  required
                />
              </Field>
              <Field label="Last Name" error={errors?.[fieldArrayName]?.lastName}>
                <Input
                  {...register(`${fieldArrayName}.lastName` as const, { required: 'Last name is required' })}
                  id="last-name"
                  type="text"
                  required
                />
              </Field>
            </div>
            <div className="form-row">
              <Field label="Email" className="w-2/3" error={errors?.[fieldArrayName]?.email}>
                <Input
                  {...register(`${fieldArrayName}.email` as const, { required: 'Email is required'})}
                  id="email"
                  type="email"
                  required
                />
              </Field>
              <Field label="Phone" className="w-1/3" error={errors?.[fieldArrayName]?.phone}>
                <Input
                  {...register(`${fieldArrayName}.phone` as const, { required: 'Phone is required'})}
                  id="phone"
                  type="tel"
                  required
                />
              </Field>
            </div>
            <div className="form-row">
              <Field label="Address" error={errors?.[fieldArrayName]?.address} className="w-3/5">
                <Input
                  {...register(`${fieldArrayName}.address` as const, { required: 'Address is required'})}
                  id="address"
                  type="text"
                  required
                />
              </Field>
              <Field label="Apt/Unit" error={errors?.[fieldArrayName]?.address2} className="w-2/5">
                <Input
                  {...register(`${fieldArrayName}.address2` as const)}
                  id="address2"
                  type="text"
                />
              </Field>
            </div>
            <div className="form-row">
              <Field label="City" error={errors?.[fieldArrayName]?.city} className="w-1/3">
                <Input
                  {...register(`${fieldArrayName}.city` as const, { required: 'City is required' })}
                  id="city"
                  type="text"
                  required
                />
              </Field>
              <Field label="State" error={errors?.[fieldArrayName]?.state} className="w-1/3">
                <Select
                  {...register(`${fieldArrayName}.state`, { required: 'State is required' })}
                  required
                >
                  {Object.keys(STATES_LIST).map((state: any, index: number) => (
                    <option key={index} value={state}>{STATES_LIST[state]}</option>
                  ))}
                </Select>
              </Field>
              <Field label="Zip" error={errors?.[fieldArrayName]?.zip} className="w-1/3">
                <Input
                  {...register(`${fieldArrayName}.zip` as const, { required: 'Zip is required', minLength: 5 })}
                  id="state"
                  type="text"
                  required
                />
              </Field>
            </div>
          </div>
          <div className="form-row">
            <Button className="ml-auto btn-primary btn-thin" disabled={!isValid}>Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}