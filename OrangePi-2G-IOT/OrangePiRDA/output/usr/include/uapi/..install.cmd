cmd_/home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/uapi/.install := /bin/bash /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/scripts/headers_install.sh /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/uapi /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/include/uapi ; /bin/bash /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/scripts/headers_install.sh /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/uapi /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/include ; /bin/bash /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/kernel/scripts/headers_install.sh /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/uapi /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/include/generated/uapi ; for F in ; do echo "\#include <asm-generic/$$F>" > /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/uapi/$$F; done; touch /home/frankenstein/dwms/github/OrangePiRDA/OrangePi-2G-IOT/OrangePiRDA/output/usr/include/uapi/.install
