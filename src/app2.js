import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  // 可以得到li
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    // 这样我不用直接操作css,我可以在css中定义.active的样式
    //禁用css(),show(),hide()这3个操作css的api
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger('click')
