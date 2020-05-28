<template>
  <div class="study">
    <StuHeader></StuHeader>
    <StuLx></StuLx>
    <StuBody class="stubody"></StuBody>
      <StuGm></StuGm>
    <StuFooter></StuFooter>
  
  </div>
</template>
<script>
import StuHeader from "@/components/Study/StuHeader.vue";
import StuBody from "@/components/Study/StuBody.vue";
import StuFooter from "@/components/Study/StuFooter.vue";
import StuLx from "@/components/Study/StuLx.vue";
import StuGm from "@/components/Study/StuGm.vue";
export default {
  name: "study",
  components: {
    StuHeader,
    StuLx,
    StuBody,
    StuFooter,
    StuGm
  }
};
</script>
<style scoped>
.stubody{
  width: 1200px;
  margin: auto;
  margin-top: 22px;
}
</style>