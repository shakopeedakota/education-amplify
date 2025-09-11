import { useAppState } from "@/lib/formState";
import { Button, Form, Radio, Field } from "../ui/Forms";
import { useForm } from "react-hook-form";
import { Child } from "@/models/Child";
import { Application } from "@/models/Application";

// Field Array
const fieldArrayName = 'postSecondary';

export const PostSecondaryServices = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });
  const completeSection = watch(`${fieldArrayName}.completeSection`);

  const saveData = (data: any) => {
    setState({ ...state, ...data });
    setForm({ form: 'review' });
  };
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <div className="form-section">
        <div className="form-subsection shadow">
          <div className="form-row">
            <div className="form-control">
              <h3>Post-Secondary Services</h3>
              <p>Help us understand your needs and how to better serve this community!</p>
              <p className="leading-none">This section is completely optional, however, the Education Department utilizes this information to shape the department to best fit the Community&apos;s needs.</p>
            </div>
          </div>
          <div className="form-row">
            <Field label="I would like to complete this section for one or more of my children" error={errors?.[fieldArrayName]?.completeSection}>
              <Radio
                {...register(`${fieldArrayName}.completeSection`, { required: 'This field is required' })}
                label="Yes"
                value="Yes"
                required
              />
              <Radio
                {...register(`${fieldArrayName}.completeSection`, { required: 'This field is required' })}
                label="No"
                value="No"
                required
              />
            </Field>
          </div>
        </div>
        {completeSection == 'Yes' && state?.children?.map((child: Child, index: number) => (
          <div key={index}>
            <PostSecondaryStudentForm
              childId={index}
              register={register}
              errors={errors}
              watch={watch}
            />
          </div>
        ))}
        <div className="form-row">
          <Button type="button" onClick={() => setForm({ form: 'medicationAdministration' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
          <Button className="btn-primary btn-thin ml-auto" disabled={!isValid}>Next<span className="rightArrow"></span></Button>
        </div>
      </div>
    </Form>
  );
}

export const PostSecondaryStudentForm = ({ childId, register, errors, watch }: {
  childId: number;
  register: CallableFunction;
  errors: any;
  watch: CallableFunction;
}) => {
  const [ state ] = useAppState();
  const schoolServices = watch(`${fieldArrayName}.${childId}.afterHighSchoolPrep`);

  return (
    <div className="form-subsection shadow">
      <div className="form-subsection-header">
        {state?.children?.[childId].firstName} {state?.children?.[childId].lastName}
      </div>
      <div className="form-subsection-body">
        <div className="form-row">
          <Field
            label="Does your child's school provide services to plan for life after high school?"
            error={errors?.[fieldArrayName]?.[childId]?.afterHighSchoolPrep}
          >
            <Radio
              {...register(`${fieldArrayName}.${childId}.afterHighSchoolPrep`)}
              label="Yes"
              value="Yes"
            />
            <Radio
              {...register(`${fieldArrayName}.${childId}.afterHighSchoolPrep`)}
              label="No"
              value="No"
            />
            <Radio
              {...register(`${fieldArrayName}.${childId}.afterHighSchoolPrep`)}
              label="I don't know"
              value="I don't know"
            />
          </Field>
        </div>
        {schoolServices == 'Yes' && (
          <div className="form-row">
            <Field
              label="Do these services meet your family's needs?"
              error={errors?.[fieldArrayName]?.[childId]?.meetingFamilyNeeds}
            >
              <Radio
                {...register(`${fieldArrayName}.${childId}.meetingFamilyNeeds`)}
                label="Yes"
                value="Yes"
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.meetingFamilyNeeds`)}
                label="No"
                value="No"
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.meetingFamilyNeeds`)}
                label="I don't know"
                value="I don't know"
              />
            </Field>
          </div>
        )}
      </div>
    </div>
  );
}