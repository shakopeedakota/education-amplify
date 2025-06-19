import { login, register } from "@/lib/auth";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";
import { z } from "zod";

export const INITIAL_STATE_OBJECT = {
  data: null,
  zodErrors: null,
  firebaseErrors: null,
  message: '',
}

export interface StateObject {
  [key: string]: unknown;
}

const schemaRegister = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
      message: 'Password must be more than 8 characters',
    }),
  passwordConfirm: z.string().nonempty({message: 'Please reenter your password'}),
})
.refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"],
});

export async function registerUserAction(prevState: StateObject | undefined, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register.",
      firebaseErrors: null,
    };
  }

  try {
    await register(validatedFields.data.email, validatedFields.data.password);
  } catch (err) {
    console.log(err);
    return {
      ...prevState,
      zodErrors: null,
      message: 'Something went wrong. Please try again',
      firebaseErrors: null,
    }
  } finally {
    const user = auth?.currentUser;
    const token = await user?.getIdToken();

    await fetch ('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: token }),
    });
    redirect('/dashboard');
  }
}

const schemaLogin = z.object({
  email: z.string().email(),
  password: z.string().min(8, {}).max(100, {}),
});

export async function loginUserAction(prevState: StateObject, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error?.flatten().fieldErrors,
      message: "Missing fields. Failed to login.",
      firebaseErrors: null,
    };
  }

  try {
    await login(validatedFields.data.email, validatedFields.data.password);
  } catch (err) {
    console.log(err);
    return {
      ...prevState,
      zodErrors: null,
      message: "Something went wrong. Please try again",
      firebaseErrors: null,
    }
  } finally {
    const user = auth?.currentUser;
    const token = await user?.getIdToken();

    await fetch ('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: token }),
    });
    redirect('/dashboard');
  }
}