#!/bin/bash 


mkdir unix_tests
touch trybe.txt
mv trybe.txt trybe_backup.txt
mv trybe.txt trybe-old.txt
mkdir backup
mv trybe_backup.txt backup
mkdir backup2
mv backup/trybe_backup.txt backup2
rm backup
mv backup2 backup
pwd
ls
rm -rf backup
clear
