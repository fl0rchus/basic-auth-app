import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  token: string | null;
  profile: any;
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: null,
      profile: null,
      setToken: (token: string) =>
        set((state) => ({
          token,
        })),
      setProfile: (profile: any) =>
        set((state) => ({
          profile,
        })),
    }),
    {
      name: "authToken",
    }
  )
);
