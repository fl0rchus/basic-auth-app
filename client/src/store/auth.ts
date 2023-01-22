import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  token: string | null;
  profile: any;
  isAuth: boolean;
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true,
        })),
      setProfile: (profile: any) =>
        set((state) => ({
          profile,
        })),
      logout: () =>
        set({
          token: null,
          profile: null,
          isAuth: false,
        }),
    }),
    {
      name: "authToken",
    }
  )
);
