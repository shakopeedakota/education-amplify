'use client';

import { Button, Form } from "@/components/ui/Forms";
import { sendForDocSigning } from "@/data/actions/docsign-actions";
import { useAppState } from "@/lib/formState";
import { Application } from "@/models/Application";
import { Contact } from "@/models/Contact";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

export const Review = ({ setForm }: { setForm: CallableFunction }) => {
  const [ submitButton, setSubmitButton ] = useState('Submit');
  const [ state, setState ] = useAppState();
  const {
    handleSubmit,
  } = useForm<Application>({ defaultValues: state, mode: 'onSubmit' });

  const saveData = async (data: any) => {
    setSubmitButton('Processing');
    setState({ ...state, ...data });
    await fetch('https://q5ogk6qbf3sp62443ceo43zcp40kdcvp.lambda-url.us-east-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...state, ...data })
    })
    .then(resp => resp.json())
    .then(async (data) => {
      const { documentId } = await sendForDocSigning({ filename: data.url, appData: { ...state, ...data } });
      if ( documentId && documentId != null && documentId != '' ) {
        setForm({ form: 'complete' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    });
    setSubmitButton('Submit');
  }

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <div className="form-section">
        <div className="form-subsection shadow">
          <div className="form-row">
            <div className="form-control">
              <h3>Review</h3>
              <p>Great! Now let&apos;s review everything to make sure we didn&apos;t miss any information.</p>
            </div>
          </div>
        </div>
        <div className="form-subsection shadow">
          <div className="form-subsection-header flex items-center">
            <span>Primary Contact</span>
            <a
              onClick={() => {
                setForm({form: 'primaryContact'});
                setState({ ...state, nextOverride: 'review' })
              }}
              className="ml-auto cursor-pointer"
            >
              <Pencil size={18} />
            </a>
          </div>
          <div className="form-subsection-body">
            <div className="form-row">
              <div className="form-control">
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Name</strong></td>
                      <td>{state?.primaryContact?.firstName} {state?.primaryContact?.lastName}</td>
                    </tr>
                    <tr>
                      <td><strong>Email</strong></td>
                      <td> {state?.primaryContact?.email}</td>
                    </tr>
                    <tr>
                      <td><strong>Phone</strong></td>
                      <td>{state?.primaryContact?.phone}</td>
                    </tr>
                    <tr>
                      <td><strong>Address</strong></td>
                      <td>
                        <address>
                          {state?.primaryContact?.address}<br/>
                          {state?.primaryContact?.address2}{state?.primaryContact?.address2 && <br/>}
                          {state?.primaryContact?.city}, {state?.primaryContact?.state} {state?.primaryContact?.zip}
                        </address>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="form-subsection shadow">
          <div className="form-subsection-header flex items-center">
            <span>Secondary Contact</span>
            <a
              onClick={() => {
                setForm({form: 'secondaryContact'});
                setState({ ...state, nextOverride: 'review' })
              }}
              className="ml-auto cursor-pointer"
            >
              <Pencil size={18} />
            </a>
          </div>
          <div className="form-subsection-body">
            <div className="form-row">
              <div className="form-control">
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Name</strong></td>
                      <td>{state?.secondaryContact?.firstName} {state?.secondaryContact?.lastName}</td>
                    </tr>
                    <tr>
                      <td><strong>Email</strong></td>
                      <td> {state?.secondaryContact?.email}</td>
                    </tr>
                    <tr>
                      <td><strong>Phone</strong></td>
                      <td>{state?.secondaryContact?.phone}</td>
                    </tr>
                    <tr>
                      <td><strong>Address</strong></td>
                      <td>
                        <address>
                          {state?.secondaryContact?.address}<br/>
                          {state?.secondaryContact?.address2}{state?.secondaryContact?.address2 && <br/>}
                          {state?.secondaryContact?.city}, {state?.secondaryContact?.state} {state?.secondaryContact?.zip}
                        </address>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="form-subsection shadow">
          <div className="form-subsection-header flex items-center">
            <span>Emergency Contacts</span>
            <a
              onClick={() => {
                setForm({form: 'emergencyContacts'});
                setState({ ...state, nextOverride: 'review' })
              }}
              className="ml-auto cursor-pointer"
            >
              <Pencil size={18} />
            </a>
          </div>
          <div className="form-subsection-body">
            {state?.emergencyContacts.map((contact: Contact, index: number) => (
              <div key={index} className="form-row">
                <div className="form-control">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}><h4>Emergency Contact #{index + 1}</h4></td>
                      </tr>
                      <tr>
                        <td><strong>Name</strong></td>
                        <td>{contact.firstName} {contact.lastName}</td>
                      </tr>
                      <tr>
                        <td><strong>Email</strong></td>
                        <td>{contact.email}</td>
                      </tr>
                      <tr>
                        <td><strong>Phone</strong></td>
                        <td>{contact.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="form-subsection shadow">
          <div className="form-subsection-header flex items-center">
            <span>Children</span>
            <a
              onClick={() => {
                setForm({form: 'children'});
                setState({ ...state, nextOverride: 'review' })
              }}
              className="ml-auto cursor-pointer"
            >
              <Pencil size={18} />
            </a>
          </div>
          <div className="form-subsection-body">
            {state?.children.map((child: Record<string, any>, index: number) => (
              <div key={index} className="form-row">
                <div className="form-control">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}><h4>Child #{index + 1}</h4></td>
                      </tr>
                      <tr>
                        <td><strong>Name</strong></td>
                        <td>{child.firstName} {child.lastName}</td>
                      </tr>
                      <tr>
                        <td><strong>Email</strong></td>
                        <td>{child.email && child.email != '' ? child.email : '-'}</td>
                      </tr>
                      <tr>
                        <td><strong>Phone</strong></td>
                        <td>{child.phone && child.phone != '' ? child.phone : '-'}</td>
                      </tr>
                      <tr>
                        <td><strong>Current School</strong></td>
                        <td>{child.currentSchool}</td>
                      </tr>
                      <tr>
                        <td><strong>Grade</strong></td>
                        <td>{child.grade}</td>
                      </tr>
                      <tr>
                        <td><strong>Address</strong></td>
                        <td>
                          <address>
                            {child.address}<br/>
                            {child.address2}{child.address2 && child.address2 != '' && <br/>}
                            {child.city}, {child.state} {child.zip}
                          </address>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Other Information</strong></td>
                        <td>{child.otherInformation && child.otherInformation != '' ? child.otherInformation : '-'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="form-row">
          <Button type="button" onClick={() => setForm({ form: 'postSecondaryServices' })} className="btn btn-thin btn-link"><span className="leftArrow"></span>Prev</Button>
          <Button className="ml-auto btn-primary" disabled={submitButton != 'Submit'}>{submitButton}{submitButton == 'Submit' && <span className="rightArrow"></span>}{submitButton == 'Processing' && <span className="spinner"></span>}</Button>
        </div>
      </div>
    </Form>
  );
}