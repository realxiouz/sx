exports.main = (event, context) => {
  return {
    event,
    context,
    openid: event.userInfo.openId,
  }
}