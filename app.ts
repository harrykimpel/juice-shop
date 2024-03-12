/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

require('newrelic');

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
