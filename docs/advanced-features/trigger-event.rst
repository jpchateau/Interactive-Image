Trigger Event
-------------

| There are two ways to trigger the display of an item corresponding to a hotspot. When the hostpot is clicked or when it is hovered.
  Default behavior is ``hover``. You can override this behavior via the options.

.. code:: javascript

   var options = {
     triggerEvent: 'click'
   };

   $("#my-interactive-image").interactiveImage(items, options);