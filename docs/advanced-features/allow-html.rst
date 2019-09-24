Allow HTML markup
-----------------

| In order to enable HTML markup in descriptions, you have to set the ``allowHtml`` flag to ``true``
  in the options before activating the plugin.

.. code:: javascript

   var options = {
     allowHtml: true
   };

   $("#my-interactive-image").interactiveImage(items, options);