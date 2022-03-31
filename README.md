# Electron NTA

A basic Electron app with login, users list, simulation of a call and a chat, and a search to look for the title of opened processes or programs.

![image](https://user-images.githubusercontent.com/55627630/160927156-da687c54-6426-4491-aa7f-ddf14a9897fe.png)

## Table of contents

* [Installation](#installation)
* [Build](#build)
* [Tasks](#tasks)
* [About tasks and time to work](#about-tasks-and-time-to-work)
* [Main technologies used](#main-technologies-used)

## Installation

To run this app, download the release attached on this repo. After download it, just run the exe file and follow the instructions. At the end, you'll have the app installed on your computer.

## Build

To build this app, clone the repo using this command:

```
git clone https://github.com/richardqcarvalho/electron-nta.git
```

After cloned, run
````
npm i
````

or

````
yarn
````

depending on which package manager you have on your machine.

At the end of the packages installation, run

````
npm run build
````

or 

````
yarn build
````

and wait for the end of the build.

At the end, you'll have an folder called `dist` on root of the project.

Inside that, you'll have the executable published on the repo release.

In addition, you can run

````
npm run dev
````

or 

````
yarn dev
````
to open a webpack server and do changes to this app and see it being updated simultaneously.

Enjoy!

## Tasks

- [x] The user have to be able to login with NTA api credentials
- [x] The user have to be able to see the users registered on NTA api
- [x] The user have to be able to see information about the users registered
- [x] The app have to simulate a call to some user listed
- [x] The app have to allow user see the title of Google Chrome in the app window

## About tasks and time to work

This app was done in almost one week and a half, having the time distributed between three weeks and divided with some others tasks.

The most difficult part was construct the structure from the zero and find a way to see the information of the processes and program opened.

## Main technologies used

- Electron
- React
- Webpack
- Framer Motion
- Redux
- Node Child Process

## Explaining some choices

- Why use preload funcs instead of turn on nodeIntegration flag?

    When I was studying about Electron, I discovered that expose all node funcs on renderer was a very bad security implementation, cause the "server" things could be accessed by the "client" side. Use preload funcs allow to the dev to choose what node funcs will be necessary to something in renderer and how and how much this will be needed.

- Why use index.js and element jsx in the structure of the pages and components?

    Just to improve the dev experience on code editor. When I have the names writed like right here, is easier to find what I need to find when I'm looking for some page or component. In addition, the index.js avoid to write on import section all the name of jsx file, which usually gets pretty big because of this writing logic.