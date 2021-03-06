---
type: recipe
directory: getting-started
title: 1. SDK Integration Guide
page_title: Add the Branch SDK to your app
description: This page will tell you how to quickly add the Branch SDK to your Android, iOS, Cordova, Phonegap, Xamarin, Unity, Air or Titanium app.
redirect_from:
- /recipes/add_the_sdk/
- /recipes/add_the_sdk/ios/
- /recipes/add_the_sdk/android/
- /recipes/add_the_sdk/cordova/
- /recipes/add_the_sdk/xamarin/
- /recipes/add_the_sdk/unity/
- /recipes/add_the_sdk/adobe/
- /recipes/add_the_sdk/titanium/
platforms:
- ios
- android
- cordova
- xamarin
- unity
- adobe
- titanium
- react
sections:
- guide
- advanced
---

{% if page.guide %}

{% prerequisite %}
Before using the Branch SDK, you must first [sign up for an account](https://dashboard.branch.io) and complete the [onboarding process](https://start.branch.io/).
{% endprerequisite %}

## Get the SDK files

<!--- iOS -->
{% if page.ios %}

With extensive use, the iOS SDK footprint is **180 kb**.

### Install with CocoaPods

The recommended way to install the SDK is via CocoaPods:

1. Add `pod "Branch"` to your podfile.
1. Run `pod install` from the command line.

### Install with Carthage

Alternatively, you could install the SDK via Carthage:

1. Add `github "BranchMetrics/iOS-Deferred-Deep-Linking-SDK"` to your Cartfile.
1. Run `carthage update` from the command line.

{% protip title="If you do not use CocoaPods or Carthage" %}

You can [install the SDK manually]({{base.url}}/getting-started/sdk-integration-guide/advanced/ios#install-the-sdk-manually).

{% endprotip %}

{% endif %}
<!--- /iOS -->

<!--- Android-->
{% if page.android %}

With extensive use, the Android SDK footprint is **187 kb**.

### Install with Gradle

Add `compile 'io.branch.sdk.android:library:1.+'` to the dependencies section of your `build.gradle` file.

{% protip %}

You can also install the SDK manually by [downloading the latest version](https://s3-us-west-1.amazonaws.com/branchhost/Branch-Android-SDK.zip) or [cloning our open-source GitHub repo](https://github.com/BranchMetrics/branch-android-sdk).
{% endprotip %}

{% endif %}
<!--- /Android -->

<!--- Cordova -->
{% if page.cordova %}

### Register a URI scheme

{% ingredient universal-links-requirement %}{% endingredient %}

Branch opens your app by using its URI scheme (`yourapp://`), which should be unique to your app.

1. On the [Link Settings](https://dashboard.branch.io/#/settings/link) page of the Branch dashboard.
1. For iOS projects, ensure that **I have an iOS App** is checked and **iOS URI Scheme** is filled.
1. For Android projects, ensure that **I have an Android App** is checked and **Android URI Scheme** is filled.

### Command line module install

You can install the Branch SDK by using one of several different command line tools. Here are the install parameters to use:

| Parameter | Usage
| --- | ---
| `BRANCH_KEY` | Your Branch live API key, retrieved from the [Settings page](https://dashboard.branch.io/#/settings) of the Branch dashboard.
| `URI_SCHEME` | The URI scheme for your app (**not** including `://`) from the step above.

{% tabs %}
{% tab cordova %}
{% highlight sh %}
cordova plugin add https://github.com/BranchMetrics/Cordova-Ionic-PhoneGap-Deferred-Deep-Linking-SDK.git --variable BRANCH_KEY=key_live_xxxxxxxxxxxxxxx --variable URI_SCHEME=yourApp
{% endhighlight %}

{% endtab %}

{% tab npm %}
{% highlight sh %}
npm install branch-cordova-sdk --variable BRANCH_KEY=key_live_xxxxxxxxxxxxxxx --variable URI_SCHEME=yourApp
{% endhighlight %}

{% endtab %}

{% tab phonegap %}
{% highlight sh %}
phonegap plugin add https://github.com/BranchMetrics/Cordova-Ionic-PhoneGap-Deferred-Deep-Linking-SDK.git --variable BRANCH_KEY=key_live_xxxxxxxxxxxxxxx --variable URI_SCHEME=yourApp
{% endhighlight %}

{% endtab %}

{% endtabs %}
{% endif %}
<!--- /Cordova -->

<!--- Xamarin -->
{% if page.xamarin %}

### Install as a NuGet Package

The Branch Xamarin SDK is now available as a [NuGet package](https://www.nuget.org/packages/Branch-Xamarin-Linking-SDK).  You will need to add the package to your Android, iOS and Forms (if applicable) projects.  

1. Right click on each project and select `Add` -> `Add NuGet Package` or double click on the Packages folder to bring up the NuGet package dialog in Xamarin Studio.  
2. Find the _Branch Xamarin Linking SDK_ and select it.  This will add the required assemblies to your projects.  You need to do this for each project that will use Branch calls.  This includes the Android and iOS projects even if this is a Forms based app _since an initialization call needs to be added to each of the platform specific projects._

You can also [build and reference the assemblies directly]({{base.url}}/getting-started/sdk-integration-guide/advanced/xamarin#install-the-sdk-manually).

{% endif %}
<!--- /Xamarin -->

<!--- Unity -->
{% if page.unity %}

### Get the files

1. [Download the latest SDK version](https://s3-us-west-1.amazonaws.com/branchhost/BranchUnityWrapper.unitypackage) or [clone our open-source GitHub repository](https://github.com/BranchMetrics/Unity-Deferred-Deep-Linking-SDK).
1. Import the `BranchUnityWrapper.unitypackage` into your project by clicking `Assets -> Import Package`.

### Configure the package and add Branch key

1. To allow Branch to configure itself, drag a **BranchPrefab** asset to your scene.
1. Specify your `branchUri` and `branchKey` in the properties.
   - `branchKey`: get your Branch key from [the Branch dashboard](https://dashboard.branch.io/#/settings).
   - `branchUri`: this must be the same value as you entered in [the Branch link settings](https://dashboard.branch.io/#/settings/link). Do **not** include the `://` characters.

{% image src='/img/pages/getting-started/sdk-integration-guide/unity_branch_key.png' full center alt='Unity plugin installation' %}

{% protip title="For iOS projects" %}

When building an iOS project:

1. All required frameworks will be added automatically.
1. Objective C exceptions will be enabled automatically.
1. URI Scheme will be added into .plist automatically.

Branch requires ARC, and we don’t intend to add `if` checks throughout the SDK to try to support pre-ARC. However, for **Unity 4.6** you can add flags to the project to compile the Branch files with ARC, which should work fine for you. Simply add `-fobjc-arc` to all Branch files.
{% endprotip %}

{% caution title="For Android projects" %}
We attempt to automatically add an Android manifest flag to support deep linking, but check it before building your project. You may need to click the "Update Android Manifest" button to add it yourself.
{% endcaution %}

{% endif %}
<!--- /Unity -->

<!--- Adobe -->
{% if page.adobe %}

1. [Download the latest SDK version](https://github.com/BranchMetrics/Branch-AIR-ANE-SDK/archive/master.zip) or clone [our open-source GitHub repository](https://github.com/BranchMetrics/AIR-ANE-Deferred-Deep-Linking-SDK).
1. Import the `Branch.ane` file into your project. Depending your IDE you might need to import the `Branch.swc` as well.
1. Open your `*-app.xml` and add this line: `<extensionID>io.branch.nativeExtensions.Branch</extensionID>`

{% endif %}
<!--- /Adobe -->

<!--- Titanium -->
{% if page.titanium %}

### iOS module installation

1. [Download the latest SDK version](https://s3-us-west-1.amazonaws.com/branchhost/Branch-Titanium-iOS-SDK.zip) or [clone our open-source GitHub repository](https://github.com/BranchMetrics/Titanium-Deferred-Deep-Linking-SDK) and locate the ZIP file inside the `iphone` folder.
1. Extract the contents.
3. Copy the `iphone` folder to your Titanium `modules` folder.

### Android module installation

1. [Download the latest SDK version](https://s3-us-west-1.amazonaws.com/branchhost/Branch-Titanium-Android-SDK.zip) or [clone our open-source GitHub repository](https://github.com/BranchMetrics/Titanium-Deferred-Deep-Linking-SDK) and locate the ZIP file inside the `android/dist` folder.
1. Extract the contents.
3. Copy the `android` folder to your Titanium `modules` folder.

{% endif %}
<!--- /Titanium -->

{% if page.react %}

1. Run `npm install rnpm -g` (skip this step if `rnpm` is already installed on your system).
1. Navigate go your root project directory and download the Branch SDK package: `npm install --save branch-react-native-sdk`.
1. Configure the package: `rnpm link branch-react-native-sdk`.

### iOS project installation

1. Navigate into the SDK package directory: `cd node_modules/branch-react-native-sdk`.
1. Use CocoaPods to install dependencies: `pod install`.
1. Drag **/node_modules/branch-react-native-sdk/Pods/Pods.xcodeproj** into the **Libraries** folder of your Xcode project. {% image src='/img/pages/getting-started/sdk-integration-guide/pod-import.png' full center alt='Import CocoaPods project' %}
1. In Xcode, drag the `libBranch.a` Product from **Pods.xcodeproj** into your the **Link Binary with Libraries** section of **Build Phases** for your project's target. {% image src='/img/pages/getting-started/sdk-integration-guide/link-pod-binary.png' full center alt='Link Pod product with project binary' %}

{% protip %}
See [this page](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking) for detailed documentation on importing iOS libraries into a React Native project.
{% endprotip %}

### Android project installation

Sometimes `rnpm` link creates incorrect relative paths, leading to compilation errors. Ensure that the following files look as described and all linked paths are correct:

#### android/settings.gradle

{% highlight js %}
...

include ':branch-react-native-sdk', ':app'

// The relative path to the branch-react-native-sdk directory tends to often be prefixed with one too many "../"s
project(':branch-react-native-sdk').projectDir = new File(rootProject.projectDir, '../node_modules/branch-react-native-sdk/android')
{% endhighlight %}

#### android/app/build.gradle

{% highlight js %}
...

dependencies {
    ...
    compile project(':branch-react-native-sdk')
}
{% endhighlight %}
{% endif %}
<!--- /React -->


{% if page.xamarin %}
## iOS: Configure Xcode Project

In your project's `YourProject-Info.plist` file:

1. In https://dashboard.branch.io/#/settings/link, tick `I have an iOS App` checkbox and enter your URI Scheme (e.g.: `yourapp://`) into the text box.

2. You can register your app to respond to direct deep links (`yourapp://` in a mobile browser) by adding `CFBundleURLTypes` block. Also, make sure to change `yourapp` to a unique string that represents your app name. 

{% image src='/img/pages/getting-started/sdk-integration-guide/xamarin_branch_ios_uri.png' full center alt='iOS URI' %}

### iOS: Enable Universal Links

In iOS 9.2, Apple dropped support for URI scheme redirects. You must enable Universal Links if you want Branch-generated links to work in your iOS app. To do this:

1. enable `Associated Domains` capability on the Apple Developer portal when you create your app's bundle identifier. 
2. In https://dashboard.branch.io/#/settings/link, tick the `Enable Universal Links` checkbox and provide the Bundle Identifier and Apple Team ID in the appropriate boxes. 
3. Finally, create a new file named `Entitlements.plist` in the root directory of your project. Enable `associated-domains` and add `applinks:bnc.lt`. You may add more entitlement keys if you have any.

{% image src='/img/pages/getting-started/sdk-integration-guide/xamarin_branch_ios_domains.png' full center alt='Associated Domains' %}

{% endif %}

{% if page.ios or page.react %}
## {% if page.react %}iOS: {% endif %}Configure Xcode Project

### Add your Branch key
 
1. Retrieve your Branch Key on the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.
1. In Xcode, open your project's Info.plist file in the Navigator (on the left side).
1. Mouse hover "Information Property List" (the root item under the Key column).
1. After about half a second, you will see a `+` sign appear. Click it.
1. Add a new row with the following values:

| Key | Type | Value |
| :--- | --- | --- |
| branch_key | String | [your Branch Key] |

### Register a URI scheme

{% ingredient universal-links-requirement %}{% endingredient %}

Branch opens your app by using its URI scheme (`yourapp://`), which should be unique to your app.

1. On the [Link Settings](https://dashboard.branch.io/#/settings/link) page of the Branch dashboard, ensure that **I have an iOS App** is checked and **iOS URI Scheme** is filled.
1. In Xcode, click your project in the Navigator (on the left side).
1. Select the "Info" tab.
1. Expand the "URL Types" section at the bottom.
1. Click the `+` button to add the URL Scheme you've selected, as below:

{% image src='/img/pages/getting-started/sdk-integration-guide/urlType.png' full center alt='URL Scheme Demo' %}

{% endif %}

{% if page.android or page.react %}
## {% if page.react %}Android: {% endif %}Configure Manifest

### Add your Branch key

1. Retrieve your Branch Key on the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.
1. Open your `AndroidManifest.xml` and add the following `<meta-data>` tag:

{% highlight xml %}
<application>
    <!-- Other existing entries -->

    <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_xxxxxxxxxxxxxxx" />

</application>
{% endhighlight %}

### Register for Google Play Install Referrer

Add this snippet to your `AndroidManifest.xml`:

{% highlight xml %}
<receiver android:name="io.branch.referral.InstallListener" android:exported="true">
	<intent-filter>
		<action android:name="com.android.vending.INSTALL_REFERRER" />
	</intent-filter>
</receiver>
{% endhighlight %}

{% protip title="Alternative Configuration" %}
- [I already use the Install Referrer in my app]({{base.url}}/getting-started/sdk-integration-guide/advanced/android#custom-install-referrer-class)
{% endprotip %}

### Register a URI scheme

Branch opens your app by using its URI scheme (`yourapp://`), which should be unique to your app.

1. On the [Link Settings](https://dashboard.branch.io/#/settings/link) page of the Branch dashboard, ensure that **I have an Android App** is checked and **Android URI Scheme** is filled.
1. Choose the `Activity` you want to open up when a link is clicked. This is typically your `SplashActivity` or a `BaseActivity` that all other activities inherit from.
1. Inside your `AndroidManifest.xml`, locate where the selected `Activity` is defined.
1. Within the `Activity` definition, insert the intent filter provided below. Change `yourApp` under `android:scheme` to the URI scheme you've selected.

{% highlight xml %}
<intent-filter>
	<data android:scheme="yourApp" android:host="open" />
	<action android:name="android.intent.action.VIEW" />
	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />
</intent-filter>
{% endhighlight %}

### Enable Auto Session Management

Register an `Application` class in your Manifest as follows:

{% highlight xml %}
 <application
    android:name="io.branch.referral.BranchApp">
{% endhighlight %}

{% protip title="Alternative Configurations" %}

- [I already have a custom Application class]({{base.url}}/getting-started/sdk-integration-guide/advanced/android#using-an-existing-custom-application-class)
- [I need to support pre-14 Android]({{base.url}}/getting-started/sdk-integration-guide/advanced/android#supporting-pre-14-android)

{% endprotip %}

{% endif %}
<!---       /Android-specific Branch Key -->

{% if page.xamarin %}
## Android: Configure Manifest

In your project's `manifest` file, you can register your app to respond to direct deep links (`yourapp://` in a mobile browser) by adding the second intent filter block. Also, make sure to change `yourapp` to a unique string that represents your app name.

Make sure that this activity is launched as a `singleTask`. This is important to handle proper deep linking from other apps like Facebook.

{% highlight c# %}
[Activity (Label = "Your app label", MainLauncher = true, Icon = "@mipmap/icon",
        LaunchMode = LaunchMode.SingleTask)]

[IntentFilter (new[]{"android.intent.action.VIEW"},
        Categories=new[]{"android.intent.category.DEFAULT", 
        "android.intent.category.BROWSABLE"},
        DataScheme="yourapp",
        DataHost="open")]
{% endhighlight %}

Make sure that your project has permissions:

- AccessNetworkState
- Internet

To understand how to work with android manifest, read Xamarin documentation:

- [Working with android manifest](https://developer.xamarin.com/guides/android/advanced_topics/working_with_androidmanifest.xml/)
- [Add permissions to android manifest](https://developer.xamarin.com/recipes/android/general/projects/add_permissions_to_android_manifest/)

{% endif %}

{% if page.adobe %}
## Add your Branch key

1. Retrieve your Branch Key on the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.
1. In your project's `*-app.xml` file, add the following platform-specific snippet(s):

### iOS Projects

{% highlight xml %}
<iPhone><InfoAdditions><![CDATA[
    <!-- other stuff -->
    <key>branch_key</key>
    <string>key_live_xxxxxxxxxxxxxxx</string>
]]></InfoAdditions></iPhone>
{% endhighlight %}

### Android Projects

{% highlight xml %}
<android><manifestAdditions><![CDATA[
    <!-- other stuff -->
    <application>
        <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_xxxxxxxxxxxxxxx" />
        <meta-data android:name="io.branch.sdk.BranchKey.test" android:value="key_test_yyyyyyy" />
        <meta-data android:name="io.branch.sdk.TestMode" android:value="false" />
        <activity android:name="io.branch.nativeExtensions.branch.BranchActivity" android:launchMode="singleTask" android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
    </application>
]]></manifestAdditions></android>
{% endhighlight %}

## Register a URI scheme

{% ingredient universal-links-requirement %}{% endingredient %}

Branch opens your app by using its URI scheme (`yourapp://`), which should be unique to your app.

1. On the [Link Settings](https://dashboard.branch.io/#/settings/link) page of the Branch dashboard, ensure that **I have an iOS App** and/or **I have an Android App** is checked and **iOS URI Scheme** and/or **Android URI Scheme** is filled.
1. In your project's `*-app.xml` file, insert the platform-specific snippet(s) below. Change `yourApp` to the URI scheme you've selected.

### iOS Projects

{% highlight xml %}
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>yourApp</string>
        </array>
    </dict>
</array>
{% endhighlight %}

### Android Projects

{% highlight xml %}
<activity>
    <intent-filter>
        <data android:scheme="yourApp" />
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
    </intent-filter>
</activity>
{% endhighlight %}
{% endif %}

{% if page.titanium %}

## Add your Branch key and register a URI scheme

### iOS Projects

{% ingredient universal-links-requirement %}{% endingredient %}

Branch opens your app by using its URI scheme (`yourapp://`), which should be unique to your app.

1. Retrieve your Branch Key on the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.
1. On the [Link Settings](https://dashboard.branch.io/#/settings/link) page of the Branch dashboard, ensure that **I have an iOS App** is checked and **iOS URI Scheme** and is filled.
1. In your project's `tiapp.xml` file, insert the snippet below. Change `yourApp` to the URI scheme you've selected.

{% highlight xml %}
  <ios>
    <plist>
      <dict>
        <!-- Add branch key as key-value pair -->
        <key>branch_key</key>
        <string>key_live_xxxxxxxxxxxxxxx</string>
        <!-- Add unique string for direct deep links -->
        <key>CFBundleURLTypes</key>
        <array>
          <dict>
            <key>CFBundleURLSchemes</key>
            <array>
              <string>yourApp</string>
            </array>
          </dict>
        </array>
      </dict>
    </plist>
  </ios>
{% endhighlight %}

### Android Projects

#### Add your Branch key

1. Retrieve your Branch Key on the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.
1. Open your `tiapp.xml` and add the following `<meta-data>` tag:

{% highlight xml %}
<application>
    <!-- Other existing entries -->

    <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_xxxxxxxxxxxxxxx" />

</application>
{% endhighlight %}

#### Register a URI scheme

Branch opens your app by using its URI scheme (`yourapp://`), which should be unique to your app.

1. On the [Link Settings](https://dashboard.branch.io/#/settings/link) page of the Branch dashboard, ensure that **I have an Android App** is checked and **Android URI Scheme** is filled.
1. Choose the `Activity` you want to open up when a link is clicked. This is typically your `SplashActivity` or a `BaseActivity` that all other activities inherit from.
1. Inside your `tiapp.xml`, locate where the selected `Activity` is defined.
1. Within the `Activity` definition, insert the intent filter provided below. Change `yourApp` under `android:scheme` to the URI scheme you've selected.

{% highlight xml %}
<intent-filter>
	<data android:scheme="yourApp" android:host="open" />
	<action android:name="android.intent.action.VIEW" />
	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />
</intent-filter>
{% endhighlight %}

{% caution %}
To ensure proper deep linking from other apps such as Facebook, this Activity must be launched in `singleTask` mode. This is done in the Activity definition as so:

{% highlight xml %}
<activity
    android:name="com.yourapp.SplashActivity"
    android:label="@string/app_name"
    android:launchMode="singleTask">
{% endhighlight %}
{% endcaution %}

{% endif %}

## Start a Branch session

A Branch session needs to be started every single time your app opens. We check to see if the user came from a link and if so, the callback method returns any deep link parameters for that link. Please note that the callback function is always called, even when the network is out.

<!---    iOS -->
{% if page.ios %}

{% tabs %}
{% tab objective-c %}

1. In Xcode, open your **App.Delegate.m** file.
1. Add `#import "Branch.h"` at the top to import the Branch framework.
1. Find the line beginning with:

{% highlight objc %}
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:
{% endhighlight %}
{% endtab %}

{% tab swift %}
1. Add a bridging header to import the Branch framework into your project. For help on adding a bridging header, see [this StackOverflow answer](http://stackoverflow.com/a/28486246/1914567).
1. In Xcode, open your **AppDelegate.swift** file.
1. Find the line beginning with:

{% highlight swift %}
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions:
{% endhighlight %}
{% endtab %}
{% endtabs %}

Underneath this line, add the following snippet:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
Branch *branch = [Branch getInstance];
[branch initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {
    if (!error) {
        // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
        // params will be empty if no data found
        // ... insert custom logic here ...
        NSLog(@"params: %@", params.description);
    }
}];
{% endhighlight %}
{% endtab %}

{% tab swift %}
{% highlight swift %}
let branch: Branch = Branch.getInstance()
branch.initSessionWithLaunchOptions(launchOptions, andRegisterDeepLinkHandler: { params, error in
    if (error == nil) {
        // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
        // params will be empty if no data found
        // ... insert custom logic here ...
        NSLog("params: %@", params.description)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% protip %}
If you're using **Xcode 6.3 or newer**, have imported the SDK, and are still seeing a "Branch.h file not found" or some other compiler error, please [read this support article](https://support.branch.io/support/solutions/articles/6000109874-xcode-error-branch-not-found).
{% endprotip %}

## Handle incoming links

{% tabs %}
{% tab objective-c %}

Finally, add these two new methods to your **AppDelegate.m** file. The first responds to URI scheme links. The second responds to Universal Links, but will not be active until you [configure Universal Links]({{base.url}}/getting-started/universal-app-links).

{% highlight objc %}
// Respond to URI scheme links
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    // pass the url to the handle deep link call
    [[Branch getInstance] handleDeepLink:url];

    // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
    return YES;
}

// Respond to Universal Links
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
    BOOL handledByBranch = [[Branch getInstance] continueUserActivity:userActivity];
    
    return handledByBranch;
}
{% endhighlight %}

{% endtab %}
{% tab swift %}

Finally, add these two new methods to your **AppDelegate.swift** file. The first responds to URI scheme links. The second responds to Universal Links and Spotlight listings, but will not be active until you [configure Universal Links]({{base.url}}/getting-started/universal-app-links).

{% highlight swift %}
// Respond to URI scheme links
func application(application: UIApplication, openURL url: NSURL, sourceApplication: String?, annotation: AnyObject?) -> Bool {
    // pass the url to the handle deep link call
    Branch.getInstance().handleDeepLink(url);

    // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
    return true
}

// Respond to Universal Links
func application(application: UIApplication, continueUserActivity userActivity: NSUserActivity, restorationHandler: ([AnyObject]?) -> Void) -> Bool {
    // pass the url to the handle deep link call

    return Branch.getInstance().continueUserActivity(userActivity)
}
{% endhighlight %}

{% endtab %}
{% endtabs %}

{% endif %}
<!---    /iOS -->

{% if page.android %}

Open the `Activity` for which you registered the `intent` in the previous section, and hook into the `onStart` and `onNewIntent` lifecycle methods by adding these overrides:

{% highlight java %}
@Override
public void onStart() {
    super.onStart();
    // Lifecycle callback method
}

@Override
public void onNewIntent(Intent intent) {
    this.setIntent(intent);
}
{% endhighlight %}

In the same `Activity`, add the following snippet:

{% highlight java %}
Branch branch = Branch.getInstance();

branch.initSession(new Branch.BranchReferralInitListener(){
    @Override
    public void onInitFinished(JSONObject referringParams, BranchError error) {
        if (error == null) {
            // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
            // params will be empty if no data found
            // ... insert custom logic here ...
        } else {
            Log.i("MyApp", error.getMessage());
        }
    }
}, this.getIntent().getData(), this);
{% endhighlight %}

{% protip title="If you are not using automatic session management" %}
You will need to initialize the session using `Branch branch = Branch.getInstance(getApplicationContext());` instead of `Branch branch = Branch.getInstance();` in the snippet above.
{% endprotip %}

{% protip title="If you are calling this method inside a fragment"%}
`this.getIntent().getData()` refers to the data associated with an incoming intent. Please use `getActivity()` instead of passing in `this`.
{% endprotip %}
{% endif %}

{% if page.cordova %}

Use the the following methods to initialize a Branch session when the `deviceready` event fires and every time the `resume` event fires.

{% highlight js %}
onDeviceReady: function() {
    Branch.initSession();
},
onResume: function() {
    Branch.initSession();
},
initialize: function() {
    document.addEventListener('resume', onResume, false);
    document.addEventListener('deviceready', onDeviceReady, false);
},
{% endhighlight %}

Then add the method `DeepLinkHandler()` which will act as our callback when the session beings. The deep link data will be included here:

{% highlight js %}
function DeepLinkHandler(data) {
    alert('Data from initSession: ' + data.data);
}
{% endhighlight %}

{% caution title="Watch out for content security policies" %}
If `data` is null and `err` contains a string denoting a request timeout, make sure to whitelist `api.branch.io` and `bnc.lt` in your app's [content security policies](https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy).
{% endcaution %}

{% endif %}

{% if page.xamarin %}

{% protip title="Apps built without Xamarin Forms" %}
If your app doesn't use Xamarin Forms, please follow [these alternative instructions]({{base.url}}/getting-started/sdk-integration-guide/advanced/xamarin#initialization-for-non-forms-apps).
{% endprotip %}

### Android initialization

Add calls to the `OnCreate` and `OnNewIntent` methods of either your Application class or the first Activity you start. Be sure to replace `key_live_xxxxxxxxxxxxxxx` with your Branch key from the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.

{% highlight c# %}
public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsApplicationActivity
{
    protected override void OnCreate (Bundle savedInstanceState)
    {
        base.OnCreate (savedInstanceState);

        global::Xamarin.Forms.Forms.Init (this, savedInstanceState);

        App app = new App ();

        BranchAndroid.Init (this, "Your Branch key here", app);

        LoadApplication (app);
    }

    // Ensure we get the updated link identifier when the app is opened from the
    // background with a new link.
    protected override void OnNewIntent(Intent intent) {
        BranchAndroid.getInstance().SetNewUrl(intent.Data);
    }
}
{% endhighlight %}

### iOS initialization

Add these methods to your `AppDelegate.cs` file. Be sure to replace `key_live_xxxxxxxxxxxxxxx` with your Branch key from the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.

{% highlight c# %}
[Register ("AppDelegate")]
public class AppDelegate : global::Xamarin.Forms.Platform.iOS.FormsApplicationDelegate
{
    public override bool FinishedLaunching (UIApplication uiApplication, NSDictionary launchOptions)
    {
        global::Xamarin.Forms.Forms.Init ();

        App app = new App ();

        // Enable debug mode. 
        BranchIOS.Debug = true;
        BranchIOS.Init ("Your Branch key here", launchOptions, app);

        LoadApplication (app);

        return base.FinishedLaunching (uiApplication, launchOptions);
    }

    // For direct deep linking
    public override bool OpenUrl(UIApplication application,
        NSUrl url,
        string sourceApplication,
        NSObject annotation)
    {
        return BranchIOS.getInstance ().OpenUrl (url);
    }

    // For Universal Links
    public override bool ContinueUserActivity (UIApplication application,
        NSUserActivity userActivity,
        UIApplicationRestorationHandler completionHandler)
    {
        return BranchIOS.getInstance ().ContinueUserActivity (userActivity);
    }
    
    // For Push Nitifications
    public override void ReceivedRemoteNotification (UIApplication application,
        NSDictionary userInfo)
    {
        BranchIOS.getInstance ().HandlePushNotification (userInfo);
    }
}
{% endhighlight %}

{% endif %}

{% if page.unity %}
Insert the following methods into the main class of the scene to which you added BranchPrefab. The callback method should be visible from every scene in which you will use deep linked data.

{% caution title="Call initSession in first scene" %}
Please call initSession(..) in Start of your very first scene. Branch needs time to register for all of the iOS lifecycle calls before iOS calls them, in order to intercept the deep link data. If you call it after, you'll potentially miss data.
{% endcaution %}

{% highlight c# %}
using UnityEngine;
using System.Collections.Generic;

public class MyCoolBehaviorScript : MonoBehaviour {
    void Start () {
        Branch.initSession(CallbackWithBranchUniversalObject);
    }

    void CallbackWithBranchUniversalObject(universalObject, linkProperties, error) {
        if (error != null) {
            System.Console.WriteLine("Oh no, something went wrong: " + error);
        }
        else if (parameters.Count > 0) {
            System.Console.WriteLine("Branch initialization completed with the following params: " + universalObject.ToJsonString() + linkProperties.ToJsonString());
        }
    }
}
{% endhighlight %}

{% endif %}

{% if page.adobe %}
Inside your `Main.as` file, insert the following:

{% highlight java %}
// Import
import io.branch.nativeExtensions.branch.Branch;
import io.branch.nativeExtensions.branch.BranchEvent;

// Then create a Branch instance:
var branch:Branch = new Branch();

// Register two events before initializing the SDK:
branch.addEventListener(BranchEvent.INIT_FAILED, initFailed);
branch.addEventListener(BranchEvent.INIT_SUCCESSED, initSuccessed);

private function initFailed(bEvt:BranchEvent):void {
    trace("BranchEvent.INIT_FAILED", bEvt.informations);
}

private function initSuccessed(bEvt:BranchEvent):void {
    trace("BranchEvent.INIT_SUCCESSED", bEvt.informations);

    // params are the deep linked params associated with the link that the user clicked before showing up
    // params will be empty if no data found
    var referringParams:Object = JSON.parse(bEvt.informations);

    //trace(referringParams.user);
}

// Initialize the SDK:
branch.init();
{% endhighlight %}

{% caution %}
Be sure to have the INIT_SUCCESSED event called, otherwise read the bEvt.informations from the INIT_FAILED event.
{% endcaution %}
{% endif %}

{% if page.titanium %}
Initialize the SDK by inserting the following snippet into your `index.js` file:
 
{% highlight js %}
$.initialize = function(params) {
    $.window.open();

    $.initializeViews();
    $.initializeHandlers();

    Ti.API.info("start initSession");
    branch.initSession();
    branch.addEventListener("bio:initSession", $.onInitSessionFinished);

    if (OS_ANDROID) {
        Ti.Android.currentActivity.addEventListener("newintent", function(e) {
            Ti.API.info("inside newintent: " + e);
            $.window.open();
            branch.initSession();
        });
    }
};

$.onInitSessionFinished = function(data) {
    Ti.API.info("inside onInitSessionFinished");
    for (key in data) {
        if ((key != "type" && key != "source" && key != "bubbles" && key != "cancelBubble") && data[key] != null) {
            Ti.API.info(key + data["key"]);
        }
    }
}
{% endhighlight %}
{% endif %}

{% if page.react %}

### iOS initialization

1. In Xcode, open your **App.Delegate.m** file.
2. Add `#import "RNBranch.h"` at the top to import the Branch framework.
3. Find the line beginning with:

{% highlight objc %}
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:
{% endhighlight %}

Underneath this line, add the following snippet:

{% highlight objc %}
[RNBranch initSessionWithLaunchOptions:launchOptions isReferrable:YES];

NSURL *jsCodeLocation;
{% endhighlight %}

Finally, add these two new methods. The first responds to URI scheme links. The second responds to Universal Links, but will not be active until you [configure Universal Links]({{base.url}}/getting-started/universal-app-links).

{% highlight objc %}
// Respond to URI scheme links
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  if (![RNBranch handleDeepLink:url]) {
    // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
  }
  return YES;
}

// Respond to Universal Links
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
  return [RNBranch continueUserActivity:userActivity];
}
{% endhighlight %}

### Android initialization

In **android/app/src/main/java/com/xxx/MainActivity.java**, add the following:

{% highlight java %}
import android.content.Intent; // <-- import
import com.dispatcher.rnbranch.*; // <-- import

public class MainActivity extends ReactActivity {
    // ...

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNBranchPackage() // <-- add this line, if not already there
        );
    }

    // Add onStart
    @Override
    public void onStart() {
        super.onStart();

        RNBranchModule.initSession(this.getIntent().getData(), this);
    }

    // Add onNewIntent
    @Override
    public void onNewIntent(Intent intent) {
        this.setIntent(intent);
    }

    // ...  
}
{% endhighlight %}

{% endif %}

{% if page.android %}{% else %}

## {% if page.ios %}{% else %}iOS: {% endif %}Submitting to the App Store

After integrating the Branch SDK, you need to let Apple know that you use the IDFA. To follow proper protocol when submitting your next release to the App Store, you should:

1. Answer `Yes` to the question **Does this app use the Advertising Identifier (IDFA)?**
1. Check the two boxes for:
   - **Attribute this app installation to a previously served advertisement** 
   - **Attribute an action taken within this app to a previously served advertisement**

{% image src='/img/pages/getting-started/submitting-apps/idfa.png' center full alt='IDFA configuration on iTunes Connect' %}

{% protip title="Why does Branch use the IDFA?" %}
Branch uses the IDFA to identify users across our entire partner network, greatly increasing match accuracy rate. You can read more about this on the [Matching accuracy page]({{base.url}}/getting-started/matching-accuracy).

The only situation in which you do not need to perform these steps is if you installed the Branch framework manually (without using CocoaPods) and elected **not** to import `AdSupport.framework`
{% endprotip %}

{% endif %}

{% if page.android %}

## Submitting to the Play Store

By default, Branch collects and uses the [Android ID](http://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID). No additional steps are required when submitting your app to the Play Store.

{% protip title="Alternative Configuration" %}

- [I want to use the Google Advertising ID instead]({{base.url}}/getting-started/sdk-integration-guide/advanced/android#use-google-advertising-id)

{% endprotip %}

{% endif %}

## Next steps

The Branch SDK is now integrated into your app, and you can use the [Branch dashboard](https://dashboard.branch.io/#) to track completed installs from [Marketing links](https://dashboard.branch.io/#/marketing). However, this only scratches the surface of what is possible with Branch.

Here are some recommended next steps:

- **Enable [Universal & App Links]({{base.url}}/getting-started/universal-app-links)** — traditional URI scheme links are no longer supported in many situations on iOS 9.2+, and are a less than ideal solution on new versions of Android. To get full functionality from your Branch links on iOS devices, **you should enable Universal Links as soon as possible.**
- **Learn about [Creating Links in Apps]({{base.url}}/getting-started/creating-links-in-apps)** — let your users share content and invite friends from inside your app.
-  **Set up [Deep Link Routing]({{base.url}}/getting-started/deep-link-routing)** — send incoming visitors directly to specific content in your app based on the Branch link they opened.

{% elsif page.advanced %}

{% if page.ios %}

## Install the SDK manually

Follow these directions install the Branch SDK framework files without using CocoaPods:

1. [Grab the latest SDK version](https://s3-us-west-1.amazonaws.com/branchhost/Branch-iOS-SDK.zip), or [clone our open-source GitHub repo](https://github.com/BranchMetrics/branch-ios-sdk).
1. Drag the `Branch.framework` file into your Xcode project. Be sure that "Copy items if needed" and "Create groups" are selected.
1. Import the following frameworks under **Build Phases** for your app target:
    - `AdSupport.framework`
    - `CoreTelephony.framework`
    - `CoreSpotlight.framework`
    - `MobileCoreServices.framework`
    - `SafariServices.framework`

{% caution title="Considerations around using Frameworks" %}

`AdSupport.framework` allows us to use the IDFA to match your visitors across our entire network of apps, increasing matching accuracy. When you submit your app to the App Store, you need to let Apple know that you use the IDFA.

`SafariServices.framework` enables cookie-based matching on iOS 9+, which allows us to [guarantee link matching with 100% accuracy]({{base.url}}/getting-started/matching-accuracy). Please test to make sure the invisible `SFSafariViewController` does not alter your view controller stack. Delete the app and reinstall to trigger the invisible SFSafariViewController to be presented on first launch. Please note that you cannot use 100% matching while [setDebug is turned on]({{base.url}}/getting-started/integration-testing/guide/ios/#use-debug-mode-to-simulate-fresh-installs).
{% endcaution %}

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/ios#get-the-sdk-files)

{% elsif page.android %}

## Using an existing custom Application class

Simply create a Branch instance in your `Application#onCreate()` method:

{% highlight java %}
public void onCreate() {
    super.onCreate();
    Branch.getAutoInstance(this);
}
{% endhighlight %}

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/android#enable-auto-session-management)

## Supporting pre-14 Android

Auto session tracking is only available for `minSdkVersion` 14 or above. If you need to support pre-14, you should include Branch SDK methods in both `onStart()` and `onStop()` to avoid strange, difficult-to-diagnose behavior. Branch must know when the app opens or closes to properly handle the deep link parameters retrieval.

Please add this to every Activity for pre-14 support.

{% highlight java %}
@Override
protected void onStart() {
    super.onStart();
    Branch.getInstance(getApplicationContext()).initSession();
}

@Override
protected void onStop() {
    super.onStop();
    branch.closeSession();
}
{% endhighlight %}

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/android#enable-auto-session-management)

## Custom Install Referrer class

Google only allows one `BroadcastReceiver` class per application. If you already receive the install referrer for other purposes, you will need to create a custom receiver class in your `AndroidManifest.xml`:

{% highlight xml %}
<receiver android:name="com.myapp.CustomInstallListener" android:exported="true">
	<intent-filter>
		<action android:name="com.android.vending.INSTALL_REFERRER" />
	</intent-filter>
</receiver>
{% endhighlight %}

Then create an instance of `io.branch.referral.InstallListener` in `onReceive` and call this:

{% highlight java %}
InstallListener listener = new InstallListener();
listener.onReceive(context, intent);
{% endhighlight %}

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/android#register-for-google-play-install-referrer)

## Use Google Advertising ID

If you'd like Branch to collect the [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) for advertising or tracking purposes instead of the Android ID, you must add Google Play Services to your app prior to release. After you complete these steps, Branch will handle the rest!

1. Add `compile 'com.google.android.gms:play-services:7.5.0'` to the dependencies section of your `build.gradle` file.
1. Add the following line in your ProGuard settings:

{% highlight xml %}
-keep class com.google.android.gms.ads.identifier.** { *; }
{% endhighlight %}

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/android#submitting-to-the-play-store)

{% elsif page.xamarin %}

## Install the SDK manually

Follow these directions install the Branch SDK framework files without using the NuGet package:

1. [Clone our open-source GitHub repo](https://github.com/BranchMetrics/Xamarin-Deferred-Deep-Linking-SDK).
1. Add the SDK assemblies to your solution and reference them from your projects:
   - **Forms:** add the `BranchXamarinSDK` assembly and reference it from your project.
   - **iOS (including iOS with Forms):** add the `BranchXamarinSDK` *and* `BranchXamarinSDK.iOS` assemblies and reference them from your iOS project.
   - **Android (including Android with Forms):** add the `BranchXamarinSDK` *and* `BranchXamarinSDK.Droid` assemblies and reference them from your Android project.

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/xamarin#get-the-sdk-files)

## Initialization for non-Forms apps

### Android initialization

Add calls to the `OnCreate` and `OnNewIntent` methods of either your Application class or the first Activity you start. Be sure to replace `key_live_xxxxxxxxxxxxxxx` with your Branch key from the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.

{% highlight c# %}
public class MainActivity: Activity, IBranchSessionInterface
{
    protected override void OnCreate (Bundle savedInstanceState)
    {
        base.OnCreate (savedInstanceState);

        BranchAndroid.Debug = true;
        BranchAndroid.Init (this, "Your Branch key here", this);
    }

    // Ensure we get the updated link identifier when the app is opened from the
    // background with a new link.
    protected override void OnNewIntent(Intent intent) {
        BranchAndroid.getInstance().SetNewUrl(intent.Data);
    }

    #region IBranchSessionInterface implementation

    public void InitSessionComplete (Dictionary<string, object> data)
    {
        // Do something with the referring link data...
    }
    
    public void SessionRequestError (BranchError error)
    {
        // Handle the error case here
    }

    #endregion
}
{% endhighlight %}

### iOS initialization

Add these methods to your `AppDelegate.cs` file. Be sure to replace `key_live_xxxxxxxxxxxxxxx` with your Branch key from the [Settings](https://dashboard.branch.io/#/settings) page of the Branch dashboard.

{% highlight c# %}
[Register ("AppDelegate")]
public class AppDelegate : UIApplicationDelegate, IBranchSessionInterface
{
    public override bool FinishedLaunching (UIApplication uiApplication, NSDictionary launchOptions)
    {
        // Enable debug mode. 
        BranchIOS.Debug = true;
        BranchIOS.Init ("Your Branch key here", launchOptions, this);

        // Do your remaining launch stuff here...
    }
    
    // For direct deep linking
    public override bool OpenUrl(UIApplication application,
        NSUrl url,
        string sourceApplication,
        NSObject annotation)
    {
        return BranchIOS.getInstance ().OpenUrl (url);
    }

    // For Universal Links
    public override bool ContinueUserActivity (UIApplication application,
        NSUserActivity userActivity,
        UIApplicationRestorationHandler completionHandler)
    {
        return BranchIOS.getInstance ().ContinueUserActivity (userActivity);
    }
    
    // For Push Notifications
    public override void ReceivedRemoteNotification (UIApplication application,
        NSDictionary userInfo)
    {
        BranchIOS.getInstance ().HandlePushNotification (userInfo);
    }
    
    #region IBranchSessionInterface implementation

    public void InitSessionComplete (Dictionary<string, object> data)
    {
        // Do something with the referring link data...
    }

    public void SessionRequestError (BranchError error)
    {
        // Handle the error case here
    }

    #endregion
}
{% endhighlight %}

[Back to the Guide]({{base.url}}/getting-started/sdk-integration-guide/guide/xamarin#start-a-branch-session)

{% else %}

No advanced information for this platform.

{% endif %}

{% endif %}