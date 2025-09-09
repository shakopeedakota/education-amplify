import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Form, Field, Input } from '@/components/ui/Forms';
import { Select } from '../ui/Forms/Select';
import { STATES_LIST } from '@/lib/utils';

type ChildModalChild = {
  firstName: string;
  lastName: string;
  birthdate: string;
  currentSchool: string;
  grade: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

type Props = {
  onClose: () => void;
  onSave: (child: ChildModalChild) => void;
}

export const ChildModal = ({ onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthdate: '',
      currentSchool: '',
      grade: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    },
  });

  const onSubmit: SubmitHandler<ChildModalChild> = (data) => {
    onSave(data);
    reset();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-30"></div>
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[768px] shadow-lg z-[101]">
        <h3 className="text-lg font-medium mb-4">Add Child</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <div className="form-section">
              <div className="form-row">
                <Field label="First Name" error={errors?.firstName}>
                  <Input
                    {...register('firstName', { required: 'First name is required' })}
                    type="text"
                    required
                  />
                </Field>
                <Field label="Last Name" error={errors?.lastName}>
                  <Input
                    {...register('lastName', { required: 'Last name is required' })}
                    type="text"
                    required
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Birthdate" error={errors?.birthdate} className="w-1/3">
                  <Input
                    {...register('birthdate', { required: 'Birthdate is required' })}
                    type="date"
                    required
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Current School" error={errors?.currentSchool}>
                  <Input
                    {...register('currentSchool', { required: 'Current school is required' })}
                    type="text"
                    required
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Current/Rising Grade" error={errors?.grade}>
                  <Input
                    {...register('grade', { required: 'Grade level is required' })}
                    type="text"
                    required
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Address" error={errors?.address} className="w-2/3">
                  <Input
                    {...register('address', { required: 'Address is required' })}
                    type="text"
                    required
                  />
                </Field>
                <Field label="Apt/Unit" error={errors?.address2} className="w-1/3">
                  <Input
                    {...register('address2')}
                    type="text"
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="City" error={errors?.city} className="w-1/3">
                  <Input
                    {...register('city', { required: 'City is required' })}
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
              <div className="form-row justify-end space-x-2 mt-4">
                <Button type="button" className="btn btn-thin btn-secondary" onClick={onClose}>Cancel</Button>
                <Button type="submit" className="btn btn-thin btn-primary">Save</Button>
              </div>
            </div>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}