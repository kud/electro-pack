# Electro-Pack

## Introduction

Welcome to Electro-Pack, an open-source project designed to simplify the process of generating and maintaining multiple desktop applications using [Nativefier](https://github.com/nativefier/nativefier).

Nativefier is a command line tool that allows you to create a desktop application for any web site with succinct and minimal configuration. Electro-Pack expands on this by providing a streamlined process to manage multiple applications with ease.

## Features

- **Batch Generation**: With Electro-Pack, generate multiple applications at once using a single configuration file.

- **Custom Configurations**: Define individual settings for each app, such as icons, window size, and more.

- **Cross-Platform Support**: Electro-Pack is built with Node.js and can be used on Windows, MacOS, and Linux.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 14.0 or later
- [NPM](https://www.npmjs.com/) 6.0 or later (usually comes with Node.js)
- [Nativefier](https://github.com/nativefier/nativefier) installed globally.

### Installation

1. Clone this repository:

```bash
git clone https://github.com/kud/electro-pack.git
```

2. Navigate into the electro-pack directory:

```bash
cd electro-pack
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Create the `/apps/NAME_OF_THE_APP.js` file with the specific configurations for the app.

```js
const options = {
  name: "Name of the app",
  targetUrl: "https://example.com",
  userAgent: "firefox",
}

export default options
```

2. Run Electro-Pack:

```bash
npm run start
```

This will start the process of generating your applications based on the configuration file.

<!-- ## Contribution

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how you can contribute to the project and the process for submitting pull requests to us. -->

## License

<!-- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. -->

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to the team behind [Nativefier](https://github.com/nativefier/nativefier) for creating such a versatile tool.

Feel free to submit issues and enhancement requests. We'd love to hear your feedback and make this project more efficient and easy-to-use for everyone.
