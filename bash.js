const pwd = require('./pwd')
const ls = require('./ls');

// const cmd = data.toString().trim();

// pwd()
// ls()

const writePrompt = function(){
    process.stdout.write('\nprompt > ');
}

writePrompt()

process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        pwd()
        writePrompt();
    } else if (cmd === "ls") {
        ls(writePrompt)
       
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        writePrompt()
    }
    
    
});

