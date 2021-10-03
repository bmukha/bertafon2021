const http = require("http");
const {bot, say} = require("./viber-bot")

const port = process.env.PORT || 8080;

http
  .createServer(bot.middleware())
  .listen(port, () =>
    bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL)
  );
