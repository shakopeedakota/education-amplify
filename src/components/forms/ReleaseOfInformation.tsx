import { useAppState } from "@/lib/formState"
import { useForm } from "react-hook-form";
import { Button, Form, Field, Input, Checkbox } from "@/components/ui/Forms";
import { Application } from "@/models/Application";

const fieldArrayName = 'roi';

export const ReleaseOfInformation = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const saveData = (data: any) => {
    setState({ ...state, ...data });
    setForm({ form: 'sst' });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <div className="form-row">
              <div className="form-control">
                <h2>Release Of Information</h2>
                <p>Completion of this section authorizes the district/school provided for each child to release and obtain information from:</p>
                <p>
                  <span className="font-bold">Shakopee Mdewakanton Sioux Community Education Department</span><br/>
                  2075 Wozani Ocanku NW, Prior Lake, MN 55372
                </p>
              </div>
            </div>
          </div>
          {state?.children?.map((child: any, index: number) => (
            <div key={index}>
              <RoiForm
                childId={index}
                register={register}
                errors={errors}
                setValue={setValue}
              />
            </div>
          ))}
          <div className="form-row">
            <Button type="button" onClick={() => setForm({ form: 'children' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
            <Button className="ml-auto btn-primary btn-thin" disabled={!isValid}>Next<span className="rightArrow"></span></Button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}

export const RoiForm = ({ childId, register, errors, setValue }: {
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
          <Field label="School District" error={errors?.[fieldArrayName]?.[childId]?.schoolDistrict}>
            <Input
              {...register(`${fieldArrayName}.${childId}.schoolDistrict`, { required: 'School District is required' })}
              id="school-district"
              type="text"
              required
            />
          </Field>
          <Field label="School Name" error={errors?.[fieldArrayName]?.[childId]?.schoolName}>
            <Input
              {...register(`${fieldArrayName}.${childId}.schoolName`, { required: 'School Name is required' })}
              id="school-name"
              type="text"
              required
            />
          </Field>
        </div>
        <div className="form-row">
          <Field label="School City and State" error={errors?.[fieldArrayName]?.[childId]?.schoolCityState}>
            <Input
              {...register(`${fieldArrayName}.${childId}.schoolCityState`, { required: 'School city and state are required' })}
              type="text"
              required
            />
          </Field>
        </div>
        <div className="form-row">
          <div className="form-control text-sm">
            <span className="font-bold">Required Information:</span>
            <Checkbox
              {...register(`${fieldArrayName}.${childId}.requiredInformation.attendanceRecords`)}
              label="Attendance Records"
              readOnly={true}
              checked={true}
              value={1}
              className="readonly"
            />
            <Checkbox
              {...register(`${fieldArrayName}.${childId}.requiredInformation.academicPerformanceRecords`)}
              label="Academic Performance Records"
              readOnly={true}
              checked={true}
              value={1}
              className="readonly"
            />
          </div>
          <div className="form-control text-sm">
            <span className="font-bold">Optional Information:</span>
            <Checkbox
              {...register(`${fieldArrayName}.${childId}.optionalInformation.disciplinaryActions`)}
              label="Disciplinary Actions (suspension, expulsion, etc)"
              value={1}
            />
            <Checkbox
              {...register(`${fieldArrayName}.${childId}.optionalInformation.specialEducationRecords`)}
              label="Special Education Records/504 (if applicable)"
              value={1}
            />
            <Checkbox
              {...register(`${fieldArrayName}.${childId}.optionalInformation.teacherCounselorStaffObservations`)}
              label="Teacher, Counselor, Staff Observations/RTI Records"
              value={1}
            />
            <Checkbox
              {...register(`${fieldArrayName}.${childId}.optionalInformation.other`)}
              label={
                <Input
                  placeholder="Other (Please Specify)"
                  type="text"
                  className="max-w-[300px]"
                  defaultValue={state?.[fieldArrayName]?.[childId]?.optionalInformation?.other ?? undefined}
                  onChange={(e) => setValue(`${fieldArrayName}.${childId}.optionalInformation.other`, e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}