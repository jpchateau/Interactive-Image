Other objects
-------------

Position
~~~~~~~~

======== ======= ======= ======== ======= ================
Property Type    Example Required Default Purpose
======== ======= ======= ======== ======= ================
left     integer 200     Yes      --      X absolute value
top      integer 50      Yes      --      Y absolute value
======== ======= ======= ======== ======= ================

Link
~~~~

======== ====== =========================== ======== ============= ===================
Property Type   Example                     Required Default       Purpose
======== ====== =========================== ======== ============= ===================
url      string "`https://www.github.com`_" Yes      --            href attribute
label    string "My webpage"                No       ``url`` value Name of the webpage
======== ====== =========================== ======== ============= ===================

Parameters
~~~~~~~~~~

======== ====== =========== ======== ======= ==============================================
Property Type   Example     Required Default Purpose
======== ====== =========== ======== ======= ==============================================
soundId  string "123456789" No       --      Sound identifier (SoundCloud)
videoId  string "xxxYYY123" No       --      Video identifier (Dailymotion, Vimeo, Youtube)
======== ====== =========== ======== ======= ==============================================

| `Dailymotion`_, `Vimeo`_ and `Youtube`_ videos are supported.
| `SoundCloud`_ tracks are supported.

.. _`https://www.github.com`: https://www.github.com
.. _Dailymotion: https://www.dailymotion.com/
.. _SoundCloud: https://soundcloud.com/
.. _Vimeo: https://vimeo.com/
.. _Youtube: https://www.youtube.com/
