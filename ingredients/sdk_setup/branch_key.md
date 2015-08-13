### Branch Key

{% section explanation %}
Now you need to add the Branch Key that you received on the Dashboard into your app.
{% endsection %}

{% if page.ios %}

Your app key can be retrieved on the [Settings](https://dashboard.branch.io/#/settings) page of the dashboard. Now you need to add it to YourProject-Info.plist (Info.plist for Swift).

1. In plist file, mouse hover "Information Property List" which is the root item under the Key column.
1. After about half a second, you will see a "+" sign appear. Click it.
1. In the newly added row, fill in "branch_key" for its key, leave type as String, and enter your app key obtained in above steps in its value column.
1. Save the plist file.

{% endif %}
<!---       /iOS-specific Branch Key -->


{% if page.android %}

Your app key can be retrieved on the [Settings](https://dashboard.branch.io/#/settings) page of the dashboard. Now you need to add it to your project workspace.

1. Navigate to to res/values/strings.xml
2. Navigate to AndroidManifest.xml and add the following `<meta-data` tag:

{% highlight xml %}
<application>
    <!-- Other existing entries -->

    <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_jbgnjxvlhSb6PGH23BhO4hiflcp3y8kx" />
    <meta-data android:name="io.branch.sdk.BranchKey.test" android:value="key_test_jkptOCZtmtxhOMZ11ynbXecdDCd93cbr" />
</application>
{% endhighlight %}


{% endif %}
<!---       /Android-specific Branch Key -->
