import { parseFormData } from "@/lib/utils";
import { z } from "zod";

export interface FormResponse {
  success: boolean;
  data: {[key: string]: unknown};
  errors: {
    zodErrors?: {[key: string]: string[]} | null;
  };
}

const schemaContact = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  address: z.string().nonempty(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  zip: z.string().nonempty(),
});

const schemaEmergencyContact = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty(),
  phone: z.string().nonempty(),
});

export async function initialRegistrationAction(formData: FormData, submit: boolean) {
  const section = formData.get('sectionName') as string;
  const validatedFields = validateSection(section, formData);
  const parsedData = parseFormData(formData);
  delete parsedData.sectionName;

  if (submit) {

  }

  return {
    success: validatedFields.success ? true : false,
    data: {
      ...parsedData,
    },
    errors: {
      zodErrors: {
        [section]: validatedFields.error?.flatten().fieldErrors
      },
    },
  };
}

export function validateField(type: string, value: string) {
  switch (type) {
    case 'string':
      return z.string().nonempty().safeParse(value);
    default:
      return {};
  }
}

function validateSection(section: string, formData: FormData) {
  switch (section) {
    case 'primaryContact':
    case 'secondaryContact':
      return schemaContact.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        zip: formData.get('zip'),
      });
    case 'emergencyContact':
      return schemaEmergencyContact.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
      });
    default:
      return {
        success: false,
        error: null,
      }
  }
}