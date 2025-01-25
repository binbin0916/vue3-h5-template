import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  // 动画方式
  easing: "ease",
  // 递增进度条的速度
  speed: 500,
  // 是否显示加载ico
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 200,
  // 初始化时的最小百分比
  minimum: 0.3,
  // 加载条的父元素
  parent: "body",
  // 添加类名
  template: `<div class="bar" role="bar"><div class="peg"></div></div>`
});

export default NProgress;
