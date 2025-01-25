<script setup lang="ts" name="Login">
import { http } from "@/utils/http";
import { useAccountStore } from "@/store";

const wxConfig = reactive({
  appID: "wxc5ed44d9873e5bdd",
  appsecret: "6f52969065b67a8e6f1a7e6b03126073"
});

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc5ed44d9873e5bdd&redirect_uri=http://192.168.31.130/about&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect

const accountStore = useAccountStore();
const account = computed(() => accountStore.account);
http.request({
  url: "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxd477edab60670232&secret=SECRET&code=CODE&grant_type=authorization_code",
  method: "get"
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full h-full">account：{{ account }}</div>
    <van-button type="primary" class="w-3/4 m-auto mt-10">微信登录</van-button>
  </div>
</template>

<style lang="less" scoped></style>
