Configuration
-------------

Plugin configuration options
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Options**

=========== ======= ========================== ======== ======= ==========================
Property    Type    Example                    Required Default Purpose
=========== ======= ========================== ======== ======= ==========================
debug       boolean true                       No       false   Enable logs in console
shareBox    boolean false                      No       true    Enable social media share
socialMedia object  See ``SocialMedia`` object No               Social media configuration
=========== ======= ========================== ======== ======= ==========================

**SocialMedia**

=============== ====== ============================ ======== ============ ===============
Property        Type   Example                      Required Default      Purpose
=============== ====== ============================ ======== ============ ===============
url             string "`http://www.example.com`_"  No       Document URL URL to share
text            string "Text"                       No       Page title   Text
hashtags        array  ["jQuery", "cloudedLeopard"] No                    Hashtags
twitterUsername string "my_twitter_account"         No                    Twitter account
=============== ====== ============================ ======== ============ ===============

You do not need to prefix your Twitter account by "@".

Items
~~~~~

Each item has several possibilities of configuration. You can add a link
and/or a picture to your ``text`` items, or a caption to your
``picture``, ``audio`` or ``video`` items.

**Text Item**

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

**Picture Item**

======== ====== ======================= ======== =============== =============================
Property Type   Example                 Required Default         Purpose
======== ====== ======================= ======== =============== =============================
type     string "picture"               Yes                      Item type
position object See ``Position`` object No       {left:0, top:0} Hotspot position on the scene
path     string "/path/to/picture.png"
======== ====== ======================= ======== =============== =============================

**Audio Item**

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

**Video Item**

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

**Provider Item**

============ ======= ========================= ======== =============== =============================
Property     Type    Example                   Required Default         Purpose
============ ======= ========================= ======== =============== =============================
type         string  "provider"                Yes                      Item type
position     object  See ``Position`` object   No       {left:0, top:0} Hotspot position on the scene
providerName string  "youtube|dailymotion"     Yes                      Content provider name
parameters   object  See ``Parameters`` object Yes                      Content parameters
sticky       boolean true                      No       false           Sticky behavior
============ ======= ========================= ======== =============== =============================

Other objects
~~~~~~~~~~~~~

**Position**

======== ======= ======= ======== ======= ================
Property Type    Example Required Default Purpose
======== ======= ======= ======== ======= ================
left     integer 200     Yes              X absolute value
top      integer 50      Yes              Y absolute value
======== ======= ======= ======== ======= ================

**Link**

======== ====== =========================== ======== ============= ===================
Property Type   Example                     Required Default       Purpose
======== ====== =========================== ======== ============= ===================
url      string "`https://www.github.com`_" Yes                    href attribute
label    string "My webpage"                No       ``url`` value Name of the webpage
======== ====== =========================== ======== ============= ===================

**Parameters**

======== ====== =========== ======== ======= ================
Property Type   Example     Required Default Purpose
======== ====== =========== ======== ======= ================
videoId  string "xxxYYY123" Yes              Video identifier
======== ====== =========== ======== ======= ================

Please note that only `Youtube`_ and `Dailymotion`_ videos are
supported.

.. _`http://www.example.com`: http://www.example.com
.. _`https://www.github.com`: https://www.github.com
.. _Youtube: https://www.youtube.com/
.. _Dailymotion: https://www.dailymotion.com/
