# Inviting alice

Okay you have your identity and you have your channel, and now we just need some people.
To invite people we need to add them to our channel. As our channel runs the default ruleset of dictatorship with you as the only dictator, you are allowed to just add people.
Alice would love to join and has send her key which is stored in the `key` variable

**Available variable:**
* `channel`: Your channel
* `loadIdentity`: an `async` function which can load an identity from a key
* `key`: Alice's armored key
* `addMember`: a function which takes a key and formats an "Add member" message

The first thing we need to do is send a message in the `addMember` format to add Alice as a user (remember, you are a dictator you have the power!)
After that you need to `.pack` a channel description for Alice's identity

**Goal**

Return an invitation for Alice
