FROM node:lts
COPY ./ /jianshu
RUN cd /jianshu/fe && npm install
RUN cd /jianshu/server && npm install
CMD sh /jianshu/start.sh && tail -f /dev/null