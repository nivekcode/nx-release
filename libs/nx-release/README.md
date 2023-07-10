![](./assets/nx-release-logo.svg)

This library contains executors and generators 

Your go-to open-source library for effortless semantic releases of NPM libraries within a monorepo. This repository provides generators and executors for a fully automated release setup that contains commit analyzation, automated versioning, changelog generation and publishing.

The library provides generators and executors:

- Generators
- Executors

# Generators

The provided generators help you setup automated library releasing in an existing NX workspace. This process works for all kind of libraries since its framework agnostic. The following generators are provided:

## configure-workspace

The `configure-workspace` generator allows you to setup automated releases on a **workspace level only**. The generator can be executed with the following command:

```npx nx-release:configure-workspace```

The generator will then prompt the following options:

| option                | description                                                  | default | prompted |
| --------------------- | ------------------------------------------------------------ | ------- | -------- |
| installDeps           | Should we install semantic-release and all the required plugins | true    | yes      |
| generateReleaseConfig | Should we generate a semantic-release configuration at the root of your workspace | true    | yes      |
| generateGhActions     | Should we generate GitHub actions for feature branches and releases | True    | yes      |

## configure-library

The `configure-library`generator sets up a library for semantic release. When setting up the library it will use some of the executors provided by `nx-release`.

| option              | description                                          | default | prompted                            |
| ------------------- | ---------------------------------------------------- | ------- | ----------------------------------- |
| publicPublishConfig | Should we add public publish config for your library | true    | yes                                 |
| libName             | The name of the library that should be configured    |         | only if nothing is passed initially |

## configure-libraries

The `configure-libraries`generator sets up a multiple libraries for semantic release. When setting up the libraries it will use some of the executors provided by `nx-release`.

| option              | description                                          | default | prompted                          |
| ------------------- | ---------------------------------------------------- | ------- | --------------------------------- |
| publicPublishConfig | Should we add public publish config for your library | true    | yes                               |
| libName             | The name of the library that should be configured    |         | will be prompted during execution |

# Executors

## NPM publish

As the name indicates the `npm-publish` generator can be used to publish a library to NPM. To 
do so the executor expects a `NPM_TOKEN` to be present as a Node environment variable.

The generator furthermore requires the following options:

- **libName** the name of the library you want to publish. The executor will then automatically construct the path which points to dist/libs/${libName}

Maybe you have a more sophisticated setup and therefore your library is in a different path. In such cases you can use the `libPath` property to configure the generator accordingly.

- **libPath** (optional) for example 'dist/libs/my-domain'


## update-version
This executor updates the `package.json` version in the specified library. The executor **requires** the following config options:

- **libName**: the name of the library. The path will be constructed in the following way: `libs/${libName}/package.json`

if your library is in a different folder, you can always optionally specify the library path:

- **libPath**: optional library path. for example: `libs/my-domain`

**The update-version executor expects a VERSION env variable to be present**

## build-update-publish
This executor combines the previous two executors and additionally performs a release. It also accepts the same options as the other ones:

- **libName** (required): name of the library
- **libPath** (optional): path of the library

** This command expects a valid NPM token to be present as a `NPM_TOKEN` environment variable and the new release version to be present as a `VERSION` variable.
