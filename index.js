#!/usr/local/bin/node
// clis by angleman, MIT
// String.js for the command line
"use strict"
var argv  = require('minimist')(process.argv.slice(2))
var S     = require('string')

var value = argv._[0]

if (argv.camelize           || argv.cam) value = S(value).camelize().s
if (argv.capitalize         || argv.cap) value = S(value).capitalize().s
if (argv.collapseWhitespace || argv.col) value = S(value).collapseWhitespace().s
if (argv.dasherize          || argv.das) value = S(value).dasherize().s
if (argv.decodeHTMLEntities || argv.dec) value = S(value).decodeHTMLEntities().s
if (argv.escapeHTML         || argv.esc) value = S(value).escapeHTML().s
if (argv.unescapeHTML       || argv.une) value = S(value).unescapeHTML().s
if (argv.humanize           || argv.hum) value = S(value).humanize().s
if (argv.slugify            || argv.slu) value = S(value).slugify().s
if (argv.stripPunctuation   || argv.pun) value = S(value).stripPunctuation().s
if (argv.stripTags          || argv.tag) value = S(value).stripTags().s
if (argv.trim               || argv.tri) value = S(value).trim().s
if (argv.underscore         || argv.und) value = S(value).underscore().s
if (argv.count)                          value = S(value).count(argv.count).s
if (argv.cou)                            value = S(value).cou(argv.count).s
if (argv.times)                          value = S(value).times(argv.times).s
if (argv.tim)                            value = S(value).times(argv.tim).s


console.log(value)