<script setup lang="ts" name="About">
import { useRouter } from "vue-router";
import { encode } from "@/utils/common";
const router = useRouter();
const toLogin = () => {
  router.push({
    name: "Login",
    query: {
      redirect: encode(router.currentRoute.value.fullPath)
    }
  });
};
</script>

<template>
  <div>about-user</div>
  <van-button type="primary" @click="toLogin">登录</van-button>
</template>
