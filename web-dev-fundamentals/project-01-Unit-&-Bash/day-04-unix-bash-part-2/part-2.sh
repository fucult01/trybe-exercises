#! /bin/zsh

cd unix_tests 
ls -l
chmod a+rw bunch_of_things.txt
chmod a-w bunch_of_things.txt
ls -l 
chmod 644 bunch_of_things.txt