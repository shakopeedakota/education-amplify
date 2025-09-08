import { useAppState } from "@/lib/formState";
import { Button, Checkbox, Field, Form, Radio, Textbox } from "@/components/ui/Forms";
import { useForm } from "react-hook-form";
import { Application } from "@/models/Application";

const fieldArrayName = "medicationAdministration";

export const AuthorizationToAdministerMedication = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const consent = watch(`${fieldArrayName}.medicationAdministrationAuthorization`);

  const saveData = (data: any) => {
    const nextOverride = state.nextOverride && state.nextOverride != '' ? state.nextOverride : '';
    delete state.nextOverride;
    setState({ ...state, ...data });
    setForm({ form: nextOverride != '' ? nextOverride : 'postSecondaryServices' });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Authorization to Administer Medication</h2>
                <p>This form provides Parent/Guardian authorization for the Education Department staff to administer specific over-the-counter (OTC) medications to students while they are in attendance at the Education Department.</p>
                <p>The Education Department staff are trained in CPR/First Aid, including the administration of EpiPens, but are not medically trained nor certified to administer prescription medication. In emergency situations, the Education Department staff may contact 911 before calling the parent/guardian (e.g. cessation of breathing).</p>
              </div>
            </div>
            <div className="form-row">
              <Field label="Select One:" error={errors?.[fieldArrayName]?.medicationAdministrationAuthorization}>
                <Radio
                  {...register(`${fieldArrayName}.medicationAdministrationAuthorization`, { required: 'This field is required' })}
                  label="I authorize the administration of over-the-counter medications"
                  value="I authorize the administration of over-the-counter medications"
                />
                <Radio
                  {...register(`${fieldArrayName}.medicationAdministrationAuthorization`, { required: 'This field is required' })}
                  label="I DO NOT authorize the administration of over-the-counter medications"
                  value="I DO NOT authorize the administration of over-the-counter medications"
                />
              </Field>
            </div>
            {consent == 'I authorize the administration of over-the-counter medications' && (
              <>
                <div className="form-row">
                  <Field label="I understand that the Education Department staff is not qualified to administer prescription medications. This form is only for over-the-counter medications. A small supply of these medications such as Tylenol and Ibuprofen will be kept in a locked location within the Education Department." error={errors?.[fieldArrayName]?.prescriptionMedicationNotice}>
                    <Checkbox
                      {...register(`${fieldArrayName}.prescriptionMedicationNotice`, { required: 'This field is required' })}
                      label="Yes"
                      value="Yes"
                    />
                  </Field>
                </div>
                <div className="form-row">
                  <Field label="I understand that the Education Department staff will call to inform me that medication will be administered to my child. The Education Department is still authorized to do so even if they do not reach me directly and instead leave a message." error={errors?.[fieldArrayName]?.informedConsent}>
                    <Checkbox
                      {...register(`${fieldArrayName}.informedConsent`, { required: 'This field is required' })}
                      label="Yes"
                      value="Yes"
                    />
                  </Field>
                </div>
              </>
            )}
          </div>
          {consent == 'I authorize the administration of over-the-counter medications' && (
            <>
              {state?.children?.map((child: any, index: number) => (
                <div key={index}>
                  <AuthorizationToAdministerMedicationForm
                    childId={index}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                </div>
              ))}
            </>
          )}
          <div className="form-row">
            <Button type="button" onClick={() => setForm({ form: 'afterSchoolPickup' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
            <Button className="ml-auto btn-primary btn-thin">Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}

const AuthorizationToAdministerMedicationForm = ({ childId, register, errors, setValue}: {
  childId: number;
  register: CallableFunction;
  errors: any;
  setValue: CallableFunction;
}) => {
  const [ state ] = useAppState();

  return (
    <div className="form-subsection shadow">
      <div className="form-subsection-header">
        {state?.children?.[childId].firstName} {state?.children?.[childId].lastName}
      </div>
      <div className="form-subsection-body">
        <div className="form-row">
          <Field label="I authorize the Education Department to administer the following over-the-counter medication(s) to my child">
            <Checkbox
              {...register(`${fieldArrayName}.medicationList.${childId}.tylenol`)}
              label="Tylenol (Acetaminophen): Up to 2 pills, regular strength"
              value={true}
            />
            <Checkbox
              {...register(`${fieldArrayName}.medicationList.${childId}.advil`)}
              label="Advil (Ibuprofen): Up to 2 pills, regular strength"
              value={true}
            />
            <Checkbox
              {...register(`${fieldArrayName}.medicationList.${childId}.bacitracin`)}
              label="Bacitracin or other topical ointment for cuts and pain relief: Dose as listed on the medication"
              value={true}
            />
            <Checkbox
              {...register(`${fieldArrayName}.medicationList.${childId}.allergy`)}
              label="Over-the-counter Allergy medication: Dose as listed on the medication"
              value={true}
            />
            <Checkbox
              {...register(`${fieldArrayName}.medicationList.${childId}.other`)}
              label="Other:"
            />
            <Textbox
              defaultValue={state?.[fieldArrayName]?.medicationList?.[childId]?.other ?? ''}
              onChange={(e) => setValue(`${fieldArrayName}.medicationList.${childId}.other`, e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
              })}
            />
          </Field>
        </div>
        <div className="form-row">
          <Field label="My child has a prescription inhaler and/or an EpiPen and has received instructions from their physician or licensed prescriber in how to properly use it. I authorize my child to use this device when medically necessary." error={errors?.[fieldArrayName]?.children?.[childId]?.inhalerConsent}>
            <Radio
              {...register(`${fieldArrayName}.children.${childId}.inhalerConsent`, { required: 'This field is required' })}
              value="Yes"
              label="Yes"
              required
            />
            <Radio
              {...register(`${fieldArrayName}.children.${childId}.inhalerConsent`, { required: 'This field is required' })}
              value="No"
              label="No"
              required
            />
          </Field>
        </div>
        <div className="form-row">
          <div className="form-control">
            <p className="bg-inherit leading-none">The Education Department takes food and other allergies seriously and will eliminate any such items from the Department as medically necessary.</p>
          </div>
        </div>
        <div className="form-row">
          <Field label="My Child has allergies to food or other items listed below. Please include any specific information you feel the Education Department staff should know related to this issue.">
            <Textbox {...register(`${fieldArrayName}.children.${childId}.allergies`)} />
          </Field>
        </div>
        <div className="form-row">
          <Field label="Any other information the Education Department should know?">
            <Textbox {...register(`${fieldArrayName}.children.${childId}.otherInformation`)} />
          </Field>
        </div>
      </div>
    </div>
  );
}