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

.. _`http://www.example.com`: http://www.example.com