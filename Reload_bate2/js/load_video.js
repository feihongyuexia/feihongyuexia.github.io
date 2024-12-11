// 接收video元素
const video = document.getElementById('video-background');
// 接收loading元素
const loading = document.getElementById('loading'); 
// 接收video的父元素
video.addEventListener('load', function() { 
    loading.style.display = 'none'; // 隐藏loading元素
    video.style.display = 'block';  // 显示video元素
});