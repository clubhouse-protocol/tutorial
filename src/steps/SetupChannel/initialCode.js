module.exports = (async () => {
  const channelKey = await createChannel(/* channel params */);

  const channel = 'Bob\'s channel'
  return channel;
})();