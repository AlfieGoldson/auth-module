const { assignDefaults, addAuthorize } = require("./_utils");

module.exports = function discord(strategy) {
  assignDefaults(strategy, {
    _scheme: "oauth2",
    authorization_endpoint: "https://discordapp.com/api/oauth2/authorize",
    token_endpoint: "https://discordapp.com/api/oauth2/token",
    userinfo_endpoint: "https://discordapp.com/api/users/@me",

    scope: ["connections", "guilds", "identify"]
  });

  addAuthorize.call(this, strategy);
};
