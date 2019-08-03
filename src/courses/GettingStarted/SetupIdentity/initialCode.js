module.exports = (async () => {
  const key = await createIdentity(/* identity params */);

  const identity = 'Bob\'s identity'
  return identity;
})();