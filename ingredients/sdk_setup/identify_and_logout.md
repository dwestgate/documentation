{% section header %}### Identifying Your Users{% endsection %}


{% section pre_explanation %}{% endsection %}

Branch automatically tracks unique devices. However, to make full use of our powerful API, you should also identify users with whichever form of unique identification your app uses. Add these two lines of code.

{% if page.ios %}

Add a `setIdentity:` call wherever you create or login a user.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
// your app's userId, 127 chars or less
[[Branch getInstance] setIdentity:@"1234"];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
// your app's userId, 127 chars or less
Branch.getInstance().setIdentity("1234")
{% endhighlight %}
{% endtab %}
{% endtabs %}


Add a `logout` call anywhere you allow the user to logout. 

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] logout];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().logout()
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- iOS identify and logout -->

{% if page.android %}
Invoke the `setIdentity` call whenever you create or login a user.

{% highlight java %}
Branch.getInstance(getApplicationContext()).setIdentity("your user identity");
{% endhighlight %}


Add a `logout` call anywhere you allow the user to logout. 

{% highlight java %}
// your app's userId, 127 chars or less
Branch.getInstance(getApplicationContext()).logout();
{% endhighlight %}
{% endif %}
<!--- Android identify and logout -->

{% protip title='Note:'  %}
`Logout` should only be called when the user logs out. Calling it at other times could lead to hard-to-discover errors. Failing to call `logout` can likewise lead to bugs if multiple users log in on the same device.
{% endprotip %}

{% if page.cordova %}

Invoke the `setIdentity` call whenever you create or login a user.

{% highlight js %}
branch.setIdentity(
    "Your user identity",
    callback (err, data)
);
{% endhighlight %}

Structure of the callback `data` object:

{% highlight js %}
{
	identity_id:             '12345',	// Server-generated ID of the user identity
	link:                    'url',		// New link to use (replaces old stored link)
	referring_data_parsed:    { },		// Returns the initial referring data for this identity, if exists, as a parsed object.
	referring_identity:      '12345'	// Returns the initial referring identity for this identity, if exists.
}
{% endhighlight %}

Add a `logout` call anywhere you allow the user to logout. 

{% highlight js %}
branch.logout(
    callback (err)
);
{% endhighlight %}
{% endif %}

{% if page.xamarin %}

Invoke the `SetIdentityAsync` call whenever you create or login a user.

{% highlight c# %}
Branch branch = Branch.GetInstance ();
branch.SetIdentityAsync("your user id", this);  // Where this implements IBranchIdentityInterface
{% endhighlight %}

Add a `LogoutAsync` call anywhere you allow the user to logout. 

{% highlight c# %}
Branch.GetInstance(getApplicationContext()).LogoutAsync(this); // Where this implements IBranchIdentityInterface
{% endhighlight %}

{% endif %}

{% if page.unity %}
Invoke the `setIdentity` call whenever you create or login a user.

{% highlight c# %}
Branch.setIdentity("your user id");
{% endhighlight %}

Add a `logout` call anywhere you allow the user to logout. 

{% highlight c# %}
Branch.logout();
{% endhighlight %}
{% endif %}

{% if page.adobe %}
Invoke the `setIdentity` call whenever you create or login a user.

{% highlight java %}
branch.setIdentity("your user id");
{% endhighlight %}

Add a `logout` call anywhere you allow the user to logout. 

{% highlight java %}
branch.logout();
{% endhighlight %}
{% endif %}

{% if page.titanium %}
Invoke the `setIdentity` call whenever you create or login a user.

{% highlight js %}
branch.setIdentity(
    "Your user identity",
    callback (err, data)
);
{% endhighlight %}

Structure of the callback `data` object:

{% highlight js %}
{
	identity_id:             '12345',	// Server-generated ID of the user identity
	link:                    'url',		// New link to use (replaces old stored link)
	referring_data_parsed:    { },		// Returns the initial referring data for this identity, if exists, as a parsed object.
	referring_identity:      '12345'	// Returns the initial referring identity for this identity, if exists.
}
{% endhighlight %}

Add a `logout` call anywhere you allow the user to logout. 

{% highlight js %}
branch.logout(
    callback (err)
);
{% endhighlight %}
{% endif %}