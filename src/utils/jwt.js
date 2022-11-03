const expressJwt = require("express-jwt");
const config = require("../config/base-config");
const userService = require("../services/user.service");

module.exports = jwt;

function jwt() {
  const secret = config.ACCESS_SECRET;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      "/login",
      "/api/v1/auth/login",
      "/api/v1/auth/refresh",
      "/api/v1/users/register",
      "/api/v1/users/search",
      "/api/v1/roles/seed",
      "/api/v1/institutes/seed",
      "/api/v1/graphql",
      "/api/v1/institutes",
      /^\/api\/v1\/helpers\/file-upload\/.*\/.*/,
    ],
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);
  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }
  done();
}
