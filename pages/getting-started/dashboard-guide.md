---
type: recipe
directory: getting-started
title: 4. Dashboard Guide
page_title: Learn more about the Branch dashboard
description: "Learn about some basic and advanced features of the Branch dashboard"
android_description: "Learn about some advanced features of the Branch dashboard: How to set up a custom link domain and identify your best users."
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Dashboard, custom link domain, conversion funnel, funnels, influencers
hide_platform_selector: true
hide_section_selector: true
sections:
- guide
contents: list
---

Now that your app is configured, it's time to dive into your data with the [Branch Dashboard](https://dashboard.branch.io)! The dashboard is a great tool for measuring growth and engagement, and offers many powerful configuration options.

{% image src='/img/pages/getting-started/dashboard-guide/dashboard_summary.png' full center alt='Branch dashboard' %}

## Using link labels to segment data

As you most likely saw on the [Creating Links in Apps]({{base.url}}/getting-started/creating-links-in-apps) and [Creating Links in Other Ways]({{base.url}}/getting-started/creating-links-other-ways) pages, there are many options for creating links. If your organization is creating links in many different ways, it’s important to label them appropriately.

When you [set analytics labels for your links]({{base.url}}/getting-started/configuring-links/#analytics-labels), you can filter analytics data in the dashboard based on any of these options:

{% ingredient analytics-labels %}{% endingredient %}

Below is the filtering bar on the main [Summary page](https://dashboard.branch.io/#). You can find similar controls on a number of dashboard pages:

{% image src='/img/pages/getting-started/dashboard-guide/analytics_labels.png' full center alt='analytics filtering options' %}

## See link and click data in real time

The [Analytics page](https://dashboard.branch.io/#/analytics/content) allows you to see data on content your users are sharing, and which pieces of content are the most popular. You can also use the tabs on the [Live View page](https://dashboard.branch.io/#/liveview) to see generated links and link clicks in real time.

## Tracking events

Branch [tracks events for you]({{base.url}}/getting-started/tracking-events). We automatically record `install`, `open`, `web session start`, and `referred session`, and you can define as many custom events (sign ups, purchases, shares, etc.) as you wish. You can see these events as they occur on the [Events page](https://dashboard.branch.io/#/liveview/events/view).

## Tracking influencers

The [Influencers page](https://dashboard.branch.io/#/referrals/influencers) on the dashboard will show you who is driving the most new signups.

{% image src='/img/pages/getting-started/dashboard-guide/influencers.png' full center alt='analytics filtering options' %}

{% protip %}
You must [identify your users]({{base.url}}/getting-started/setting-identities) in order for the `User ID` column to be populated. The `Branch ID` refers to the internal Branch ID associated with that user. It is set automatically in the SDK.
{% endprotip %}

## Setting a custom link domain

While you may enjoy Branch, it doesn’t mean you need to have `bnc.lt` as a part of every link you send out. Setting up a custom domain or subdomain is simple. 

{% caution title="Avoid switching later" %}
We recommend that you choose one domain or subdomain to use with Branch and stick with it, as switching can cause significant problems with your existing links.
{% endcaution %}

{% protip title="SSL for custom domains and subdomains" %}
Branch automatically handles HTTPS traffic for custom subdomains and root domains. Branch will acquire the necessary SSL certificate if you follow the simple setup instructions below. Branch will also automatically renew the certificates when needed.
{% endprotip %}

{% image src='/img/pages/getting-started/dashboard-guide/custom_link_domain.png' full center alt='configuring a custom subdomain' %}

### Custom SUBDOMAIN (go.branch.com)

1. Create a CNAME for your subdomain and point it to `custom.bnc.lt`
1. Go to [Link Settings](https://dashboard.branch.io/#/settings/link) on the Branch dashboard, and find the **Custom Link Domain** section.
1. You should see a message telling you the status of your domain under the `Domain name` field. If you don't, please type your domain in again.
1. Click the `Save` button.

{% image src='/img/pages/getting-started/universal-app-links/custom-domain-success.png' full center alt='successful custom subdomain configuration' %}

### Custom ROOT domain (branch.com)

1. Go to [Link Settings](https://dashboard.branch.io/#/settings/link) on the Branch dashboard, and find the **Custom Link Domain** section.
1. Enter your custom domain into the text box and click the `Save` button. (If the validation status doesn't update with nameservers please **refresh the page.**) {% image src='/img/pages/getting-started/universal-app-links/custom_domain_nameservers_error.png' full center alt='root domain nameservers' %}
1. Go to your DNS configuration for your custom domain, and update your nameserver records with the Branch-provided nameservers.
1. Click the `Save` button on the Branch dashboard again.

## Controlling default link redirection behavior

By default, Branch will attempt to launch your app every single time a link is opened, before redirecting to the App Store or Play Store. On iOS 9, this can cause an ugly error message if the app is not yet installed. To reverse this default behavior, you can uncheck the **Always try to open app** box on the [Link Settings page](https://dashboard.branch.io/#/settings/link):

{% image src='/img/pages/getting-started/dashboard-guide/always_open_app.png' full center alt='setting link redirection default behavior' %}