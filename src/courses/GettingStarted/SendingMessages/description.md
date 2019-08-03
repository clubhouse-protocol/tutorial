# Sending messages

messages can be send using `channel.send` and accept any JSON serializable object.

As with `channel.update`, `channel.send` returns an array of new messages, including the one you just send. This is to ensure all internal ids get updated correctly

## Goal

Send a message containing the string `hello!` and return the list of new messages