## Base Version
The Base version of the like gate is not a complete copy and paste solution but will get you started with the necessary logic to tie into your application. It's recommended for more advanced users or complicated flows.

## Class-based Version
The class-based version of the full channel like gate allows you to specify whether content will be shown or not by adding classes to wrapping divs.

Available Classes:  
`<div class="auth not_connected"></div>` - Shown to users who are not logged into Facebook or have not authorized your application yet. This is a good place for the login button.  
`<div class="auth connected"></div>` - Shown to users who have authorized your application but is not dependent on users liking your page.  
`<div class="likes not_fans"></div>` - Shown to users who are not fans of your application when checked OR users who are not logged in / authorized.  
`<div class="likes fans_only"></div>` - Shown only to fans of your page (and are logged in + authorized as it's necessary to check their like status).  

## What do you need to know?
You must add the appropriate login buttons or like buttons to allow users to progress to the next stage of the authentication or like-gate process. Without buttons, they'll have no way to authorize or like the page.  

For a login button (required to accept permissions), you can use:  
`<button id="login" onClick="user_login();">Login</button>`  

You can generate your like button at the developer site: https://developers.facebook.com/docs/reference/plugins/like/  
You must use either the HTML5 or XFBML version, NOT the iframe version.  

Alternatively, just edit the snippet below:  
`<div class="fb-like" data-href="YOUR_PAGE_URL" data-send="true" data-width="450" data-show-faces="true"></div>`  