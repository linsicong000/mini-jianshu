#!/usr/bin/env bash

cd /jianshu/fe
nohup npm run dev >/jianshu/fe.log 2>&1 &
cd /jianshu/server
npm run start >/jianshu/server.log 2>&1 &