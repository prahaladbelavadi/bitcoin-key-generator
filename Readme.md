# README 

## [Bitcoin Key Generator](https://github.com/prahaladbelavadi/bitcoin-key-generator.git)

## Description

This is a react native application to generate bitcoin key pairs on mobile.
Currently, the app is submitted for review and yet to be approved for publishing on the google play store.

### Dependencies

The app makes use of the following NPM packages:

- Bitcoinjs-lib
- react-native-bitcoinjs-lib

### Environment

For development, your machine would need to have the following installed:

- React Native ToolChain
- ~~Expo~~
- Nodejs and NPM
- Android with Gradle to generate the build

#### Setup

- Clone the repository: `git clone https://github.com/prahaladbelavadi/bitcoin-key-generator.git`
- install dependencies: `cd bitcoin-key-generator && npm i`
- start the metro server: `npm run start`
- in another terminal, to start the android emulator with the app, run `npm run android`

#### Release Process

- to generate android build, follow generate the keystore (check reference[0]) and run: `npx react-native run-android --variant=release`
- The APK file required for upload can be found at `./android/app/build/outputs/apk/release`
- Update Permissions as necessary prior to generating build if there's any changes. (Currently the app needs no explicit permissions). Changes in permissions need to be made at `./android/app/src/main/AndroidManifest.xml`

##### Reference

- https://reactnative.dev/docs/signed-apk-android
- https://reactnative.dev/docs/environment-setup