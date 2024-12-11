// 获取文本元素
var textElement = document.querySelector('.video h2');

// 创建一个canvas元素
var canvas = document.createElement('canvas');
canvas.width = textElement.offsetWidth;
canvas.height = textElement.offsetHeight;

// 获取canvas的2D上下文
var ctx = canvas.getContext('2d');

// 设置字体样式
ctx.font = '4em Arial';

// 绘制文本
ctx.fillText(textElement.textContent, 0, canvas.height / 2);

// 获取文本的像素数据
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// 创建一个新的canvas元素
var newCanvas = document.createElement('canvas');
newCanvas.width = canvas.width;
newCanvas.height = canvas.height;

// 获取新canvas的2D上下文
var newCtx = newCanvas.getContext('2d');

// 将像素数据绘制到新canvas上
newCtx.putImageData(imageData, 0, 0);

// 将新canvas的背景设置为渐变
newCtx.fillStyle = 'linear-gradient(to bottom, #ffffff, #09a1f8)';

// 将新canvas的背景应用到文本元素上
textElement.style.backgroundImage = 'url(' + newCanvas.toDataURL() + ')';
