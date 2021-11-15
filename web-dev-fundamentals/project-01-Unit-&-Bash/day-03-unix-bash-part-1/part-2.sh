#! /bin/zsh

cd unix_tests

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cat countries.txt
less countries.txt
grep Brazil countries.txt
grep brazil countries.txt
cat >> phrases.txt
'Make visible what, without you, might perhaps never have been seen'
grep -iv fox phrases.txt
wc -w phrases.txt
wc -l phrases.txt
touch empty.tbt empty.pdf
ls -a
ls -a *.txt
ls -a *.{txt,tbt}
man ls