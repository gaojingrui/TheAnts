<template>
  <div class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" class="stuimg" style="position: relative;
right: 25px;">
        <img src="http://static.mayikt.com/2020_logo.png" />
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">课程</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">免费</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">培训</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">讲师</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">大纲</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">会员</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">直播课</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              社区
              <span style="color: red;font-size: 10px">new</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">历程</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">路线</a>
          </li>
        </ul>
        <form class="form-inline">
          <input type="text" class="stuinp" />
          <button class="stubtn" type="search">
            <i class="iconfont icon-sousuo ss"></i>
          </button>
        </form>
        <div>
          <a href="#" class="dz">登录/注册</a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.navbar {
  width: 1200px;
  margin: 0 auto;
  height: 77px;
}
.stuinp {
  border-left: white;
  border-right: white;
  border-top: white;
  line-height: 35px;
  width: 178px;
}
.stubtn {
  background-color: transparent;
  border: white;
  position: relative;
  right: 30px;
}
.dz {
  text-decoration: none;
  color: #666;
  font-size: 13px;
}

.navbar-nav > li {
  margin-left: 16px;
}
.navbar-nav > stuimg {
  position: relative;
  left: 2px;
}
.ss {
  font-size: 28px;
}
</style>