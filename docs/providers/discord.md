# Discord

[Source Code](https://github.com/AlfieGoldson/auth-module/blob/dev/lib/providers/github.js)

## Usage

```js
auth: {
  strategies: {
      discord: {
        client_id: '...',
        client_secret: '...',
        scope: ['connections', 'guilds', 'identify']
      },
  }
}
```

Anywhere in your application logic:

```js
this.$auth.loginWith("discord");
```

💁 This provider is based on [oauth2 scheme](../schemes/oauth2.md) and supports all scheme options.

## Obtaining `client_id` and `client_secret`

This option is **REQUIRED**. To obtain one, create your app in [Create a new Oauth APP](https://discordapp.com/developers/applications/) and use provided "Client ID" and "Client Secret".
