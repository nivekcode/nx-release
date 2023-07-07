# nx-release

This library contains executors to ease automated releases with Nx and semantic release. The library
provides the following executors:

- npm-publish
- update-version

## NPM publish
As the name indicates the `npm-publish` generator can be used to publish a library to NPM. To 
do so the executor expects a `NPM_TOKEN` to be present as a Node environment variable.

The generator furthermore requires the following options:

- **libName** the name of the library you want to publish. The executor will then automatically construct the path which points to dist/libs/${libName}

Maybe you have a more sophisticated setup and therefore your library is in a different path. In such cases you can use the `libPath` property to configure the generator accordingly.

- **libPath** (optional) for example 'dist/libs/my-domain'


## update-version
This executor updates the `package.json` version in the specified library. The executor **requires** the following config options:

- **version**: the new version
- **libName**: the name of the library. The path will be constructed in the following way: `libs/${libName}/package.json`

if your library is in a different folder, you can always optionally specify the library path:

- **libPath**: optional library path. for example: `libs/my-domain`
