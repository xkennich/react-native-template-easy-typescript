## Usage

```sh
react-native init MyApp --template easy-typescript
```

### before init
1. Rename file `.env.example` to `.env`

### Let's build the best React Native template together 🚀

Please check out the [contributing document](CONTRIBUTING.md).

Preconfigured with

- [styled-components](https://github.com/styled-components/styled-components) Styling your app
- [styled-system](https://github.com/styled-system/styled-system)
- [React Navigation](https://reactnavigation.org/) for navigation and deeplinking.
- [Code Push](https://github.com/microsoft/react-native-code-push) syncronize JavaScript and Images with over-the-air updates.
- [react-native-svg](https://github.com/react-native-community/react-native-svg) because svg.
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) import env file
- [AsyncStorage](https://github.com/react-native-community/async-storage) you're gonna install it anyway.
- [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo) Network Info API for Android, iOS, macOS & Windows.
- [FastImage](https://github.com/DylanVann/react-native-fast-image) its more performant.
- [Detox](https://github.com/wix/Detox) for e2e.

## CodePush

In order to use code push you must be logged into the correct Microsoft App Center account.

### Prerequisites

```
npm install -g code-push
code-push login
```

At this point you will be required to log into the account tied to the code push public keys in Info.plist

### Deployment

```
code-push release-react YourApp-iOS ios -d <DEPLOYMENT>
```

The deployment can either be `Staging` or `Production` depending on the mode of the application you wish to update was built in through XCode.

#### Aliases

```js
src: './src'
```




This project is [MIT](LICENSE) licensed.
