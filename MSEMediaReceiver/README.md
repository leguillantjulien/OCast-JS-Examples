# MSEMediaReceiver
OCast JS SDK implementation using the Dash.JS Player
## License
All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.

## Requirements
-   need to link with the stick simulator 'dongletv' tool
-   node environment
## Installation
install and launch the stick simulator tool :
```
https://github.com/Orange-OpenSource/ocast-dongletv-simulator
npm i -g
dongletv start all
```
Clone and install the project :
```
git clone https://github.com/leguillantjulien/OCast-JS-Examples.git
npm install
cd MSEMediaReceiver
```
### Launch
`npm run start`

- Use query param ?secure=true to use secure WebSockets

### Build
`npm run build`
### Lint
`npm run lint`