# Intermittent Node.js Server Crashes

This repository demonstrates a bug causing intermittent crashes in a Node.js HTTP server. The server appears to function correctly most of the time, but occasionally crashes without any apparent error messages in the console logs.  Debugging this type of issue can be very challenging.

## Bug Description

The server, implemented using the built-in `http` module, abruptly terminates without any visible clues in the logs. This behaviour is non-deterministic, making reproduction and debugging difficult.  The crash is likely related to resource exhaustion or unhandled exceptions, but the exact cause is hidden.

## Solution

The solution involves adding comprehensive error handling to catch any unexpected exceptions and implementing appropriate logging to track the server's health and resource usage.