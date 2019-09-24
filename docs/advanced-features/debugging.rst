Debugging
---------

In order to display some console messages to see the different steps of
the processing and the time each step took, you can enable the debug mode
before activating the plugin:

.. code:: javascript

   var options = {
     debug: true
   };

   $("#my-interactive-image").interactiveImage(items, options);