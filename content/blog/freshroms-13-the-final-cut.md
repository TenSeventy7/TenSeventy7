+++
date = 2021-02-21T06:05:00Z
description = "After weeks of beta testing, as well as countless updates to almost everything, 1.3 stable is finally available for everyone."
featureImage = "//i.ibb.co/Lzm1ftT/Cover.png"
readtime = 10
title = "FreshROMs 1.3: The Final Cut"

+++
**FreshROMs 1.3 is here!** After weeks of beta testing, as well as countless updates to almost everything, 1.3 stable is finally available for everyone.

This release brings less features than 1.2 did, but improves upon the fundamentals you have expected from FreshROMs, a great, no-frills Samsung Experience. This release also brings "quality-of-life" improvements that you will enjoy.

This release... **may also the last.** More on that later.

### Making Things Simpler
For simpler understanding of versions, I'm (finally) dropping "11.5" from the main versions found on XDA and download pages. **This release is officially "version 1.3",** and future releases will be following the same scheme.

But don't be confused that this is a downgrade! **This release brings a lot of things everyone will love.**

**Fun fact!** "11.5" formerly meant the Samsung Experience version the FreshROM release came with. Samsung still continues such versioning internally despite the UX being One UI 2.5. The app versions reflect that as well, you can see "11.x" on apps for One UI 2, and "12.x" on apps for One UI 3.

### The Net is Punctured! (For Now)
![](https://i.ibb.co/6vGPp0r/9109.jpg) 
You heard it right, **the net is punctured!** Starting early January this year, Google has decided to force SafetyNet's "hardware attestation" to all devices with "hardware security modules" and the Galaxy A50 is one of them.

With the unwavering work of kdrag0n, as well as the ProtonAOSP project, we are able to bypass hardware attestation through the framework. While the standard module found on Magisk causes One UI to crash (because Knox), **FreshROMs implemented the workaround through the framework.**

Starting 1.3, FreshROMs will now pass SafetyNet **without needing any Magisk modules**, with a few catches:

 - Several device variants, notably the **SM-A505FM** forces a "device codename", either through the bootloader or the EFS, that causes SafetyNet to fail on `ctsProfile`. A workaround is available on the project's official Telegram group.
 - MagiskHide **should be enabled** and working fully for SafetyNet to pass completely.

Also note that while this workaround works right now, Google can change everything in one night, rendering this useless. You can also see the proof-of-concept of this on XDA [here](https://forum.xda-developers.com/t/dev-guide-proof-of-concept-hardware-safetynet-attestation-bypass-on-stock-oem-roms.4228005/).

I want to thank kdrag0n, as well as the ProtonAOSP project contributors in discovering this workaround. You can see (and implement) their patches [here](https://github.com/ProtonAOSP/android_system_security/commit/9dd88a70668da3d7b0581489d55d0d1a2ced2f5c) or [here](https://github.com/ProtonAOSP/android_frameworks_base/commit/7f7a9b19c8293c09dfee12bec75ff17225c6710e).

### Meet a "Pro"-er(?) You
![](https://i.ibb.co/SyVhmWV/9117.jpg)
With the help of FreshROMs Community members, notably @a7hmE1 from the official Telegram group, **full Pro modes for both photo and video is now available on FreshROMs!** You can now flexibly set aperture sizes, exposure levels, as well as smoothen out zoom!

FreshROMs 1.3 also brings improvements to Single Take. You can now use palm capture to start a Single Take shot.

This release also fixes **Scene optimizer**, and enables **Smart Scan.** So you can now scan documents without needing a third-party app!

### A Fresher Fresh
![](https://i.ibb.co/X8SKb49/9106.jpg) 
In order to ensure stability for all variants, the **non-NFC and NFC-enabled variants will now use separate vendors starting FreshROMs 1.3.** All variants use the latest **BUA1/BUAA** vendors from Samsung. VoLTE and RCS services now also use the Galaxy A50's stock to ensure full stability. This release also brings **more battery and performance improvements** from FreshROMs 1.2, including **force Dozing select Google and Samsung services.**

The Feedback app has been updated as well with the **very awesome work** by [Yanndroid](https://t.me/Yanndroid)! The app is now One UI-styled, and even follows dark mode.

This release also brings improvements to the table. **"LTE only" network mode is now available for all users.** Please note that this may cause inability to send and/or receive SMS or calls, especially if your carrier does not support Voice-over-LTE (VoLTE). **Support for wallet flip covers have been re-added** from Stock as well.

![](https://i.ibb.co/wBBwnwX/9657.jpg) 

**App Lock is now also available for all OMCs starting 1.3!** You can now lock select applications and unlock them using a PIN, pattern, or password, and your fingerprint.

**Dual Messenger now also supports more popular apps,** including popular alternative clients for Telegram, Facebook (and Messenger), and Twitter! It is now more useful for cloning the most important apps you need.

**More apps have been debloated from the system to improve performance as well.** Here are the newly-debloated apps from Core:

 - Samsung Daily/Free (moved to My Galaxy and up addon)
 - Samsung Customization Service (moved to My Galaxy+ addon)
 - Google Search app (moved to Google-ful addon)
 - Quick Share and Wi-Fi Direct sharing (moved to a new addon)
 - Samsung Game Tools/Home/Optimization (moved to a new addon)

### The End of Line

Before I close this out, I want to personally thank everyone. The **users**, **contributors**, **testers**, **everyone**. From its beginnings as a **rushed release just in time for Christmas,** to the literally **daily testing for all beta testers** in the community. I really want to say "thank you". **Thank you for all of your support to this project.**

But this is the end, the end of the line. **The final cut.** It's very hard for me to announce this but, this is the end...
.

.

.

.

.

.

.

.

.

.

...**because I'm finally moving over to Android 11-based builds!** That's right, **FreshROMs 3, based on One UI 3, will be coming soon.** With more features, and more supported devices, FreshROMs 3.0 will be, quite a big release.

Stay tuned for news, here on FreshROMs [official SourceForge page](https://sourceforge.net/projects/freshroms), to FreshROMs official Telegram channel [here](https://t.me/FreshROMs)! **You don't want to miss this!** ;)

### Download Fresh 1.3
Download FreshROMs 1.3, as well as its addons through the XDA Forum, as well as official SourceForge and MEGA Links below!

#### SourceForge
##### [NFC variants](https://sourceforge.net/projects/freshroms/files/Releases/a50/1.3.1S/FRSH-QP1A_a50xx_1.3.1S_20210221005_OFFICIAL.zip/download) | [Non-NFC variants](https://sourceforge.net/projects/freshroms/files/Releases/a50/1.3.1S/FRSH-QP1A_a50dd_1.3.1S_20210221005_OFFICIAL.zip/download)
[Download Addons](https://sourceforge.net/projects/freshroms/files/Addons/11.5.2.8/)

#### MEGA
##### [NFC variants](https://tiny.cc/FRSH_A50XX-MEGA) | [Non-NFC variants](https://tiny.cc/FRSH_A50DD-MEGA)
[Download Addons](https://mega.nz/folder/xrB31Iob#TUo_t_Pcgqu7w9DMNYYkkg)

**Currently Known Issues:**

 - **Select NFC-enabled variants** have weird battery drain due to a wakelock caused by NFC. **Keeping NFC turned on fixes this issue.** A future release will fix this once-and-for-all.