const Discord = require("discord.js");

const client = new Discord.Client();

const Database = require("@replit/database")
const db = new Database()
db.set("key", "value").then(() => {});
db.get("key").then(value => {});
db.delete("key").then(() => {});
db.list().then(keys => {});
db.list("prefix").then(matches => {});

const prefix = "kze_";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
    else if (command === "set") {
  db.set(args[0], args[1]).then(() => {
    message.channel.send(`I saved <${args[1]}> to ${args[0]}`);
  });
}
else if (command === "get") {
  db.get(args[0]).then(value => {
    message.channel.send(`The link for ${args[0]} is <${value}>!`);
  })
}
else if (command === "name")
message.channel.send(`Khoh Zong Eu`)
    else if (command === "echo") {
  const string = args.join(" ");
  message.channel.send(string);
}
  else if (command === "yell"){
    const string = args.join("");
    const uppercase = string.toUpperCase();
    message.channel.send(uppercase)
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});

client.login(process.env.BOT_TOKEN);