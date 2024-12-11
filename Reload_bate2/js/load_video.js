window.onload = function() {
    const video = document.getElementById('video-background'); // 获取视频元素
    const content = document.getElementById('content'); // 获取页面内容
    const loading = document.getElementById('loading'); // 获取加载提示

    // 如果视频元素存在
    if (video) {
        // 视频播放时触发
        video.onplay = function() {
            console.log('视频开始播放，立即显示页面内容');
            // 隐藏loading，显示content
            loading.style.visibility = 'hidden';  // 隐藏加载提示，但保持占位
            content.style.visibility = 'visible'; // 显示页面内容
        };

        // 处理视频加载错误
        video.onerror = function() {
            console.error('视频加载失败，请检查视频路径');
            loading.innerHTML = '视频加载失败，请检查视频路径';  // 提示错误信息
        };
    } else {
        console.error('未找到视频元素');
        loading.innerHTML = '视频元素不存在';
    }
};
