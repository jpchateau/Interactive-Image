Style customization
-------------------

| You may want to change the rendering of a specific item.
| Fill the ``customClassName`` property:

.. code:: javascript

   // Item object
   {
     //...
     customClassName: "my-custom-css-class"
   }


| You may also want to change the global rendering of all items, as for example the
  background and the front color of text items.
| Adapt this CSS snippet to your needs and add it after the
  ``interactive-image`` CSS file is loaded:

.. code:: css

   .interactive-image .text-item {
     background-color: blue;
     color: yellow;
   }

Available Item classes:

* ``text-item``

* ``picture-item``

* ``audio-item``

* ``video-item``

* ``provider-item``