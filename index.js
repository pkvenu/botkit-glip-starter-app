/**
 * Created by pawan.venugopal on 3/26/17.
 */
"use strict";

require('dotenv').config();

var Botkit = require('botkit'),
    os = require('os');



var controller = Botkit.glipbot({
    debug: false,
});

var bot = controller.spawn({
    server: process.env.GLIP_SERVER,
    appKey: process.env.GLIP_APPKEY,
    appSecret: process.env.GLIP_APPSECRET,
    username: process.env.GLIP_USERNAME,
    password: process.env.GLIP_PASSWORD,
    extension: process.env.GLIP_EXTENSION,
}).startRTM();

controller.setupWebserver(process.env.port || 3000, function(err, webserver){
    webserver.get('/', function (req ,res) {
        res.send(':)');
    });
    controller.createWebhookEndpoints(webserver, bot);
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

