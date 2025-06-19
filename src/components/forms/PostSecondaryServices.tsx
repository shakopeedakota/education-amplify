import { useAppState } from "@/lib/formState";
import { Button, Form, Radio, Field, Textbox } from "../ui/Forms";
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
    formState: { errors },
    watch,
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const saveData = (data: any) => {
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    delete state.nextOverride;
    setState({ ...state, ...data });
    setForm({ form: nextOverride != '' ? nextOverride : 'review' });
  };
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <div className="form-section">
        <div className="form-subsection shadow">
          <div className="form-row">
            <div className="form-control">
              <h3>Post-Secondary Services</h3>
              <p>Help us understand your needs and how to better serve this community!</p>
              <p className="leading-none italic text-sm">This section is completely optional, however, the Education Department utilizes this information to shape the department to best fit the Community&apos;s needs.</p>
            </div>
          </div>
        </div>
        {state?.children?.map((child: Child, index: number) => (
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
          <Button className="btn-primary btn-thin ml-auto">Next<span className="rightArrow"></span></Button>
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
        <div className="form-row">
          <Field label="What would help you feel supported in helping your child prepare for the future?">
            <Textbox
              {...register(`${fieldArrayName}.${childId}.futureChildSupport`)}
            />
          </Field>
        </div>
        <div className="form-row">
          <Field label="Anything else you would like the Education Department to know?">
            <Textbox
              {...register(`${fieldArrayName}.${childId}.additionalInfo`)}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}