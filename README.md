![](https://github.com/kreuzerk/nx-release/blob/main/libs/nx-release/assets/nx-release-logo.svg)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-) [![Coverage Status](https://coveralls.io/repos/github/kreuzerk/nx-release/badge.svg?branch=feature/generators)](https://coveralls.io/github/kreuzerk/nx-release?branch=feature/generators)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

This library contains executors and generators

Your go-to open-source library for effortless semantic releases of NPM libraries within a monorepo. This repository provides generators and executors for a fully automated release setup that contains commit analyzation, automated versioning, changelog generation and publishing.

The library provides generators and executors:

- Generators
- Executors

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Generators](#generators)
  - [configure](#configure)
  - [configure-workspace](#configure-workspace)
  - [configure-library](#configure-library)
  - [configure-libraries](#configure-libraries)
  - [generate-gh-actions](#generate-gh-actions)
  - [generate-release-config](#generate-release-config)
- [Executors](#executors)
  - [npm-publish](#npm-publish)
  - [update-version](#update-version)
  - [build-update-publish](#build-update-publish)
  - [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Generators

The provided generators help you setup automated library releasing in an existing NX workspace. This process works for all kind of libraries since its framework agnostic. The following generators are provided:

## configure

The `configure` workspace generator allows you to setup the workspace plus the libraries of you choice. Internally this generator calls the `configure-workspace` as well as the `configure-libraries` generator. The generator can be invoked with the following command:

```npx nx g nx-release:configure```

The generators provides the follwing options:

| option                | description                                                  | default | prompted |
| --------------------- | ------------------------------------------------------------ | ------- | -------- |
| installDeps           | Should we install semantic-release and all the required plugins | true    | yes      |
| generateReleaseConfig | Should we generate a semantic-release configuration at the root of your workspace | true    | yes      |
| generateGhActions     | Should we generate GitHub actions for feature branches and releases | true    | yes      |
| publicPublishConfig   | Should we add public publish config for your library         | true    | Yes      |

## configure-workspace

```npx nx g nx-release:configure-workspace```

The `configure-workspace` generator allows you to setup automated releases on a **workspace level only**. The generator will then prompt the following options:

| option                | description                                                  | default | prompted |
| --------------------- | ------------------------------------------------------------ | ------- | -------- |
| installDeps           | Should we install semantic-release and all the required plugins | true    | yes      |
| generateReleaseConfig | Should we generate a semantic-release configuration at the root of your workspace | true    | yes      |
| generateGhActions     | Should we generate GitHub actions for feature branches and releases | True    | yes      |

## configure-library

```npx nx g nx-release:configure-library```

The `configure-library`generator sets up a library for semantic release. When setting up the library it will use some of the executors provided by `nx-release`.

| option              | description                                          | default | prompted                            |
| ------------------- | ---------------------------------------------------- | ------- | ----------------------------------- |
| publicPublishConfig | Should we add public publish config for your library | true    | yes                                 |
| libName             | The name of the library that should be configured    |         | only if nothing is passed initially |

## configure-libraries

```npx nx g nx-release:configure-libraries```

The `configure-libraries`generator sets up a multiple libraries for semantic release. When setting up the libraries it will use some of the executors provided by `nx-release`.

| option              | description                                          | default | prompted                          |
| ------------------- | ---------------------------------------------------- | ------- | --------------------------------- |
| publicPublishConfig | Should we add public publish config for your library | true    | yes                               |
| libName             | The name of the library that should be configured    |         | will be prompted during execution |

## generate-gh-actions

```npx nx g nx-release:generate-gh-actions```

This generator can be used to generate two workflow files for automated releasing. This generator will generate the following two files:

- ci.yml (this file configures a pipeline that is run on Pull request)
- release.yml (file that releases the library / by default it has to be triggered manually)

## generate-release-config

```npx nx g nx-release:generate-release-config```

This generator generates a `release.config.js` file at the root of your project.

# Executors

## npm-publish

As the name indicates the `npm-publish` generator can be used to publish a library to NPM. To
do so **the executor requires a `NPM_TOKEN` to be present as a Node environment variable**.


## update-version
This executor updates the `package.json` version in the specified library. The executor **requires** the following config options.**The update-version executor expects a VERSION env variable to be present**.

## build-update-publish
This executor combines the previous two executors and additionally performs a release.

**This command expects a valid NPM token to be present as a `NPM_TOKEN` environment variable and the new release version to be present as a `VERSION` variable**.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@kevinkreuzer"><img src="https://avatars.githubusercontent.com/u/5468954?v=4?s=100" width="100px;" alt="Nivek"/><br /><sub><b>Nivek</b></sub></a><br /><a href="https://github.com/kreuzerk/nx-release/commits?author=kreuzerk" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!