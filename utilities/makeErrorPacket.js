module.exports = function(error, message) {
  return {
    message,
    payload: error
  }
}
