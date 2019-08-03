module.exports = (async () => {
  const alice = await loadIdentity(key);
  await channel.send(addMember(key));

  return channel.pack(alice);
})();