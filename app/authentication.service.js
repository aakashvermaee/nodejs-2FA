const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

const name = 'Demo 2FA';

exports.getTwoFactorAuthenticationCode = function () {
  const secretCode = speakeasy.generateSecret({
    name
  });

  return {
    otpauth_url,  // Protocol OTPA compatible with Google Authenticator
    base32        // used to validate user's identity
  } = secretCode;
}

exports.respondWithQRCode = async function (data, response) {
  await qrcode.toFileStream(response, data);
}
