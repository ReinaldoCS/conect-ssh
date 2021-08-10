var SSH = require('simple-ssh');


// Informações de conexão com servidor.

var ssh = new SSH({
  host: process.env.HOST_SERVER,
  user: process.env.HOST_SERVER_USER,
  pass: process.env.HOST_SERVER_PASS
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
* Realiza a conexão com servidor usando o simple-ssh e executando os comando passado
* passado na variável coomandLine e com isso realiza com console.log nas respotas e
* em caso de erro mostra o código do erro.
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




/***
 *  [ ] try catch de erro de conexão
 *  
 ***/