/*
Promise It Won’t Hurt
───────────────────────
 To reject or not to reject
 Exercise 4 of 13

(node:2562) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.

# What happens if we reject AND resolve a promise?

The ES2015 spec states that a promise, once fullfilled or rejected, may
not change states for the rest of its lifetime.  This is an important
feature of promises and it is also one of the things that differentiates it
from an EventEmitter (and other forms of repeatable callbacks).

Callback-style code usually requires a callback function to be invoked
somewhere in the body of the function that it was passed to.  Many, if not
most times, that function is intended to be called only once.  However, through
errors in logic, problems with syntax, or other simple mistakes it is
possible to call your callback multiple times and create vexing states in your
app or insidious bugs.

    /*
     * This code is bad, but nonetheless common and has the nasty result of
     * calling the supplied callback more than once (possibly destroying the
     * earth?). It is conventional to return the first invocation of callback
     * but it’s easy to overlook!
     *
    
    function myFunc(user, callback) {
      if (user) {
        callback(null, user);
      }
    
      return callback('No user was found', null);
    }

## Task

Let’s build a simple script to prove to ourselves that promises may only
resolve one time and all future attempts to resolve them will simply be ignored.

First, create a promise using the Promise constructor as we have been doing.

In the promise’s executor, immediately attempt to fulfill the promise with a
value of 'I FIRED'.

Then, after the fulfill call, immediately try to reject the promise with an
Error created with parameter 'I DID NOT FIRE'.

After the promise creation, create a function onRejected with one parameter
error that prints the Error’s message with console.log.

Lastly, pass console.log and the function you just created as the success
and rejection handlers respectively.

If successful, your script should only log “I FIRED” and should not log
“I DID NOT FIRE”.

Note that unlike the prior exercises, you do not have to use setTimeout with
this.


 » To print these instructions again, run: promise-it-wont-hurt print
 » To execute your program in a test environment, run: promise-it-wont-hurt run program.js
 » To verify your program, run: promise-it-wont-hurt verify program.js
 » For help run: promise-it-wont-hurt help
 
 */
 
 var promise = new Promise(function(fulfill, reject){
     fulfill("I FIRED");
     reject(new Error("I DID NOT FIRE"));
 });
 
 function onReject(error){
     console.log(error.message);
 }
 
 promise.then(console.log, onReject);