---
type: recipe
title: "Segment"
page_title: "Deep link through install by using the Segment SDK and enabling Branch."
keywords: TODO
platforms:
- ios
- android
---

{% protip title="Do I need both SDKs integrated?" %}
No. You may integrate Branch just by utilizing Segment and enabling the proper switch on Segment's dashboard. You are required to add a few extra code snippets to utilize Branch's deeplinking.{% endprotip %}

## Account Setup

## Project Setup

Before you can configure Segment's hooks to tap into Branch, you'll need to set your project up to handle a few things. Namely, you'll need to specify our dependency,

{% if page.ios %}

{% endif %}

{% if page.android %}

{% endif %}

## Setting up Branch

## Branch Calls Through Segment

## Branchs Calls Without Segment

## Testing