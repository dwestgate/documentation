
### SendSMS() Example

Here is a fully-functional web page that you can use as a template for your text-me-the-app page.

{% highlight html %}

<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript">
            (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-v1.6.1.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data addListener removeListener setIdentity logout track link sendSMS referrals credits creditHistory applyCode validateCode getCode redeem banner closeBanner".split(" "), 0);

            branch.init('YOUR-BRANCH-KEY');
            function sendSMS(form) {
                var phone = form.phone.value;
                var linkData = {
                    tags: [],
                    channel: 'Website',
                    feature: 'TextMeTheApp',
                    data: {
                        "foo": "bar"
                    }
                };
                var options = {};
                var callback = function(err, result) {
                    if (err) {
                        alert("Sorry, something went wrong.");
                    }
                    else {
                        alert("SMS sent!");
                    }
                };
                branch.sendSMS(phone, linkData, options, callback);
                form.phone.value = "";
            }
        </script>
    </head>
    <body>
    	Send SMS
        <form onsubmit="sendSMS(this); return false;">
        	<input id="phone" name="phone" type="tel" placeholder="(650) 123-4567" />
        	<br/>
        	<input type="submit"/>
        </form>
    </body>
</html>
{% endhighlight %}

This is all you need to create a branded text-me-the-app page. Customize to your heart's content.
