#! /bin/zsh

cd unix_tests
cat >> skills2.txt
Internet
Unix
Bash
cat >> skills2.txt
Javascript
Python
CSS
C++
Java
wc -l skills2.txt
cat skills2.txt | sort | head -3 > top_skills.txt
cat >> phrases2.txt
stretching forever into everything
grep -ic br phrases2.txt
grep -vc br phrases2.txt
cat >> phrases2.txt
Russia
Portugal
sort bunch_of_things.txt

