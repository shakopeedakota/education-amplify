'use client';

import { useAppState } from "@/lib/formState";
// import { Link } from "react-router-dom";
import { Button, Form } from "../ui/Forms";
import { useForm } from "react-hook-form";

export const Introduction = ({ setForm }: { setForm: CallableFunction }) => {
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
  } = useForm({ defaultValues: state, mode: 'onSubmit' });

  const saveData = (data: any) => {
    setState({ ...state, ...data });
    setForm({
      form: 'primaryContact'
    });
  }
  
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <div className="form-section">
          <div className="form-subsection shadow">
            <h1>Welcome!</h1>
            <p>The purpose of this form is to expedite the application process for Education services and to reduce the amount of duplicate fields needed to fill out.</p>
          </div>
          <div className="form-row">
            <Button className="ml-auto btn-primary">Next<span className="rightArrow"></span></Button>
            {/* <Link to="/primary-contact" className="btn btn-thin btn-primary text-center ml-auto">Continue<span className="rightArrow"></span></Link> */}
          </div>
        </div>
      </fieldset>
    </Form>
  );
}