/*
 * models出口文件
 */

var mongoose = require('mongoose');
var config = require('../config.js');

// models
require('./user.js');
require('./message.js');

exports.User = mongoose.model('User');
exports.Message = mongoose.model('Message');
