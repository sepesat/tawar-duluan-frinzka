const http = require('http');

const postData = JSON.stringify({
  email: 'test@example.com',
  password: 'test123'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS:`, JSON.stringify(res.headers));
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('BODY:', data);
    try {
      console.log('PARSED:', JSON.parse(data));
    } catch (e) {
      console.log('ERROR PARSING JSON:', e.message);
    }
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
