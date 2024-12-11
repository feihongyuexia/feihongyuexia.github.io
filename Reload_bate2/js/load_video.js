window.onload = function() {
    const video = document.getElementById('video-background'); // 获取视频元素
    const content = document.getElementById('content'); // 获取页面内容
    const loading = document.getElementById('loading'); // 获取加载提示

    // 监听视频加载事件
    video.onloadeddata = function() {
        content.style.display = 'block'; // 显示页面内容
        loading.style.display = 'none';  // 隐藏加载提示
    };
};
