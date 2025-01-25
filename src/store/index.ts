import { createPinia } from "pinia";
const store = createPinia();

// 导出store/modules下的所有模块
import { useAccountStore } from "./modules/account";

export { store, useAccountStore };
