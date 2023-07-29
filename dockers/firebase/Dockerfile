FROM node:18-alpine

RUN apk --no-cache add bash curl openjdk11-jre-headless \
    && yarn global add firebase-tools \
    && firebase --version \
    && java -version


WORKDIR /firebase/

CMD [ "firebase", "emulators:start", "--import=data", "--export-on-exit" ]