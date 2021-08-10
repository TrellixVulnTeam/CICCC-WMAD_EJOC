// Create a Node JS Express or HTTP Application that exposes API routes for the following

// Computer Architecture
// Compute CPU's
// Computer RAM (total and available)
// Computer Disk Space (total and available)
// Computer Hostname
// Computer IP Address


// I should be able to call the application like this

// http://localhost:port/api/arch               
// ----> shows architecture
// http://localhost:port/api/cpus             
//  ----> shows cpus
// http://localhost:port/api/ram           
// ----> shows ram
// http://localhost:port/api/diskspace       
// ----> shows disk space
// http://localhost:port/api/hostname   
// ----> shows hostname
// http://localhost:port/api/ipaddress       
//  ----> shows ip address

const http = require('http');
const os = require('os');
// console.log(http);

function myCallback(request, result) {
  // 200 is a http status message, just like 404? 200 says ok
  result.writeHead(200, { 'Content-Type': 'text/html' });
  // console.log(request.url);

  if (request.url != "") {
    
    switch (request.url) {
      case '/api/arch':
        result.write(os.arch());
        break;
      case '/api/cpu':
        result.write(os.cpus());
        break;
      case '/api/ram':
        result.write(os.totalmem());
        break;
      case '/api/hdd':
        result.write(os.freemem());
        break;
      case '/api/hostname':
        result.write(os.hostname());
        break;
      case '/api/ip':
        result.write(os.networkInterfaces());
        break;
    }
  }
  result.end();
}

http.createServer(myCallback).listen(8080, ()=>{
  console.log('Server starts')
});