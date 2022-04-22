# hirek

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### fson server
`npm run json`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Környezet

# Vue CLI
(`CLI`: Command Line Interface (parancssoros felhasználói felület))  
Telepítés: `npm install -g @vue/cli`  
Ezzel tudunk Vue projekteket létrehozni

## vue projekt létrehozása
`vue create todoapp`  
Kiválasztunk nyíllal egy konfigurációt  (Vue 2 babel, eslint)  
NPM csomagkezelőt választjuk


# [Json-server](https://github.com/typicode/json-server)
Globálisan telepítjük, hogy máshol is tudjuk használni:  
`npm install -g json-server`

Hogy a statikus fájlokat ki tudja szolgálni, az index.html-t át kell pakolni egy `public` mappába. Alapértelmezetten innene szolgál ki.

## db.json létrehozása, json-server idítása
A teszt adatbázisunkat ez szolgálja ki.  
Ezzel a paranccsal létrejön a db-json és a server elindul:  
Érdemes a package.json-ba beépíteni  
`json-server --watch db.json`


## VS Code
### VsCode Vetur plugin telepítése
A vue fájlokhoz szükséges segéd plugin  
.vue fájlokban kezdjük begépelni: `vue` és tab   
[vetur](https://vuejs.github.io/vetur/guide/FAQ.html#vetur-can-t-find-tsconfig-json-jsconfig-json-in-xxxx-xxxxxx)

## Modulok
Ajaxos kérésekhez: `npm install vue-resource` 
Vuer router: `npm install vue-router --save`  
Bootstrap: `npm install bootstrap`  
Bootstrap icons: `npm i bootstrap-icons`  

## main.js-ben
`import 'bootstrap'`  
`import 'bootstrap/dist/css/bootstrap.min.css'`  
`import "bootstrap-icons/font/bootstrap-icons.css"`  

## 404
[404](https://stackoverflow.com/questions/45619407/how-to-create-a-404-component-in-vuejs-using-vue-router)

