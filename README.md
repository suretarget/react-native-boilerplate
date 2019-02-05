# Instagram UI react-native-boilerplate 😄

Instagram UI Clone developed using [react-native-boilerplate](https://github.com/prasanthLalapeta/react-native-boilerplate) :raised_hands: :muscle:

## Description

> Developed Instagram UI with the help of react-native-boilerplate. This sample scaffolding can be used for any projects from small scale to large scale if you want to develop Instagram kind of app.

## ScreenShots

![Instagram UI Clone](https://raw.githubusercontent.com/prasanthLalapeta/Assets/master/react-native/Instagram-Clone.png)

## Sctructure

```
 - AppSwitchNavigator
    - AuthenticationScreen
      - Login Button
    - HomeScreen - HomeScreenTabNavigator
      - Tab 1 - HomeStack
      - Tab 2 - FavouritesStack
      - Tab 3 - NotificationsStack
      - Tab 4 - ProfileStack
    - Any files you don't want to be a part of the Tab Navigator can go here.
```

## JDK and Android development environment setup

https://facebook.github.io/react-native/docs/getting-started > Building Projects with Native Code

## Project introduce

```
git clone https://github.com/prasanthLalapeta/react-native-boilerplate.git  

cd react-native-boilerplate

npm install

react-native start

react-native run-android
```

#### Start Server

Use Emulator for running project

## Packages used for scaffolding
- [√] react
- [√] react-native
- [√] react-navigation
- [√] react-native-gesture-handler
- [√] react-native-vector-icons
- [√] native-base

## If compilation fails while running app for first time

> For using react-navigation

```
npm install --save react-native-gesture-handler
react-native link
```

> For using react-native-vector-icons 'copy fonts folder from node_modules/react-native-vector-icons to android/app/src/main/assets/fonts'

Pull requests accepted with love
