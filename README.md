# Chrome extension with Vue3 + Tailwind + Vuetify 
This is a very powerful start point for a chrome extension. 
- Vue3
- Vuetify
- Tailwind

Also demonstrates how to fetch data from a server and how communication from popup, background and content scripts work (Check the log functionality)
- Sample functionality:
![image](https://user-images.githubusercontent.com/1836450/221446026-091d35d9-fb18-4a9f-9765-b33220b41c68.png)

![image](https://user-images.githubusercontent.com/1836450/221446050-239d9e47-875f-4051-90d5-03cde3f4f159.png)

* Check logs on the site. (normally logs doesn't appear on the website console, but on the context of the extension, this is an added functionality)
![image](https://user-images.githubusercontent.com/1836450/221446175-dc61aeb9-3337-4a07-a99b-9c9049f329ff.png)


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
