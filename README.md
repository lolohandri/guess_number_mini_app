# Getting started

To use this Telegram Mini App there is need _https_ protocol *(Telegram Api works only with _https_)*
, and it is achieved with [Ngrok](https://ngrok.com/).

## First set up ngrok and run tunnels
### If using windows
```choco install ngrok
    choco install ngrok
```
### if using macOS
```brew install ngrok/ngrok/ngrok
    brew install ngrok/ngrok/ngrok
```
### if using linux
```snap install ngrok
    snap install ngrok
```

### Run tunnels
Run this two copiable pieces in two separate _command lines_ 
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

### Running
Use `npm run start` to start the project in `api` and `ui` folders

Use `npm run bot` to start bot in `bot` folder