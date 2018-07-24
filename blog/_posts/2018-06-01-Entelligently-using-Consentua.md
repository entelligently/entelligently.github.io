---
layout: post
title: Entelligently using Consentua
published: true
author: chris_cooper
comments: true
postimg: 'https://consentua.com/blog/public/post_imgs/2018-06-01-Entelligently-using-Consentua/comfort.PNG'
---


## Entelligently 

<img class="img-right" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-using-Consentua/comfort.PNG" alt="img">

The use case from Entelligently was to get consent to capture personal data from a web app accessed by registered users.  The personal data being used is your name, email, mobile number, gender, age range, location and most importantly your comfort.  

Entelligently is a web service that connects buildings to people.  Delivering a more comfortable and productive work environment.  Whilst ensuring a building meets its expected energy performance and sustainability targets. 


## What does Consentua do?

<img class="img-center" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-using-Consentua/iframe.png" alt="img">

Using the Consentua WebSDK Entelligently has deployed the consent service as part of the user registration form as an iframe. To see a demo of the WebSDK and the code snippet used go here:  [Consentua WebSDK Demo](https://consentua.com/demo)

This placement of the iframe after the user has signed up is essential as Consentua needs to append the consent request to an unique user identifier a UID.  

Consentua has a dedicated Entelligently client consent service (CID), which has a service (SID), which is linked to it a private template (TID).  

Which means that the credentials being used are as per the details in the box. 


## The Solution

The type and purpose of the personal data being processed is made clearly, in an unambiguous form and as part of the upfront registration process. Clearly meeting GDPR criteria. The user is always in control. Here is the first consent screen the user sees immediately on sign up.

<video width="853" height="480" autoplay loop muted>
  <source src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-using-Consentua/entelligently-consentua.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


Note the distinct data types and purposes being requested. And when the user agrees the change in colour as well as the slider position change give a clear transparent indication of consent granted.  

The consent view is embedded as part of the user settings page.  The user is free to change consent at any time.  

<img class="img-center" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-using-Consentua/usersettings.png" alt="img">


The user can register for Entelligently once they have been given the link to access.  The next view is the consent view (See above), which they are encouraged to agree to due to clear language used.  Once the continue button is pressed the user is directed to the home screen.  

## Checking Consent

The next phase is to be able to check consent at any time.  This can be done either via the Consentua dashboard reports or via a direct API query.  Check users against a particular purpose or check an individual users consent. 

<img class="img-center" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-using-Consentua/Entelligently-report.png" alt="img">

<img class="img-right" src="{{ site.baseurl }}/blog/post_imgs/2018-06-01-Entelligently-using-Consentua/res.png" alt="img">

Here is the output from the API query for a particular user - Chris Test.  The results show that for a specific purpose ID’s (156 and 272) this user has given consent - ‘True”.  


It is also possible to check which users have consented to a specific purpose.  This returns a list of users who have consented (all flagged as true). Their is also a report on all users registered to a service,returns a longer list of users. 

## The Developers view

A quote from Jack the developer for Entelligently:
“It is really  easy to deploy Consentua into an existing web app” 

When asked why it was so easy Jack said:
“All the hard work is already done for you with the iframe.  Leaving me with the only bit to do was to input a userID”. 

The Result
The Entelligently users are happy as they can clearly see what personal data is being used for which purpose.  If they do not consent for their personal data to be used, the data is still captured but their identity is not processed from an analysis perspective.  

The client is happy as the building users are giving lots of personal information in return for a comfortable working environment.  Happy occupants mean more productive employees.  All these benefits obtained by having an audit of the consent.

The Entelligently service is happy as it has a consented to use of personal data.  This personal data is essential to the success of the service that Entelligently delivers, namely a comfortable building that is connected to the people it serves.  



