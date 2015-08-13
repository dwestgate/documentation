---
type: recipe
title: Dynamic link creation
page_title: Create a dynamic deep linking URL
description: Learn how to dynamically create deep linking URLs without using any SDKs and when using the public HTTP API or one of our client SDKs.
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, link creation, dynamic link creation, HTTP API, link structure
hide_platform_selector: true
---

Branch allows you to dynamically create URLs without using any SDKs. This is best for situations where end users will not see the link and where creating the link via the HTTP API would be needlessly complicated. This is covered in our first section, [Structuring a 'dynamic' Deeplink](/recipes/dynamic_link_creation/#structuring-a-dynamic-deeplink).


In every other situation we recommend using the public HTTP API or one of our client SDKs. The HTTP API is covered in the [second section](/recipes/dynamic_link_creation/#creating-a-deep-linking-url-via-the-http-api) and includes an example that you can run from the command line.

{% protip title="Bulk Link Creation" %}
We also offer the ability to create links in bulk. [Click here](/references/http_api/#bulk-creating-deep-linking-urls) to see the HTTP API endpoint. However, in general it is a good idea to use one of the two methods described below--a one-time investment in a flexible system is much better than bulk creating and distributing links on many separate occasions.
{% endprotip %}


{% ingredient http_api/structuring_dynamic_deeplink %}{% endingredient %}
{% ingredient http_api/creating_deeplinks %}{% endingredient %}

## Conclusion

We covered two methods of dynamically creating links. But there's so much more you can do with Branch:

{% ingredient recipe_preview/quickstart_guide %}
	{% override platform %}ios{% endoverride %}
{% endingredient %}

{% ingredient recipe_preview/personalized_welcome %}
	{% override platform %}ios{% endoverride %}
{% endingredient %}

{% ingredient recipe_preview/referral_links_with_incentives %}
	{% override platform %}ios{% endoverride %}
{% endingredient %}

{% ingredient recipe_preview/app_download_banner %}
	{% override platform %}ios{% endoverride %}
{% endingredient %}

{% ingredient recipe_preview/text_me_the_app_page %}
	{% override platform %}ios{% endoverride %}
{% endingredient %}

