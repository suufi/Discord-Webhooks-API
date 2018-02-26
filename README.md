# Discord-Webhooks-API
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](https://github.com/feross/standard)

## Prerequisites 
* Node.js
* Process Manager such as [Nodemon](https://nodemon.io/) or [PM2](http://pm2.keymetrics.io/)

## How To Install & Run
1. Clone this repository by running in your Terminal: `$ git clone git@github.com:suufi/Discord-Webhooks-API.git`
2. Run `$ npm install` in your Terminal to install dependencies
3. Go to the API.js file and make any necessary changes including setting a default webhook URL
4. Run `$ node API.js` to make sure there are no errors.
5. Finish by deploying with `$ pm2 API.js` or $ nodemon API.js` depending on which process manager you are using

## How To Use
1. Copy the WebhookModule script into your game (preferably ServerScriptService)
2. Configure the WebhookModule script to contain your API URL
3. Require the WebhookModule in your Script
4. Invoke the Send method

Example:
```lua
local WebhookModule = require(game.ServerScriptService.WebhookModule);

local WebhookMessage = WebhookModule:Send( { username = "ROBLOX", message = "test" } );
print(WebhookMessage);
```
