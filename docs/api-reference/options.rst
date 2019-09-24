Plugin configuration options
----------------------------

Options
~~~~~~~

=========== ======= ========================== ======== ======= ==================================
Property    Type    Example                    Required Default Purpose
=========== ======= ========================== ======== ======= ==================================
debug       boolean true                       No       false   Enable logs in console
allowHtml   boolean true                       No       false   Enable HTML markup in descriptions
shareBox    boolean false                      No       true    Enable social media share
socialMedia object  See ``SocialMedia`` object No       --      Social media configuration
=========== ======= ========================== ======== ======= ==================================

SocialMedia
~~~~~~~~~~~

=============== ====== ============================ ======== ============ ===============
Property        Type   Example                      Required Default      Purpose
=============== ====== ============================ ======== ============ ===============
url             string "`http://www.example.com`_"  No       Document URL URL to share
text            string "Text"                       No       Page title   Text
hashtags        array  ["jQuery", "cloudedLeopard"] No       --           Hashtags
twitterUsername string "my_twitter_account"         No       --           Twitter account
=============== ====== ============================ ======== ============ ===============

You do not need to prefix your Twitter account by "@".

.. _`http://www.example.com`: http://www.example.com