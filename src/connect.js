var SSH = require('simple-ssh');


// Informações de conexão com servidor.

var ssh = new SSH({
  host: '192.168.1.13',
  user: 'usertest',
  pass: '1234'
});

// Comando a ser executando.

var commandLine = `
  pwd;
  cd test;
  ./script.sh teste;
`;

console.log('================================')
console.log(process.env.VAR_TEST)
console.log('================================')

/***
  Realiza a conexão com servidor usando o simple-ssh e executando os comando passado
  passado na variável coomandLine e com isso realiza com console.log nas respotas e
  em caso de erro mostra o código do erro.
***/

ssh
.exec(commandLine, {
  out: function(stdout) {
    console.log(stdout);
  },
  exit: function(code) {
    code && console.log(`Code error: ${code}`);
  }
})
.start();