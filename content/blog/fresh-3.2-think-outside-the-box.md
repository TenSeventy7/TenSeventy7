+++
date = 2021-07-28T02:25:00Z
description = "We're breaking boundaries of what your device can do. Fresh 3.2 is here."
featureImage = "/uploads/fresh169banner.png"
readtime = 15
title = "Fresh 3.2: Think Outside the Box"

+++
This might be the _freshest_ release to date, and it's breaking the boundaries of what you can do with your phone. Fresh 3.2 is here with zesty new stuff, crisp new experiences, and garden-fresh features!

### Flagship All Around

Fresh 3.1 brought apps and features from flagship and the latest Samsung devices, this time I'm bringing the whole package **wholesale.**

![](/uploads/screenshot_20210728-145527_samsung-dex.jpg)![](/uploads/screenshot_20210728-145444_gallery.jpg)

Fresh 3.2 is the very first Fresh release to be based upon a flagship Samsung Galaxy device, namely the **Galaxy S20 Fan Edition**; hence these new releases coined "Fresh Edition" builds. This brings the stuff that you've only dreamt before with your Galaxy A device, including **Samsung DeX\[1\]** and **live blur\[1\]** functionality.

This base change also brings more rich camera and media experiences. Say goodbye to bland Single Take shots as **full ST 2.0** support is here with collage, portrait, and even full support for video highlights! **Motion Photos** is here as well, take shots even before you press the shutter button. **My Filter** has been improved as well with better filter generation. Plus, reminisce memories in better and clearer quality with **Photo Remastering** options on the Gallery!

### A Bigger Hub

![](/uploads/screenshot_20210728-145510_fresh-hub.jpg)

Fresh Hub was introduced with Fresh 3 as a way to make updating your device easier. Starting Fresh 3.2, the Hub is getting more features to make your phone yours.

Fresh 3.2 brings **Zest**, your one-stop shop for all Fresh-specific options, tweaks, and more! Make your phone yours with **Color-matching Themes**; and yes, it's inspired by Android 12's Monet (and is released before Android 12 xD). Match your device theme with your current home or lock screen wallpaper and make your phone truly yours.

This release also brings **icon customization options** for the Wi-Fi and data connection icons, with more comprehensive options coming very soon.

### Dual Messenger Missing

A change in how "special users" are managed on One UI 3 are causing bootloops on devices with lock screen security **enabled and set,** and Dual Messenger **enabled.** With this, Dual Messenger has been temporarily removed from main Fresh starting 3.2.

**This is an issue introduced by Samsung in Android 11 and affects all ROMs and devices running One UI 3.** I'll put support back once I find a workaround or an alternative.

For the meantime, you can use alternatives found on the Play Store. An addon is also available on Fresh Hub that re-adds support, but **you should not use lock screen security or bootloop issues will occur.**

### Fresher Phone

Fresh 3.2 brings the **July 2021** security patches, along with Fresh Core based on **4.14.212**. This ensures better security from Samsung, Google, and the Linux community.

Plus, optimizations on the kernel and system-level makes Fresh 3.2 behave and perform exactly (and even better) than 3.1, despite the bigger base.

This release also brings **full support for Android Pony EXpress (APEX)** modules introduced by Google in Android 10. This allows Google Play to update vital Android components, including the Android Runtime (ART), timezone data, and more without updating the whole ROM.

### A Bigger Family

![](/uploads/fresh-server-icons-community.png)

Fresh 3.2 will be the first release to support **U.S. variants** of the Samsung Galaxy A50, to be released very soon. Plus, support for the **Samsung Galaxy A50s** is coming Q3-Q4 2021, with beta registrations to start soon. Stay tuned!

Not only Fresh family of devices is getting larger, the community Fresh has brought has become larger since the ROM's first release last December. All of you have made this possible, from beta testing to feature requests.  Not only Fresh has broke the boundaries of what your device can do, the community has broke the boundaries of what is possible with Fresh.

To that I say, **thank you.** I just recently celebrated my birthday, and to be honest this is the best gift I have ever received. :>

### Full Changelog

    **Fresh 3.2 Update with One UI 3.1**
     - The security of your device has been improved with July 2021 security patches.
     - Better security with full support for Google System Security Updates
     - Screen resolution changing has been improved.
     - Easily access Quick Share from settings
     - Easy access to Nearby Share and other sharing options when you share photos, videos, and more.
     - More full-featured Gallery search
     - Improvements to the camera
     - Fixes for Dolby Atmos
     - Full VoLTE support for Dito Telecommunity (PH)
    
     - Dual Messenger is now optional due to changes that causes issues on users with lock screen security. See the full changelog for more information.
     - Some apps will need to be updated separately after the update.
     - Fresh Core addon has been pulled from the store. A new way to update the kernel will be available soon.
     - Samsung DeX touchpad support depends on the kernel installed. Fresh Core currently supports it, with more kernels supporting the feature in the near future.

### Download Fresh 3.2

**Fresh 3.2 is now available as an over-the-air update for current 3.1.3 users.** If you haven't updated to 3.1.3 yet, update to it first so you can receive 3.2.2.

Fresh 3.2 will be fully available for everyone on the XDA Forum and the Fresh website on **July 30, 2021 at 7:30 AM.**

Addons are available on Fresh Hub as well as on the Fresh website.

_\[1\] Installed separately as addons_

#### Important Developer Information

Fresh 3.2 will now enable users to use Samsung DeX (wireless, on PC), Samsung's implementation of Desktop Mode for Android. From testing, it has been shown that its touchpad functionality is done at the kernel level, and requires kernel support for users to be able to use DeX Touchpad.

If you are a **kernel developer**, it is advised to merge the following patches for touchpad functionality to work:

[Patch 1](https://github.com/TenSeventy7/android_kernel_samsung_exynos9610_fresh/commit/266162ef9d23240d6840a4abc9a8192751b52306)

[Patch 2](https://github.com/TenSeventy7/android_kernel_samsung_exynos9610_fresh/commit/658437573b6ebc9201c4095d4977a0dc29f6ae85)

[Patch 3](https://github.com/TenSeventy7/android_kernel_samsung_exynos9610_fresh/commit/a3a846986161defa7afc866f56f598c3ddf75edd)

[Patch 4](https://github.com/TenSeventy7/android_kernel_samsung_exynos9610_fresh/commit/45c76ba577a297827980b8990d0e3ad3b827745e)

Patches are adapted from the Galaxy Z Fold kernel, which includes display drivers (albeit newer, and with DeX support) also used on the A50. Thank you.