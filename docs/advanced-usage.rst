Advanced usage
--------------

Social Media Share
~~~~~~~~~~~~~~~~~~

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

Sticky elements
~~~~~~~~~~~~~~~

Make some elements to have a sticky behavior:

.. code:: javascript

   // item object
   {
     //...
     sticky: true
   }

Debugging
~~~~~~~~~

In order to display some console messages to see the different steps of
the processing, you can enable the debug mode before activating the
plugin:

.. code:: javascript

   var options = {
     debug: true
   };

   $("#my-interactive-image").interactiveImage(items, options);

Style customization
~~~~~~~~~~~~~~~~~~~

| You may want to change the rendering of an item, as for example the
  background and the front color of text items.
| Adapt this CSS snippet to your needs and add it after the
  ``interactive-image`` css file is loaded:

.. code:: css

   .interactive-image .text-item {
     background-color: blue;
     color: yellow;
   }


.. _Twitter: https://twitter.com/
.. _Facebook: https://www.facebook.com/