const express = require('express');

const { generateTwoFactorAuthenticationCode } = require('./app/authentication.controller');

const app = express();

app.get('/auth/2fa/generate', generateTwoFactorAuthenticationCode);

const PORT = 4000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Running on: ${PORT}`);
});