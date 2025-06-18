import { useAppState } from "@/lib/formState";
import { Form, Button, Checkbox, Field, Input, Radio } from "@/components/ui/Forms";
import { useForm } from "react-hook-form";
import { AlertCircle } from "lucide-react";
import { Application } from "@/models/Application";

const fieldArrayName = 'sstConsent';

export const StudentSupportTeacherConsent = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const saveData = (data: any) => {
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    delete state.nextOverride;
    setState({ ...state, ...data });
    setForm({ form: nextOverride != '' ? nextOverride : 'afterSchoolPickup' });
  };
  
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Student Support Teacher Consent</h2>
                <p>Please complete this section for each student.</p>
                <p>Community Members will use this form to opt-in to the Student Support Teacher (SST) services offered by the SMSC Education Department.  Opting-in confirms that you agree to have an SST assist with your child&apos;s academic journey.  Entering your name below will serve as your electronic signature.</p>
                <p>All SSTs are licensed Minnesota teachers.  Once this form is received, your child(ren) will be assigned an SST who will reach out to you to discuss their academic needs and goals.</p>
                <p>All communication between the Parent/Guardian, Education Department team, and school(s) will be kept strictly confidential.  Parents/Guardians may withdraw consent for service at any time by providing written notification to the Director of the SMSC Education Department.</p>
              </div>
            </div>
          </div>
          {state?.children?.map((child: any, index: number) => (
            <div key={index}>
              <SSTConsentForm
                childId={index}
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
            </div>
          ))}
          <div className="form-row">
            <Button type="button" onClick={() => setForm({ form: 'roi' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
            <Button className="ml-auto btn-primary btn-thin">Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}

export const SSTConsentForm = ({ childId, register, errors, setValue, watch }: {
  childId: number;
  register: CallableFunction;
  errors: any;
  setValue: CallableFunction;
  watch: CallableFunction;
}) => {
  const [ state ] = useAppState();
  const consent = watch(`${fieldArrayName}.${childId}.consent`);
  const contactFrequency = watch(`${fieldArrayName}.${childId}.contactFrequency`);

  return (
    <div className="form-subsection shadow">
      <div className="form-subsection-header">
        {state?.children?.[childId].firstName} {state?.children?.[childId].lastName}
      </div>
      <div className="form-subsection-body">
        <div className="form-row">
          <Field label="I give my permission to the SMSC Education Department team to assist my child in their schooling as requested below. I give my child's school permission to discuss my child with their SMSC Student Support Teacher (SST)." error={errors?.[fieldArrayName]?.[childId]?.consent}>
            <Radio
              {...register(`${fieldArrayName}.${childId}.consent`, { required: 'Please select an option' })}
              value="Yes"
              label="Yes"
              required
            />
            <Radio
              {...register(`${fieldArrayName}.${childId}.consent`, { required: 'Please select an option' })}
              value="No"
              label="No"
              required
            />
          </Field>
        </div>
        {consent == 'Yes' && (
          <div className="form-row">
            <Field label="Name of teacher (if known)" error={errors?.children?.[childId]?.nameOfTeacher}>
              <Input
                {...register(`${fieldArrayName}.${childId}.nameOfTeacher`)}
                id="name-of-teacher"
                type="text"
              />
            </Field>
          </div>
        )}
        {consent == 'Yes' && (
          <div className="form-row">
            <Field
              label="My child needs support with the following (choose one or more options)"
            >
              <Checkbox
                {...register(`${fieldArrayName}.${childId}.childSupport.reading`)}
                label="Reading"
                value="Reading"
              />
              <Checkbox
                {...register(`${fieldArrayName}.${childId}.childSupport.math`)}
                label="Math"
                value="Math"
              />
              <Checkbox
                {...register(`${fieldArrayName}.${childId}.childSupport.organization`)}
                label="Organization and Study Skills"
                value="Organization and Study Skills"
              />
              <Checkbox
                {...register(`${fieldArrayName}.${childId}.childSupport.writing`)}
                label="Writing"
                value="Writing"
              />
              <Checkbox
                {...register(`${fieldArrayName}.${childId}.childSupport.motivation`)}
                label="Motivation"
                value="Motivation"
              />
              <Checkbox
                {...register(`${fieldArrayName}.${childId}.childSupport.other`)}
                label={
                  <Input
                    placeholder="Other (Please Specify)"
                    type="text"
                    className="max-w-[300px]"
                    defaultValue={state?.[fieldArrayName]?.[childId]?.childSupport?.other ?? ''}
                    onChange={(e) => setValue(`${fieldArrayName}.${childId}.childSupport.other`, e.target.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })}
                  />
                }
              />
            </Field>
          </div>
        )}
        {consent == 'Yes' && (
          <div className="form-row">
            <Field
              label="I would like my SST to call or email me..."
              error={errors?.[fieldArrayName]?.[childId].contactFrequency}
            >
              <Radio
                {...register(`${fieldArrayName}.${childId}.contactFrequency`, { required: 'Please select an option' })}
                label="Once per week"
                value="Once per week"
                required
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.contactFrequency`, { required: 'Please select an option' })}
                label="Twice per month"
                value="Twice per month"
                required
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.contactFrequency`, { required: 'Please select an option' })}
                label="Once per month"
                value="Once per month"
                required
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.contactFrequency`, { required: 'Please select an option' })}
                value="Other"
                required
                label={
                  <>
                    <Input
                      {...register(`${fieldArrayName}.${childId}.contactFrequencyOther`, {
                        required: {
                          value: contactFrequency == 'Other',
                          message: 'Please specify your contact frequency',
                        },
                      })}
                      placeholder="Other (Please Specify)"
                      type="text"
                      className="max-w-[300px]"
                      defaultValue={contactFrequency == 'Other' ? state?.[fieldArrayName]?.[childId]?.contactFrequencyOther : ''}
                      onFocus={() => {
                        setValue(`${fieldArrayName}.${childId}.contactFrequency`, 'Other', {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }}
                      onChange={(e) => {
                        setValue(`${fieldArrayName}.${childId}.contactFrequency`, 'Other', {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                        setValue(`${fieldArrayName}.${childId}.contactFrequencyOther`, e.target.value, {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }}
                    />
                    {errors?.[fieldArrayName]?.[childId].contactFrequencyOther && <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{errors?.[fieldArrayName]?.[childId].contactFrequencyOther.message}</small>}
                  </>
                }
              />
            </Field>
          </div>
        )}
        {consent == 'Yes' && (
          <div className="form-row">
            <Field
              label="If my child's SST needs to communicate with them directly via text or email..."
              error={errors?.[fieldArrayName]?.[childId].communicationConsent}
            >
              <Radio
                {...register(`${fieldArrayName}.${childId}.communicationConsent`, { required: 'Please select an option' })}
                label="I consent to the SST texting or emailing my child without including me"
                value="I consent to the SST texting or emailing my child without including me"
                required
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.communicationConsent`, { required: 'Please select an option' })}
                label="I consent to this communication, and I as the Parent/Guardian must always be included in any text or email message"
                value="I consent to this communication, and I as the Parent/Guardian must always be included in any text or email message"
                required
              />
              <Radio
                {...register(`${fieldArrayName}.${childId}.communicationConsent`, { required: 'Please select an option' })}
                label="I do not consent to this type of communication"
                value="I do not consent to this type of communication"
                required
              />
            </Field>
          </div>
        )}
      </div>
    </div>
  );
}