// 新的链接文字
const newText = ["首页", "临时", "博客", "关于我"];  

// 鼠标移入事件
function change_over(t) {
    // 存储原始文字到 sessionStorage
    let originalText = sessionStorage.getItem('text_' + t.index);
    if (!originalText) {
        originalText = t.innerText; // 如果没有存储过原始文字，则获取当前文字
        sessionStorage.setItem('text_' + t.index, originalText); // 存储原始文字到 sessionStorage
    }
    t.innerHTML = newText[t.index]; // 修改链接文字
}

// 鼠标移出事件
function change_out(t) {
    // 恢复原始文字
    let originalText = sessionStorage.getItem('text_' + t.index); // 从 sessionStorage 获取原始文字   
    t.innerHTML = originalText ? originalText : t.innerText; // 如果有存储过原始文字，则恢复原始文字，否则恢复当前文字
}

// 为每个链接添加鼠标事件
document.querySelectorAll("nav a").forEach((a, index) => {
    a.index = index;  // 为每个链接分配索引
    a.addEventListener("mouseover", () => change_over(a)); // 添加鼠标移入事件
    a.addEventListener("mouseout", () => change_out(a)); // 添加鼠标移出事件
});
