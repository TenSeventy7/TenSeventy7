+++
date = 2021-09-17T16:00:00Z
description = "\"Virtual RAM\" in Android devices are all the rage today. What users don't know is that this, is the most misrepresented feature OEMs have ever cooked up ever since AT&T's 5Ge disaster two years ago."
draft = true
featureImage = ""
readtime = nil
title = "The Truth Behind Virtual RAM (It's not what you think it is)"

+++
"Virtual RAM" in Android devices are all the rage today, from Xiaomi announcing the feature for its devices earlier this year to Samsung slowly rolling out its take very recently. What users don't know is that this, is the most misrepresented feature OEMs have ever cooked up ever since AT&T's 5Ge disaster two years ago.

No, it's not a sham. But as manufacturers are placing this as a "new feature" or a "godsend" to make your device perform better is just simply wrong. In fact, **your device probably has it already all along.** So then, let's take a look on what "virtual RAM", as OEMs call it, how it benefits you, and how Samsung does it their way.

### Memory Management

Basically, a **ZRAM backing device/file** is a partition/file where the ZRAM can write to on a non-volatile storage. It moves "unused-for-too-long" portions of the memory so the ZRAM can store more "most used" memory pages.

ZRAM writeback is a **standard Android feature** and has existed for most devices for quite some time now, although OEMs have been reluctant to implement it on their devices; since it writes to storage frequently, it introduces wear to the EMMC (or in our case, UFS) chip. ZRAM writeback limits have been introduced because of this.

### RAM Plus Nonsense

I've taken a look into how Samsung cooks up their "RAM Plus" feature on the Galaxy A52s 5G, by going through how it works behind the scenes. Well, I was **disappointed** and it is **misleading** at best.

Before I save you from the technical galore it is below, RAM Plus is simply **ZRAM writeback with aggressive caching on the Android (or in our case, One UI) side**.

I was half-expecting it to be a separate swapping file or partition (as if that contributes something to a modern device with lots of RAM), but it turns out to be **just a backing file for ZRAM writeback.**

The feature is even misleading because **the backing file itself isn't even the size the feature purports it to be!** The formula the framework uses to show how much "virtual RAM" is "added" is:

`size = ((<size of backing file> / 1024) / 1024) * 4`

This means that it takes the size of the backing file (in _bytes_), divides it twice with `1024` so it gets the size in MB, **then multiplies it by 4.** This means that the backing device is **just 1GB.** The remaining 3GB? It's the size of the ZRAM, **the thing all devices already have before "RAM Plus" was even introduced.**

### Post-script

I appreciate device manufacturers for making ZRAM or swapping easier to understand by the consumer; after all, it's one of Android's greatest features (that was inherited by Linux, by the way) in order to keep user experience great and multi-tasking possible at large even on a device with just measly 2GB of RAM.

But the way they position this as a **"new feature"** is just misleading as ZRAM has existed in devices for so long. Long before OEMs cooked this up. Long before One UI even existed.

I'm not fully certain if this is the same implementation Xiaomi (their Memory Extension is slowly rolling out) and other OEMs do. But Samsung's take to this is just putting ZRAM front and center, pepper in changes that would be eventually discarded once Google enforces Generic Kernel Images (GKI) a year from now, and mislead the customer thinking this is a new thing on their devices; despite it being already present before, and even on their older smartphone.

It's disappointing, and misleading.