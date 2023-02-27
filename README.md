# Chrome extension with Vue3 + Tailwind + Vuetify 

## Project setup
```
npm install -g json-server
npm install
```

### Compiles and hot-reloads for development
In one terminal start the mock API that serves some quotes:
```
cd mock-api
json-server --watch quotes.json
```

Compiles and hot-reloads for development
```
npm run build-watch
```

### Install dist folder as chrome extension 
- chrome://extensions/

- Make sure you are in Developer mode

- Import uncompress extension

- Test on a tab that has a real website URL (google.com for example), otherwise the background script wont be able to communicate with the content.