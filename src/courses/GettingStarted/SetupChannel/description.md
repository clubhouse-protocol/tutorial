# Creating a channel

Now that we have an identity (now stored in `identity`) we can use that to call `createChannel` along with a list of initial members to create a channel key, which we can then use to load our channel with `loadChannel`. To load a channel you also have to provide a transporter. For now you can use the one stored in `transporter`

## Example

```javascript
const channelKey = await createChannel(yourIdentity);

const channel = await loadChannel(yourIdentity, channelKey, someTransporter);
```

## Goal

Create a channel using your `identity`and the provided `transporter`. Create one without any other members for now