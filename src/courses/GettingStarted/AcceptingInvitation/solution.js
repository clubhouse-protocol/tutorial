module.exports = (async () => {
  const alice = await loadIdentity(key);
  const channel = await loadChannel(identity, invitation, transporter, alice);
  return channel;
})();