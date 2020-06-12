Destroying and recreating an instance
-------------------------------------

| Sometimes you might need to destroy an instance and recreate it.
| Here is how to achieve it.

.. code:: javascript

   // jQuery native function to remove all attached event handlers
   $('#my-interactive-image').off();

   // Do your own stuff (resizing image, updating positions values of icons, ...)

   // Create a new instance
   $("#my-interactive-image").interactiveImage(items, options);



