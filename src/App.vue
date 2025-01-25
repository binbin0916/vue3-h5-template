<script setup lang="ts">
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import { onMounted } from "vue";
onMounted(() => {
  // 获取用户信息
  if (useDarkMode()) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>
<template>
  <router-view />
</template>

<style></style>
