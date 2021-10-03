const ViberBot = require("viber-bot").Bot;
const BotEvents = require("viber-bot").Events;
const TextMessage = require("viber-bot").Message.Text;

const say = (response, message) => response.send(new TextMessage(message));

// Creating the bot with access token, name and avatar
const bot = new ViberBot({
  authToken: "4dd1b0a38027d01f-c2a15cd28744ac5c-3784344e9199cec8",
  name: "BERTAFON", // <--- Your bot name here
  avatar: "http://api.adorable.io/avatar/200/isitup", // It is recommended to be 720x720, and no more than 100kb.
});

bot.onSubscribe((response) => {
  say(
    response,
    `Привіт, ${response.userProfile.name}. Я ${bot.name}! У мене Ви можете дізнатись номер телефону агента, за його кодом.`
  );
});

bot.onTextMessage(/./, (message, response) => {
  say(response, message.text);
});


module.exports = {bot, say}