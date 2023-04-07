const http = require('http');
const { parse } = require('querystring');

// http모듈을 사용하여 HTTP 서버를 만드는 코드이다.
http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head>
          <title>Digital Clock</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-size: 10rem;
              font-family: 'Helvetica Neue', sans-serif;
            }
          </style>
        </head>
        <body>
          <script>
            function updateTime() {
              const date = new Date();
              const year = date.getFullYear().toString().padStart(4, '0');
              const month = (date.getMonth() + 1).toString().padStart(2, '0');
              const day = date.getDate().toString().padStart(2, '0');
              
              const hours = date.getHours().toString().padStart(2, '0');
              const minutes = date.getMinutes().toString().padStart(2, '0');
              const seconds = date.getSeconds().toString().padStart(2, '0');
              document.body.innerText = \`\${year}:\${month}:\${day}:\${hours}:\${minutes}:\${seconds}\`;
            }
            setInterval(updateTime, 1000);
          </script>
        </body>
      </html>
    `);
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head>
          <title>404 Not Found</title>
        </head>
        <body>
          <h1>404 Not Found</h1>
        </body>
      </html>
    `);
    res.end();
  }
}).listen(3050, () => {
  console.log('Server running at http://localhost:3050/');
});