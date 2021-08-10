import { Client } from 'ssh2';

const conn = new Client();

const commands = `
  ls -l\necho "asdasdasdasdasdasdasdasda"\nexit
`;


// ==================================

console.log(process.env.HOST_SERVER)
console.log(process.env.HOST_SERVER_USER)
console.log(process.env.HOST_SERVER_PASS)

// ==================================

conn.on('ready', () => {
  console.log('Client :: ready');
  conn.shell((err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
      console.log('Stream :: close');
      conn.end();
    }).on('data', (data: string) => {
      console.log('OUTPUT: ' + data);
    });
    stream.end(commands);
  });
}).connect({
  host: '192.168.100.125',
  port: 22,
  username: 'usertest',
  password: '1234'
});