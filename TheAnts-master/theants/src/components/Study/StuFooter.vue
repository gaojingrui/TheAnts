<template>
  <div class="Footer">
    <div class="footer">
      <div class="footer_left">
        <div class="footer_right_top">
          <a href="#">友情链接</a>
          <a href="http://www.mayikt.com/front/couinfo/91/0">springcloud视频教程</a>
          <a href="http://www.mayikt.com/front/couinfo/247/0">SpringAlibaba视频教程</a>
          <a href="http://www.itcoos.com">Java架构技术</a>
          <a href="http://bbs.mayikt.com">Java面试宝典</a>
        </div>

        <div class="footer_right_top">
          <a href="#">帮助中心</a>
          <a href="#">联系我们</a>
          <a href="/licheng">关于我们</a>
          <a href="#">网站地图</a>
          <span>客服小微QQ：483966038</span>
          <span class="footer_email">Email：644064779@.com</span>
          <span>官方粉丝群：193086273</span>
        </div>
        <div class="footer_right_bottom">
          Copyright ©2016-2019 上海每特教育科技有限公司 版本所有Powered by &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;蚂蚁课堂&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;沪ICP备18018606号-2
        </div>
      </div>
      <div class="footer_right">
        <img src="http://static.mayikt.com/gzhewm.png" />
        <span>官方公众号</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
.footer {
  height: 136px;
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.footer_right_top {
  padding-top: 36px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
}
.footer_right_top a {
  position: relative;
  line-height: 15px;
  margin-right: 18px;
  display: inline-block;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  opacity: 0.6;
}
.footer_right_top span {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  opacity: 0.6;
}
.footer_right_top {
  padding-top: 36px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
}
.footer_right_bottom {
  padding-top: 16px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  opacity: 0.6;
}
.footer_right {
  width: 90px;
  text-align: center;
}
.footer_right_top a::after {
  content: "";
  display: inline-block;
  height: 15px;
  position: absolute;
  top: 0;
  right: -10px;
  border-left: 1px solid rgba(102, 102, 102, 0.6);
}
</style>