module.exports = (async () => {
  const key = await createIdentity({
    name: 'Bob Bobson',
    email: 'bob.bobson@example.com',
    passphrase: 'Bob1',
  });

  const identity = await loadIdentity(key, 'Bob1');
  return identity;
})();