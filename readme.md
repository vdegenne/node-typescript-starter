# node-typescript-starter

A starter you can use to start a node project that uses typescript as the compilation environment.

## Installation

You can use the the classic `git clone`
```bash
$ git clone https://github.com/vdegenne/node-typescript-starter.git
```

But it's not recommended because this will fetch the last state of the repo, hence it could be buggy if some changes occur. Instead download from the *release section* of github or use github-fetch-starter ([click here for more details])(https://github.com/vdegenne/github-fetch-starter.git). `github-fetch-starter` lets you download a specific release and install it on your filesystem in just a **\*snap!\***

## Post-Installation

After the download. You have to install the dependencies (not included for making the release small).

```bash
$ yarn install
```

Now that the dependencies are installed, you can start to modify the tests (under `\src\test`) and the sources (under `\src`). Small chunks have been left intentionnally for you to have an idea how to write a test and start the code.

Once you are ready to try some tests, run `yarn test:watch` in a separate command line. This will respond to any further changes you make in the `src` directory, and run `tsc` and `mocha` subsequently.
