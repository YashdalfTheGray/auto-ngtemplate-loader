# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [v3.1.1](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v3.1.2) (2022-08-07)

### Fixed

- updated outdated npm packages
- added release procedure

## [v3.1.1](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v3.1.1) (2021-09-05)

### Fixed

- updated outdated npm packages
- switched from travis-ci to github actions
- switched the default branch from `master` to `main`

## [v3.1.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v3.1.0) (2020-09-21)

### Fixed

- Updated outdated npm packages
- Changed the package.json engine to 10.x instead of 8.x
- Updated package versions after the resolution of [#23](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/issues/23)

**NOTE** - releasing this as a minor version because it might generate warnings for incompatible Node versions in some cases

## [v3.0.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v3.0.0) (2020-07-20)

### Breaking

- `auto-ngtemplate-loader` no longer supports Node.js v8.x

### Fixed

- Updated outdated npm packages
- Added new node versions

## [v2.1.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v2.0.3) (2019-12-07)

### Added

- The loader now picks up `templateUrl:` as well as `templateUrl :` (space before colon)

### Fixed

- Updated package dependency versions

## [v2.0.3](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v2.0.3) (2019-12-07)

### Fixed

- Updated package dependency versions

## [v2.0.2](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v2.0.2) (2019-07-25)

### Fixed

- Updated package dependency versions

## [v2.0.1](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v2.0.1) (2019-06-09)

### Fixed

- `templateUrl` detection on Windows ([#14](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/issues/14))

## [v2.0.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v2.0.0) (2019-06-07)

### Breaking

- `auto-ngtemplate-loader` no longer supports Node.js v6.x

### Fixed

- Updated outdated npm packages
- Added new node versions

## [v1.3.2](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.3.2) (2019-03-06)

### Fixed

- Updated outdated npm packages
- PR: fix template variable when templateUrl is null [#11][1]

## [v1.3.1](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.3.1) (2018-10-17)

### Fixed

- Ran an NPM security audit and fixed the issues
- Updated package versions, switched to `@babel/preset-env` instead of `babel-preset-es2015`
- Added `prettier` to the codebase

## [v1.3.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.3.0) (2018-02-21)

### Added

- The `pathResolver` function now works with versions as old as Webpack v1 using an `autoNgTemplateLoader` key in the Webpack configuration object

## [v1.2.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.2.0) (2018-02-16)

### Added

- A `pathResolver` loader option that helps with resolving root-relative paths and adapts to various project structures

## [v1.1.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.1.0) (2017-06-11)

### Added

- The variable name that gets used in the compiled code can now be changed

### Fixed

- Paths not prefixed with `./` in the DDO no longer cause problems

## [v1.0.2](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.0.2) (2017-06-09)

### Fixed

- Properly handle the case where `templateUrl` is not set to a string

## [v1.0.1](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.0.1) (2017-06-04)

### Fixed

- Added `yarn.lock` to the ignored files in NPM

## [v1.0.0](https://github.com/YashdalfTheGray/auto-ngtemplate-loader/tree/v1.0.0) (2017-06-04)

First release of the `auto-ngtemplate-loader`

[1]: https://github.com/YashdalfTheGray/auto-ngtemplate-loader/pull/11
