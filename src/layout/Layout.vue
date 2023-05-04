<script setup>
import {onMounted} from "vue";
import {registerApplication} from "single-spa";

function registerHomeApp() {
  registerApplication(
    "home",
    // loadingFunction
    () => import("../home/home.app.js"),
    // activityFunction
    (location) => location.pathname.startsWith("/home")
  );
}

onMounted(() => {
  registerHomeApp();
  console.log("Home app registered");
});
</script>

<template>
  <div>Layout app</div>
  <div id="home"></div>
</template>
