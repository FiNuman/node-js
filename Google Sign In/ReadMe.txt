#Google logIn & SignUp.
Google authentication needed clientID(36Line), clientSecret(37Line), callbackURL(38Line).
Go to this link https://console.cloud.google.com/apis/credentials
And flow this step -> Create new project -> Save and back -> Select OAuth consent screen ->Select external
-> Fill up and save -> Move back to the Credentials -> Click create Credentials -> Select authclient id
-> Select web Application -> Give origin(it's also work with http://localhost) and redirect Uri.
Here a popup window open with clientID,clientSecret,callbackURL And set to these lines. 23, 43, 43(Google Sign In.js). 
