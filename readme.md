##### Step I: Register Application

1. In the [app console](http://login.amazon.com/manageApps)
 register a new application by clicking the Register new Application button. Fill out all the necessary info for your app.
1. From the Application screen, click Web Settings. Take note of the client id and client secret.
1. Specify Allowed JavaScript Origins to provide a popup authentication experience to your users, or Allowed Return URLs to provide a redirect authentication experience. Note. All these URLS have to be in https. 


##### Step II: Adding Login with Amazon button

1. Add the following code to your website where you would like the button to appear.
```
<a href="#" id="LoginWithAmazon">
  <img border="0" alt="Login with Amazon"
    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
    width="156" height="32" />
</a>
```
1. Optional. Add the following link to your website where you would like a "Logout" prompt to appear:
```
<a id="Logout">Logout</a>
```
1. Refresh the page to confirm that the button now appears on your website.


##### Step III: Add the SDK for JavaScript

1. Add the following code after the opening `<body>` in your page to load the JavaScript into your page.
```
<div id="amazon-root"></div>
<script type="text/javascript">
  window.onAmazonLoginReady = function() {
    amazon.Login.setClientId('YOUR-CLIENT-ID');
  };
  (function(d) {
    var a = d.createElement('script'); a.type = 'text/javascript';
    a.async = true; a.id = 'amazon-login-sdk';
    a.src = 'https://api-cdn.amazon.com/sdk/login1.js';
    d.getElementById('amazon-root').appendChild(a);
  })(document);
</script>
```
1. Replace YOUR-CLIENT-ID with your Client ID from the Register Your Application section above.
1. Add the following JavaScript after the Login with Amazon button on your site.
```
<script type="text/javascript">
  document.getElementById('LoginWithAmazon').onclick = function() {
    options = { scope : 'profile' };
    amazon.Login.authorize(options, 'https://www.example.com/handle_login.php');
    return false;
  };
</script>
```
1. Replace www.example.com with the domain of your website.