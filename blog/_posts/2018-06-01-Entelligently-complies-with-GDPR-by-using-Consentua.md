---
layout: post
title: Entelligently complies with GDPR by using Consentua
published: true
author: chris_cooper
comments: true
postimg: 'https://entelligently.com/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/en+con=gdpr.png'
---


## Entelligently, and needing to comply with GDPR 

<img class="img-right" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/en+con=gdpr.png" alt="img">

Entelligently is a web-based application that connects people with buildings – increasing workplace productivity, improving employee well-being and lowering energy costs.

It does all this while ensuring the building meets its expected energy performance and sustainability targets. 

However, as Entelligently collects and uses personal data, it needs to comply with GDPR. 
 
What's The Solution?

## The Solution

To comply with GDPR, Entelligently required something fit for purpose.

<video width="853" height="480" autoplay loop muted>
  <source src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/entelligently-consentua.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
 
<b>For the user</b>, it needed to be easy to interact with and easy to understand, so the user knows exactly how and why their personal data is being stored. A user-friendly focus allows the option to opt out of personal data collection at any time.

<b>For the Entelligently team</b>, it also needed to be intuitive and easy to understand – allowing the team to see the decisions of users (and how their data is used) in real time.

<b>For the developer</b>, it needed to be easy to integrate – allowing utilisation of a product requiring minimal code.

The solution was <b>Consentua</b>.

<img class="img-right" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/avatar-350x350.png" alt="img">

Entelligently uses Consentua to gather consent for the storage of personal data from registered users. This data may include a user’s name, email address, mobile number, gender, age range, location and – most importantly – their level of comfort.

The purpose of the data collection – and the type of personal data being processed – is made known clearly and unambiguously by Consentua. This is done as part of the upfront registration process, evidently meeting GDPR criteria, as we’ll see below. 

## How it works – the user’s perspective

<b>User details</b>

The first screen (below) shows users the <b>*Details*</b> view and <b>*Update Details*</b> options immediately after signing up, where the users are prompted to enter their data.

<figure>
<img class="img-center" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/usersettings.png" alt="img">
<figcaption>User settings screenshot</figcaption>
</figure>
<b>User consent</b>

The next view is the <b>*User Consent*</b> view (above), which users are encouraged to agree with due to the straightforward language used. Note the distinct data types and purposes being requested in the <b>*User Consent*</b> view. Moreover, if a user agrees, the change in colour and slider position give an explicit indication of consent. Data collection is as transparent as possible.
 
The <b>*User Consent*</b> view is also embedded as part of the user settings page, where the user is free to change consent at any time.

A user can then register for Entelligently once they have been given a URL access link.

## How it works – the Entelligently team’s perspective

<b>Checking Consent</b>

The next phase is to be able to check consent at any time. Entelligently can now check users against a particular purpose and whether an individual user has given consent. This can be done via the Consentua dashboard reports (as seen directly below). 

<figure>
<img class="img-center" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/Entelligently-report.png" alt="img">
<figcaption>Consent checking screenshot</figcaption>
</figure>

For the more tech-savvy Entelligently team members, it is also possible to make a direct API (Application Programming Interface) query, a screenshot of which can be seen further down. The results on the screenshot show that for Chris Test’s particular purpose IDs (156 and 272), he has given consent – “True”.

It is also possible to check which users have consented to a specific purpose. This returns a list of users who have consented (all flagged as true). There is also a report on all users registered to a service – this returns a longer list of users.

## How it works – the developer’s perspective

In short, Constenua enables Entelligently to comply with GDPR in the most straightforward way possible. 

<figure>
<img class="img-center" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/iframe.png" alt="img">
<figcaption>iframe code screenshot</figcaption>
</figure>
Using the Consentua WebSDK (Web-based Software Development Kit), Entelligently has deployed the consent service as an iframe in the user registration form. 

For a demo of the WebSDK and the code snippet used, see here: <a href="https://consentua.com/demo">Consentua WebSDK Demo</a>


<figure class="img-right">
<img src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-complies-with-GDPR-by-using-Consentua/res.png" alt="img">
<figcaption>API response for user Christ Test screenshot</figcaption>
</figure>

This placement of the iframe after the user has signed up is essential, as Consentua needs to append the consent request to a unique user identifier (UID).

Consentua has a dedicated Entelligently client consent service identifier (CID) with a service identifier (SID), further to which is linked a private template identifier (TID). This means that the credentials being used are as per the details in the ‘User settings’ screenshot.

“It is really easy to deploy Consentua into an existing web app,” says Jack Mason, an Entelligently developer.

When asked why, Jack replied: “All the hard work is already done for you with the iframe. Inputting the userID is the only thing left to do.”

## The Outcome

The result is that:

* Entelligently users are happy. They can clearly see what personal data is being used and for what purpose. If they do not consent for their personal data to be used, the data is still gathered but their identity is not processed from an analysis perspective.

* The client is happy. If a building can adapt to its occupants’ needs, by gathering and analysing personal data, it will become a more comfortable working environment. Happy occupants mean more productive employees. All these benefits are obtained by having an audit of their consent.

* The Entelligently service is happy. Its use of personal data is consented to. This personal data is essential to the success of the service that Entelligently delivers – namely, a comfortable building connected to the people it serves.
