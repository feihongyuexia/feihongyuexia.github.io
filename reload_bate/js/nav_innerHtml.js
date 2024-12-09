// // 新的链接文字
// const newText = ["首页", "临时", "博客", "关于我"];
// // 原始文字
// const yuanshi = ["Home", "Temp", "Blog", "About"];

// // 鼠标移入事件处理函数
// function change_over(t) {
//     t.innerHTML = newText[t.index]; // 修改链接文字为新的文字
// }

// // 鼠标移出事件处理函数
// function change_out(t) {
//     t.innerHTML = yuanshi[t.index]; // 使用 yuanshi 数组中的文字
// }

// // 为每个链接添加鼠标事件
// document.querySelectorAll("nav a").forEach((a, index) => {
//     a.index = index;  // 为每个链接分配索引，作为标识
//     a.addEventListener("mouseover", () => change_over(a)); // 添加鼠标移入事件
//     a.addEventListener("mouseout", () => change_out(a)); // 添加鼠标移出事件
// });

// 新的链接文字
const newText = ["首页", "临时", "博客", "关于我"];
// 原始文字
const yuanshi = ["Home", "Temp", "Blog", "About"];

function handleLinks() {
    // 鼠标移入事件处理函数
    function change_over(t) {
        t.innerHTML = newText[t.index];
    }

    // 鼠标移出事件处理函数
    function change_out(t) {
        t.innerHTML = yuanshi[t.index];
    }

    // 为每个链接添加鼠标事件
    document.querySelectorAll("nav a").forEach((a, index) => {
        a.index = index;
        a.addEventListener("mouseover", () => change_over(a));
        a.addEventListener("mouseout", () => change_out(a));
    });
}

function init() {
    if (window.innerWidth > 900) {
        handleLinks();  // 屏幕宽度大于900px时启用事件
    }
    // else {
    //     console.log("屏幕宽度较小，跳过事件处理");
    // }
}

// 页面加载时初始化
init();

// 在窗口尺寸变化时重新检查
window.addEventListener('resize', init); 
