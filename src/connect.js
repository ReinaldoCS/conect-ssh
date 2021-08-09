var SSH = require('simple-ssh');

var ssh = new SSH({
    host: '192.168.1.13',
    user: 'usertest',
    pass: '1234'
});


ssh
  .exec('pasdwd -v', {
      out: function(stdout) {
          console.log(stdout);
      },
      exit: function(code) {
        code && console.log(`Code error: ${code}`);
    }
  })
  .exec('echo $USER', {
    out: function(stdout) {
        console.log(stdout);
    },
    exit: function(code) {
      code && console.log(`Code error: ${code}`);
  }
})

.start();