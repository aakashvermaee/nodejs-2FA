const { getTwoFactorAuthenticationCode, respondWithQRCode } = require('./authentication.service');

exports.generateTwoFactorAuthenticationCode = async (req, res) => {
  const user = "aakash.verma@cygrp.com";

  const {
    otpauth_url,
    base32
  } = getTwoFactorAuthenticationCode();

  respondWithQRCode(otpauth_url, res);
}