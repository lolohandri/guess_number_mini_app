# Tech Stack
- ![Telegram](https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- ![Ngrok](https://img.shields.io/badge/Ngrok-003534?logo=ngrok&logoColor=white)

# Table of Contents
- [Getting started](#getting-started)
  - [Ngrok](#ngrok)
    - [Download Ngrok](#download-ngrok)
      - [Windows](#windows)
      - [MacOS](#macos)
      - [Linux](#linux)
    - [Run tunnels](#run-tunnels)
  - [Install npm](#install-npm)
  - [Running](#running)

# Getting started

To use this Telegram Mini App there is need _https_ protocol *(Telegram Api works only with _https_)*
, and it is achieved with [Ngrok](https://ngrok.com/).

## Ngrok
### Download Ngrok
#### `Windows`
```choco install ngrok
    choco install ngrok
```
#### `MacOS`
```brew install ngrok/ngrok/ngrok
    brew install ngrok/ngrok/ngrok
```
#### `Linux`
```snap install ngrok
    snap install ngrok
```

### Run tunnels
Run this two copiable pieces in two separate _command propmts_ 
```ngrok config add-authtoken 2lGTA18Nr45uNUDoOQJxMjlXACN_5E4es5i13VMhW9JzCTBu5\ngrok http --domain=possible-tapir-internally.ngrok-free.app 3001\n
    ngrok config add-authtoken 2lGTA18Nr45uNUDoOQJxMjlXACN_5E4es5i13VMhW9JzCTBu5
    ngrok http --domain=possible-tapir-internally.ngrok-free.app 3001
```

```ngrok config add-authtoken 2lFVYIGzWNdac1NbU5miyRRsNeu_6LF55QLFAfXMHHatxVQii\ngrok http --domain=up-steadily-lab.ngrok-free.app 3000\n
    ngrok config add-authtoken 2lFVYIGzWNdac1NbU5miyRRsNeu_6LF55QLFAfXMHHatxVQii
    ngrok http --domain=up-steadily-lab.ngrok-free.app 3000
```

## Install npm
Intall `node_modules` inside `api` , `ui`, `bot` folders

## Running
Use `npm run start` to start the project in `api` and `ui` folders

Use `npm run bot` to start bot in `bot` folder
