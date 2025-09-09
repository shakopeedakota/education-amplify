import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Form, Field, Input } from '@/components/ui/Forms';

type EmergencyContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relation: string;
}

type Props = {
  onClose: () => void;
  onSave: (contact: EmergencyContact) => void;
}

export const EmergencyContactModal = ({ onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: '', lastName: '', email: '', phone: '', relation: '' },
  });

  const onSubmit: SubmitHandler<EmergencyContact> = (data) => {
    onSave(data);
    reset();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[500px] shadow-lg">
        <h3 className="text-lg font-medium mb-4">Add Emergency Contact</h3>
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
                <Field label="Email" className="w-2/3" error={errors?.email}>
                  <Input
                    {...register('email', { required: 'Email is required' })}
                    type="email"
                    required
                  />
                </Field>
                <Field label="Phone" className="w-1/3" error={errors?.phone}>
                  <Input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    required
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Relation to Child" error={errors?.relation}>
                  <Input
                    {...register('relation', { required: 'Relation is required' })}
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