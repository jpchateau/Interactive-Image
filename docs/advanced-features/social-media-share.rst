Social Media Share
------------------

By default, a social media share box is displayed. You can prevent this
behavior before activating the plugin:

.. code:: javascript

   var options = {
     shareBox: false
   };

   $("#my-interactive-image").interactiveImage(items, options);

You can customize the social media share properties of your Interactive Image:

.. code:: javascript

   var options = {
     socialMedia: {
       url: "https://www.jpchateau.com/demo/interactive-image",
       text: "Clouded Leopard",
       hashtags: ["jQuery", "cloudedLeopard"],
       twitterUsername: "my_twitter_account",
     }
   }

   $("#my-interactive-image").interactiveImage(items, options);

Supported social media: email, `Twitter`_ and `Facebook`_. In case of
email share, the subject of the email is the webpage title.

.. _Twitter: https://twitter.com/
.. _Facebook: https://www.facebook.com/