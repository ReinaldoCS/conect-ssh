var SSH = require('simple-ssh');

var ssh = new SSH({
  host: '192.168.1.13',
  user: 'usertest',
  pass: '1234'
});


ssh
.exec('cd /home/usertest/test', {
  out: function(stdout) {
    console.log(stdout);
  },
  exit: function(code) {
    code && console.log(`Code error: ${code}`);
  }
})
.exec('./script.sh testando codigo com javascript', {
  out: function(stdout) {
    console.log(stdout);
  },
  exit: function(code) {
    code && console.log(`Code error: ${code}`);
  }
})

.start();