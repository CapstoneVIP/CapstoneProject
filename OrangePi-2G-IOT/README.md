# OrangePi Build for DWMS

OrangePiRDA targets the OrangePi-2G-IOT device and contains the build tools and base for a Linux based operating system.
*   kernel
*   uboot (bootloader) 
*   rootfs
## Build Dependencies
Ubuntu/Debian system (./build.sh will call *bash* script to automatically install using apt-get install)
An Ubuntu 16.04 64-bit OS and machine was used with the following dependancies:
```sudo apt-get install bsdtar mtools u-boot-tools pv bc \
   gcc automake make \
   lib32z1 lib32z1-dev qemu-user-static \
   dosfstools figlet device-tree-compiler debootstrap
```
You should probably first:
`sudo apt-get update`
before installing dependancies, but assumed this was the case

## Installing Armbian
1. Download image from OrangePi.org ([direct link to Mega](https://mega.nz/#!80dwwa7D!1sVnlic9EwP7gj595AJemQ59LXY8QUg5z9XyQXyJXdc))
2. Using dd burn the *Armbian_**_Orangpi2g-iot_Deb.img* to an TF card (class 10 for best results).
`dd bs=4M if=/[dirXY]/[Armbian_*_.img] of=/dev/sdX`
Of course, /dev/sdX you need to replace with the TF card device like /dev/sdb (NOT /dev/sdbY).
3. Place jumper into position to boot from TF card, rather than NAND device.
4. Use debug console via USB TTL to Serial ([linky](https://www.adafruit.com/product/954) connector.

