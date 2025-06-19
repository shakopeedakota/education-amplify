import { auth } from '@/lib/firebase';
import { getAuthToken } from "./get-token";

export async function getUserMeLoader() {
  return { ok: true, data: null, error: null };
  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  const user = auth?.currentUser;
  
  if (user) {
    return {
      ok: true,
      data: user,
      error: null,
    };
  }

  return { ok: false, data: null, error: null };
}