import { defineStore } from "pinia";
import { store } from "@/store";

export const useAccountStore = defineStore({
  id: "account",
  state: () => ({
    account: {
      id: "",
      name: "",
      email: "",
      password: "",
      role: "",
      token: ""
    }
  }),
  actions: {
    setAccount(account: any) {
      this.account = account;
    },
    clearAccount() {
      this.account = {
        id: "",
        name: "",
        email: "",
        password: "",
        role: "",
        token: ""
      };
    }
  }
});

export function useAccountStoreWithOut() {
  return useAccountStore(store);
}
