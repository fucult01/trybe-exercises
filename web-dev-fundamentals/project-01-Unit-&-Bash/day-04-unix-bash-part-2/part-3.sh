#! /bin/zsh

ps
sleep 30 &
ps 
kill 2940
sleep 30
# CTRL + Z to suspend currently processes
bg 
sleep 300 &
sleep 200 
# CTRL + Z to suspend sleep 200
sleep 100
# CTRL + Z to suspend sleep 100
jobs
fg %1
# CTRL + Z to suspend sleep 300
bg
killall sleep
