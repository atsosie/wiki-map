module.exports = function authenticateUser (req, res, next) {
  if (!req.session.username) {
    const error = {
      status: 401,
      message: "Please login or register to continue."
    };
  } else {
    next();
  }
};
