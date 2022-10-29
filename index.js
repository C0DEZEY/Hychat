
//createing text boxes 
const messages = document.querySelector('#messages');
    const messageBox = document.querySelector('#messageBox');
// Show the message sent 
    function showMessage(message) {
      messages.textContent += `\n\n${message}`;
      messages.scrollTop = messages.scrollHeight;
      messageBox.value = '';
    }
    //    const socket = new WebSocket('ws://localhost:8080'); 
    const socket = new WebSocket('wss://hychat.onrender.com');
    socket.addEventListener('open', function (event) {
        console.log('Connected to WS Server')
        showMessage("Connected to Websocket")
    });


    const color = ['&4','&c','&6','&e','&2','&a','&b','&3','&1','&9','&d','&5','&f','&7','&8','&0','&l','&k','&n','&o','&r']
    socket.onmessage = event => {
         message = event.data;
         cleanmessage = message.replace(new RegExp(color.join('|'), 'g'), '');
            showMessage(cleanmessage)
    }

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });

    


    const sendMessage = () => {
         username = document.getElementById("username").value;
         sent = document.getElementById("input").value;
        if (username.toLowerCase() === "codezey" && username.toLowerCase() === "c0dezey"  && username.toLowerCase() === "c0dez3" && username.toLowerCase() ===  "codez3y" && username.toLowerCase() === "c0d3z3y" && username.toLowerCase() === "cod3z3y" && username.toLowerCase() === "codez3y"  && username.toLowerCase() === "c0d3z3y"  && username.toLowerCase() === "cod3z3y" && username.toLowerCase() === "c0d3zoy" && username.toLowerCase() === "server" && username.toLowerCase() === "console"&& username.toLowerCase() ===  "admin" && username.toLowerCase() === "nobleknight" && username.toLowerCase() === "bunx") {
            showMessage("Sorry you cannot use that name.")
        } else {
            socket.send("&c[WEB] &r" + username + ": " + sent);
            showMessage("[WEB] " +username + ": " + sent)
        }
    }
    document.querySelector('#myButton').addEventListener('click', function(event) {
  event.preventDefault();
});
