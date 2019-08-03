module.exports = (async () => {
  const channelKey = await createChannel(identity, []);

  const channel = await loadChannel(identity, channelKey, transporter);
  return channel;
})();