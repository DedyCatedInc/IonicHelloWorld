# References:
http://stackoverflow.com/questions/36282191/requesting-permissions-at-run-time-ionic
http://stackoverflow.com/questions/31836492/add-cordova-diagnostic-plugin-in-ionic
One thing to take in mind when testing ngCordova plugins in your browser via
$ ionic serve is that it often result in cordova is not defined.
Most ngCordova plugins will not work in a web browser because they use native
device code.
Can you please try to emulate your app en check if it works? (You might want to
change that console.log() to something else so you can see if it works in your
emulator. Print a $scope for example.)
Example: $ ionic emulate ios or $ ionic emulate android.
