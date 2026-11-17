const http = require('http');

const port = process.env.PORT || 3000;
let visits = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/api/hello') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ message: '你好，我是正在运行的服务', time: new Date().toISOString() }));
    return;
  }
  if (req.url === '/') {
    visits += 1;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><title>良辰的第一个网页服务</title></head>
<body style="font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;text-align:center;padding:48px;color:#2f3a33;">
<h1>你好，这是良辰的第一个网页服务</h1>
<p>这个页面不是现成的文件，是服务器上的程序在你打开这一刻现生成的。</p>
<p>现在服务器时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
<p>你是第 ${visits} 次访问（服务重启后会清零）</p>
<p>还有一个接口示例：<a href="/api/hello">/api/hello</a></p>
</body>
</html>`);
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
