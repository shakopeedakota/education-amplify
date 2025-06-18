import { DocumentApi, TemplateApi, Role, SendForSignFromTemplateForm } from 'boldsign';

const templateApi = new TemplateApi();
templateApi.setApiKey(process.env.BOLDSIGN_API_KEY as string);

export const ReviewAndSign = () => {

}