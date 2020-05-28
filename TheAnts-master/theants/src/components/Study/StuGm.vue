<template>
  <div class="Gm">
    <div class="link_toBuy">
      <a href="/user/userVip">
        <span>原价7998元</span>
        <i>1212</i>
        <img src="http://static.mayikt.com/kaishigoumai.png" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gm"
};
</script>
<style scoped>
.link_toBuy a span {
  display: inline-block;
  padding-left: 333px;
  padding-top: 55px;
  font-size: 35px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.link_toBuy {
  width: 1200px;
  margin: 50px auto;
  position: relative;
}
.link_toBuy a {
  position: relative;
  display: block;
  background: url("http://static.mayikt.com/db%20%281%29.png") center no-repeat;
  height: 244px;
}
.link_toBuy a i {
  position: absolute;
  top: 96px;
  left: 50%;
  transform: translateX(-42%);
  font-size: 78px;
  font-weight: 900;
  color: rgba(228, 16, 16, 1);
  font-style: normal;
}
.link_toBuy img {
  position: absolute;
  top: 68px;
  right: 60px;
  animation: myfirst 2s infinite linear;
}

</style>