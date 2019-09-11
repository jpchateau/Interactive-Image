Items
-----

Each item has several possibilities of configuration. You can add a link
and/or a picture to your ``text`` items, or a caption to your
``picture``, ``audio`` or ``video`` items.

Text Item
~~~~~~~~~

=========== ======= ======================= ======== =============== =============================
Property    Type    Example                 Required Default         Purpose
=========== ======= ======================= ======== =============== =============================
type        string  "text"                  Yes                      Item type
position    object  See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
title       string  "My title"              Yes                      Title
description string  "My description"        Yes                      Descriptive text
picturePath string  "/path/to/picture.png"  No                       Illustration source path
link        object  See ``Link`` object     No                       HTTP Link
sticky      boolean true                    No       false           Sticky behavior
=========== ======= ======================= ======== =============== =============================

Picture Item
~~~~~~~~~~~~

======== ====== ======================= ======== =============== =============================
Property Type   Example                 Required Default         Purpose
======== ====== ======================= ======== =============== =============================
type     string "picture"               Yes                      Item type
position object See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path     string "/path/to/picture.png"
======== ====== ======================= ======== =============== =============================

Audio Item
~~~~~~~~~~

Supported audio formats: mp3, ogg, wav.

======== ======= ======================= ======== =============== =============================
Property Type    Example                 Required Default         Purpose
======== ======= ======================= ======== =============== =============================
type     string  "audio"                 Yes                      Item type
position object  See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path     string  "/path/to/sound.mp3"    Yes                      Sound source path
caption  string  "My caption"            No                       Sound short description
sticky   boolean true                    No       false           Sticky behavior
======== ======= ======================= ======== =============== =============================

Video Item
~~~~~~~~~~

Supported video formats: mp4, webm.

======== ======= ======================= ======== =============== ===================================================
Property Type    Example                 Required Default         Purpose
======== ======= ======================= ======== =============== ===================================================
type     string  "video"                 Yes                      Item type
position object  See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path     string  "/path/to/video.mp4"    Yes                      Video source path
caption  string  "My caption"            No                       Video short description
poster   string  "path/to/poster.png"    No                       An image to be shown while the video is downloading
sticky   boolean true                    No       false           Sticky behavior
======== ======= ======================= ======== =============== ===================================================

Provider Item
~~~~~~~~~~~~~

============ ======= ========================= ======== =============== =============================
Property     Type    Example                   Required Default         Purpose
============ ======= ========================= ======== =============== =============================
type         string  "provider"                Yes                      Item type
position     object  See ``Position`` object   No       {left:0, top:0} Hotspot position on the scene
providerName string  "youtube|dailymotion"     Yes                      Content provider name
parameters   object  See ``Parameters`` object Yes                      Content parameters
sticky       boolean true                      No       false           Sticky behavior
============ ======= ========================= ======== =============== =============================