# Creating an identity

`clubhouse-protocol` revolves around **OpenPGP** identities.

You create an identity key using `createIdentity` by passing it a name and e-mail and an optional passphrase.

The email and name are only for the certificate and will not be used for verification, so you are not obligated to provide correct informations here 😉.

This identity key can then be loaded into an identity using `loadIdentity`

## Example

```javascript
const key = await createIdentity({
  name: 'John Doe',
  email: 'john.doe@example.com',
  passphrase: 'Password1',
});

const identity = loadIdentity(key, 'Password1');
```

## Goal

Create an identity for **Bob Bobson** with the email **bob.bobson@example.com** and the passphrase **Bob1**