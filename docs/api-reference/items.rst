Items
-----

| Each item has several possibilities of configuration. You can add a link
  and/or a picture to your ``text`` items, or a caption to your
  ``picture``, ``audio`` or ``video`` items.

Text Item
~~~~~~~~~

=============== ======= ======================= ======== =============== =============================
Property        Type    Example                 Required Default         Purpose
=============== ======= ======================= ======== =============== =============================
type            string  "text"                  Yes      --              Item type
position        object  See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
title           string  "My title"              Yes      --              Title
description     string  "My description"        Yes      --              Descriptive text
picturePath     string  "/path/to/picture.png"  No       --              Illustration source path
link            object  See ``Link`` object     No       --              HTTP Link
sticky          boolean true                    No       false           Sticky behavior
customClassName string  "my-css-class"          No       --              Custom CSS class of the item
=============== ======= ======================= ======== =============== =============================

Picture Item
~~~~~~~~~~~~

=============== ====== ======================= ======== =============== =============================
Property        Type   Example                 Required Default         Purpose
=============== ====== ======================= ======== =============== =============================
type            string "picture"               Yes      --              Item type
position        object See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path            string "/path/to/picture.png"           --              Image source path
customClassName string "my-css-class"          No       --              Custom CSS class of the item
=============== ====== ======================= ======== =============== =============================

Audio Item
~~~~~~~~~~

| Supported audio formats: MP3, Ogg, WAVE.
| For more information about browser support of audio formats,
  please refer to `Media formats for HTML audio and video <https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats>`_.

=============== ======= ======================= ======== =============== =============================
Property        Type    Example                 Required Default         Purpose
=============== ======= ======================= ======== =============== =============================
type            string  "audio"                 Yes      --              Item type
position        object  See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path            string  "/path/to/sound.mp3"    Yes      --              Sound source path
caption         string  "My caption"            No       --              Sound short description
sticky          boolean true                    No       false           Sticky behavior
customClassName string  "my-css-class"          No       --              Custom CSS class of the item
=============== ======= ======================= ======== =============== =============================

Video Item
~~~~~~~~~~

| Supported video formats: MP4, WebM.
| For more information about browser support of video formats,
  please refer to `Media formats for HTML audio and video <https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats>`_.

=============== ======= ======================= ======== =============== ===============================================
Property        Type    Example                 Required Default         Purpose
=============== ======= ======================= ======== =============== ===============================================
type            string  "video"                 Yes      --              Item type
position        object  See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path            string  "/path/to/video.mp4"    Yes      --              Video source path
caption         string  "My caption"            No       --              Video short description
poster          string  "path/to/poster.png"    No       --              Image to display while the video is downloading
sticky          boolean true                    No       false           Sticky behavior
customClassName string  "my-css-class"          No       --              Custom CSS class of the item
=============== ======= ======================= ======== =============== ===============================================

Provider Item
~~~~~~~~~~~~~

| Content providers supported: `Dailymotion`_, `SoundCloud`_, `Vimeo`_ and `Youtube`_.

=============== ======= ====================================== ======== =============== =============================
Property        Type    Example                                Required Default         Purpose
=============== ======= ====================================== ======== =============== =============================
type            string  "provider"                             Yes      --              Item type
position        object  See ``Position`` object                No       {left:0, top:0} Hotspot position on the scene
providerName    string  "dailymotion|soundcloud|vimeo|youtube" Yes      --              Content provider name
parameters      object  See ``Parameters`` object              Yes      --              Content provider parameters
sticky          boolean true                                   No       false           Sticky behavior
customClassName string  "my-css-class"                         No       --              Custom CSS class of the item
=============== ======= ====================================== ======== =============== =============================

.. _Dailymotion: https://www.dailymotion.com/
.. _SoundCloud: https://soundcloud.com/
.. _Vimeo: https://vimeo.com/
.. _Youtube: https://www.youtube.com/