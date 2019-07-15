# 🐛 TypeScript back-end debugging setup

This is a boilerplate/starter project for [TypeScript][typescript] [express][express] back-end running in [Docker][docker] using [nodemon][nodemon] + [ts-node][tsnode] for watching and executing completed with [VS Code][vscode] launch settings for debugging. As a free bonus, the setup also includes [Prettier][prettier] and [eslint][eslint] configs.

## Usage

- First, run `yarn` to install dependencies.
- Run `docker-compose up` for dockerized debugger enabled development environment. Attach debugger using the included `Docker: Attach to Node` launch config.
- Run `yarn start:dev` for non-dockerized debugger enabled development environment. Attach debugger using the included `Attach to Node` launch config.
- Run `yarn build` for building for production environments.
- Run `yarn start` for starting the production environment.

## License

[MIT](LICENSE).

[typescript]: https://www.typescriptlang.org/
[express]: https://expressjs.com/
[docker]: https://www.docker.com/
[nodemon]: https://nodemon.io/
[tsnode]: https://github.com/TypeStrong/ts-node
[vscode]: https://code.visualstudio.com/
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
