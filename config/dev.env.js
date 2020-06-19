'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AIR_PORT:'"http://utest.yoozoo.com/"'
  // AIR_PORT:'"/api"'
})
