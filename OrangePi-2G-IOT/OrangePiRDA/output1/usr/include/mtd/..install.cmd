cmd_/home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/mtd/.install := /bin/bash /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/scripts/headers_install.sh /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/mtd /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/include/uapi/mtd inftl-user.h mtd-abi.h mtd-user.h nftl-user.h ubi-user.h; /bin/bash /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/scripts/headers_install.sh /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/mtd /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/include/mtd ; /bin/bash /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/scripts/headers_install.sh /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/mtd /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/include/generated/uapi/mtd ; for F in ; do echo "\#include <asm-generic/$$F>" > /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/mtd/$$F; done; touch /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/mtd/.install