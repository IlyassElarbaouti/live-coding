/* eslint-disable */
/*

//global
{
    'enviromentRecord':{
        'message:'test',
        'weight':55,
        createMessenger:func,
        ....
    }
    outerLexicalEnv:null;
}

//createMessenger
{
    'enviromentRecord':{
         'message' : 'Just learn it',
         'sender' : 'Gromcode',
         'sendMessage': func,
        ....
    }
    outerLexicalEnv:global;
}
//run
{
    'enviromentRecord':{}
    outerLexicalEnv:global;
}
//sendMessage
{
    'enviromentRecord':{

    }
    outerLexicalEnv:createMessenger;
}
*/
const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}
for(let i =0;i<5;i+=1){
    console.log(i)
}
if(true){
    const currentDay = 'monday'
    console.log(message)
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.sendMessage('testName')
run();
const messenger1 = createMessenger();
messenger1.setSender('nova poshta');
messenger1.sendMessage('andrei');
const messenger2 = createMessenger();
messenger1.setSender('Rozetka');
messenger1.setMessage('Denis');
messenger1.sendMessage('Yevgen');
const messenger3 = createMessenger();