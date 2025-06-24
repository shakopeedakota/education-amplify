import { Button } from "../ui/Forms";

export const Complete = () => {
  return (
    <div className="form-section">
      <div className="form-subsection shadow">
        <div className="form-row">
          <div className="form-control">
            <h3>Congrats!</h3>
            <p>Thank you for submitting your application for the Shakopee Mdewakanton Sioux Community Education Department.</p>
            <p>Your application will be reviewed by a member of the Education Department and you will receive final confirmation within 3 business days.</p>
          </div>
        </div>
      </div>
      <div className="form-row">
        <Button onClick={() => location.reload()} className="btn btn-thin btn-primary ml-auto">Start New Application</Button>
      </div>
    </div>
  );
}