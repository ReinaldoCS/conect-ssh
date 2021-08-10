import { Client } from 'ssh2';

import { commandShell } from './commandShell'

const conn = new Client();

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
    stream.end(commandShell);
  });
}).connect({
host: process.env.HOST_SERVER,
port: 22,
username: process.env.HOST_SERVER_USER,
password: process.env.HOST_SERVER_PASS
});


// host: '192.168.100.125',
// port: 22,
// username: 'usertest',
// password: '1234'
