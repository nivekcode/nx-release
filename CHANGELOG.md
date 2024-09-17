## [3.3.0](https://github.com/CarlosGilB/nx-release/compare/v3.2.0...v3.3.0) (2024-01-20)


### Features

* **npm-publish:** do not override current .npmrc file ([c71f7dd](https://github.com/CarlosGilB/nx-release/commit/c71f7dd000593d4ffb869a5d26db4850690adc76))

## [3.2.0](https://github.com/CarlosGilB/nx-release/compare/v3.1.6...v3.2.0) (2024-01-18)


### Features

* **npm-publish:** add option to specify npm registry ([f576088](https://github.com/CarlosGilB/nx-release/commit/f5760886cb332702a7fb3e025ec3e2148f50bc16))

## [3.1.6](https://github.com/CarlosGilB/nx-release/compare/v3.1.5...v3.1.6) (2023-09-27)


### Bug Fixes

* 🐛 add missing inquirer dependency ([c05a44b](https://github.com/CarlosGilB/nx-release/commit/c05a44bef872c0acce6c2d1f609dcb5db45c4782))

## [3.1.5](https://github.com/CarlosGilB/nx-release/compare/v3.1.4...v3.1.5) (2023-07-13)


### Bug Fixes

* 🐛 trigger release ([d5b78a3](https://github.com/CarlosGilB/nx-release/commit/d5b78a3f1139147dc1374e7a1ffc4b25c1028f7b))

## [3.1.4](https://github.com/CarlosGilB/nx-release/compare/v3.1.3...v3.1.4) (2023-07-12)


### Bug Fixes

* 🐛 install missing conventional commits dep ([4671b5e](https://github.com/CarlosGilB/nx-release/commit/4671b5e04d46edadba2221e510edd2e3fdb29b0b))

## [3.1.3](https://github.com/CarlosGilB/nx-release/compare/v3.1.2...v3.1.3) (2023-07-11)


### Bug Fixes

* 🐛 remove the all selection option ([2fc13d0](https://github.com/CarlosGilB/nx-release/commit/2fc13d00bb43ec5f7378a002af6c6bc3f3965f6f))

## [3.1.2](https://github.com/CarlosGilB/nx-release/compare/v3.1.1...v3.1.2) (2023-07-11)


### Bug Fixes

* 🐛 generate files before installing ([928237f](https://github.com/CarlosGilB/nx-release/commit/928237fab4d8b2771dc0918fbb351cccb5209641))

## [3.1.1](https://github.com/CarlosGilB/nx-release/compare/v3.1.0...v3.1.1) (2023-07-11)


### Bug Fixes

* 🐛 update tslib dep ([8464424](https://github.com/CarlosGilB/nx-release/commit/84644240b9a34cf5babb0cb0bc7fdd3e1941ae1f))

## [3.1.0](https://github.com/CarlosGilB/nx-release/compare/v3.0.0...v3.1.0) (2023-07-11)


### Features

* 🎸 select all option on libraries configurator ([22a3208](https://github.com/CarlosGilB/nx-release/commit/22a320857e423a95ec361dbf793cb2a6c4391f16))


### Chores

* 🤖 add test libs ([0e29dd2](https://github.com/CarlosGilB/nx-release/commit/0e29dd2abde2a32763fbb94cc1f53dc40b123d4b))
* 🤖 remove release target from nx-release project.json ([c68b49e](https://github.com/CarlosGilB/nx-release/commit/c68b49eb2d909305162bd1f736a57faf84d84fdb))

## [3.0.0](https://github.com/CarlosGilB/nx-release/compare/v2.1.0...v3.0.0) (2023-07-11)


### ⚠ BREAKING CHANGES

* 🧨 libName option input is removed

### Features

* 🎸 add configure libraries generator ([ec61506](https://github.com/CarlosGilB/nx-release/commit/ec61506593306bf56fe29c71600a5094a78db300))
* 🎸 add configure libraries generator ([e445d24](https://github.com/CarlosGilB/nx-release/commit/e445d24ee72ed70555c48179a029da8f390df4b1))
* 🎸 add configure library generator ([e615fcf](https://github.com/CarlosGilB/nx-release/commit/e615fcf82075199ffcdfbd3f684a45239b17aa0b))
* 🎸 add configure-libraries generator ([ed1ba0b](https://github.com/CarlosGilB/nx-release/commit/ed1ba0bb55d0033a76264cc1a68d3b6741e0d8e5))
* 🎸 add required prompts ([f6d1a67](https://github.com/CarlosGilB/nx-release/commit/f6d1a67410e558f7f39d49d7d3965116a6248276))
* 🎸 add workspace configuration generator ([dbe072f](https://github.com/CarlosGilB/nx-release/commit/dbe072f69a4c87e432c466142a97c1a892baac45))
* 🎸 add workspace configurator generator ([92cca1c](https://github.com/CarlosGilB/nx-release/commit/92cca1c710180b366e5342eac1d192b71a643e52))
* 🎸 extract gh-action and release config into generators ([7dfd196](https://github.com/CarlosGilB/nx-release/commit/7dfd196882032559708eae9c543a7611a9452115))
* 🎸 improve executors ([b1410d7](https://github.com/CarlosGilB/nx-release/commit/b1410d7097cc39cada83d46d8a5b609c0c0f818d))


### Bug Fixes

* 🐛 remove lib path ([ad8d811](https://github.com/CarlosGilB/nx-release/commit/ad8d811ddf0c91653122642892bcf10dd2da5628))
* 🐛 remove required options ([94e8ee9](https://github.com/CarlosGilB/nx-release/commit/94e8ee926d6a45a41dd30e3e6b9c1267858a7875))
* 🐛 update generate GitHub actions workflow generator ([556fbc8](https://github.com/CarlosGilB/nx-release/commit/556fbc8a30a1b0f8d2a1fb81a57f7d7fb00708a6))
* 🐛 use correct source root ([c0f6933](https://github.com/CarlosGilB/nx-release/commit/c0f693381948cda70ab35ddabb6791a55199faab))
* 🐛 use root instead of src root ([0296ab9](https://github.com/CarlosGilB/nx-release/commit/0296ab9ef9f887ccf3ad60220951f4ba9a6bbcb2))


### Chores

* 🤖 add all-contributors as dep ([d64a92a](https://github.com/CarlosGilB/nx-release/commit/d64a92a531633977ded5e7956137f7d7ef8221d2))
* 🤖 adjust build scripts ([09b16e5](https://github.com/CarlosGilB/nx-release/commit/09b16e5d2757ab82df1eb7dbe5ef68648e28127e))
* 🤖 generate coverage report ([8f6dec1](https://github.com/CarlosGilB/nx-release/commit/8f6dec1125f47086cd9aa1e9e2947f5f630dfdd0))
* 🤖 remove test libraries ([bba255e](https://github.com/CarlosGilB/nx-release/commit/bba255e96c1734f9055415db9066bd36a4801b86))
* 🤖 run tests with release ([a12438d](https://github.com/CarlosGilB/nx-release/commit/a12438dbadeca96aa72152d6e20652af5afd3820))


### Refactoring

* 💡 generators and update docs ([f3b0d3d](https://github.com/CarlosGilB/nx-release/commit/f3b0d3db0bf361e851eb4c11bb7f493fa66349f1))

## [2.1.0](https://github.com/CarlosGilB/nx-release/compare/v2.0.0...v2.1.0) (2023-07-07)


### Features

* 🎸 add build, update & publish executor ([80357c1](https://github.com/CarlosGilB/nx-release/commit/80357c16c4a0b2484b754e34061e4ae080cb7a48))

## [2.0.0](https://github.com/CarlosGilB/nx-release/compare/v1.0.1...v2.0.0) (2023-07-07)


### ⚠ BREAKING CHANGES

* 🧨 version input is no longer supported

### Features

* 🎸 access version from node env ([cc684d3](https://github.com/CarlosGilB/nx-release/commit/cc684d348d8430eec09d6450df4b5285973f39f4))

## [1.0.1](https://github.com/CarlosGilB/nx-release/compare/v1.0.0...v1.0.1) (2023-07-07)


### Bug Fixes

* 🐛 use exec sync ([cae8041](https://github.com/CarlosGilB/nx-release/commit/cae80410db9dde03d1ce13d96ef8fccee31bc46f))

## 1.0.0 (2023-07-07)


### Features

* 🎸 implement executors ([f4bc2a7](https://github.com/CarlosGilB/nx-release/commit/f4bc2a73860e2815da4ddbdee877edc52eef3f9f))


### Chores

* 🤖 add dedicated release script ([4cb00ff](https://github.com/CarlosGilB/nx-release/commit/4cb00ff0d32419a5d9e672378068a070984ad51a))
* 🤖 add npm publish script ([9ec7052](https://github.com/CarlosGilB/nx-release/commit/9ec705267e06def9a316bc690677a80124da8b05))
* 🤖 prepare for release ([c19dc1f](https://github.com/CarlosGilB/nx-release/commit/c19dc1fe47ea5343da9d32f7a502914d51cb3f9d))
