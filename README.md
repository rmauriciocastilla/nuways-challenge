# Nuways-challenge

DEPLOY: https://addressbooknuways.netlify.app/

## 1. Instalación
Una vez se clone el repositorio se debera proceder a ejercutar el comando **npm install** en la carpeta api/ y carpeta client/

*En la carpeta api, se requiere crear un archivo .env, sin embargo, hay uno de ejemplo en el cual es requerida una URI de una base de datos Postgres y el puerto donde escuchara la API.*

## 2. Librerias y tecnologias utilizadas.
Javascript, HTML, CSS, ReactJS, ReduxJs, NodeJS, ExpressJS, Sequelize, PostgreSQL

## 3. Estructura de directorios

/Nuways-challenge
    /client
        /public
        /src
            /components
                /Contact
                    /Contact.css
                    /Contact.jsx
                /Contacts
                    /Contact.css
                    /Contact.jsx
                /Create
                    /Create.css
                    /Create.jsx
                /Update
                    /Update.jsx
            /redux
                /actions
                    /index.js
                    /variables.js
                /reducer
                    /index.js
                /store
                    /index.js
            /App.css
            /App.js
            /index.css
            /index.js
            /package.json
    /api
        /src
            /controllers
                /index.js
            /models
                /User.js
            /routes
                /index.js
            /app.js
            /db.js
        /.env
        /index.js
        /package.json
    /.gitignore
    /README.md

## 4. No implemente WebSockets