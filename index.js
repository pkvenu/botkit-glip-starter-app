/**
 * Created by pawan.venugopal on 3/26/17.
 */
"use strict";

require('dotenv').config();

var Botkit = require('botkit'),
    os = require('os'),
    fs = require('fs'),
    accessToken = "",
    platform = null;



if (!process.env.clientId || !process.env.clientSecret || !process.env.port) {
        console.log('Error: Specify clientId clientSecret and port in environment');
        process.exit(1);
}

var controller = Botkit.glipbot({
    debug: true
}).configureGlipApp({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirectUri,
    apiRoot: process.env.apiRoot
    // accessToken: '',
    // subscriptionId: ''
});

readAccessToken()

function readAccessToken(){
  try {
    fs.accessSync('token.dat');
    accessToken = fs.readFileSync('token.dat', 'utf8');
  }catch (e) {
    accessToken = ""
  }
}

function storeAccessToken(accessToken){
  fs.writeFile('token.dat', accessToken, function(err) {
    if(err)
      console.log(err)
  })
}

var bot = controller.spawn({});

controller.setupWebserver(process.env.port || 3000, function(err, webserver){
    controller.createWebhookEndpoints(webserver, bot,  function () {
        console.log("Online");
    });

    controller.createOauthEndpoints(webserver, bot, accessToken, function(err, req, res, token) {
        if(err) {
            res.status(500).send('ERROR: ' + err);
        } else {
            platform = controller.getRCPlatform();
            storeAccessToken(token);
            //res.send('Success!');
        }
    })

});

controller.hears(['hi','hello'], 'message_received', function (bot, message) {
    bot.reply(message, "hi, you can ask me questions.");
});

// Usage: uptime
controller.hears(['uptime'],'message_received',function(bot, message) {
    console.log(message);
    var hostname = os.hostname();
    var uptime = formatUptime(process.uptime());
    bot.reply(message,'I am a bot! I have been running for ' + uptime + ' on ' + hostname + '.');
});

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}
