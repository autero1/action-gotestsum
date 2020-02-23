[![license](https://img.shields.io/github/license/autero1/action-gotestsum)](https://github.com/autero1/action-gotestsum/blob/master/LICENSE)
[![release](https://img.shields.io/github/release/autero1/action-gotestsum.svg)](https://github.com/autero1/action-gotestsum/releases/latest)
[![GitHub release date](https://img.shields.io/github/release-date/autero1/action-gotestsum.svg)](https://github.com/autero1/action-gotestsum/releases)
![Test Action](https://github.com/autero1/action-gotestsum/workflows/Test%20Action/badge.svg?branch=master&event=push)
[![CodeFactor](https://www.codefactor.io/repository/github/autero1/action-gotestsum/badge)](https://www.codefactor.io/repository/github/autero1/action-gotestsum)

# Setup `gotestsum` GitHub Action

Set up your GitHub Actions workflow with a specific version of [`gotestsum`](https://github.com/gotestyourself/gotestsum).

## Usage

The next example step will install `gotestsum` 0.4.1.

```yaml
name: Example workflow

on: [push]

jobs:
  example:
    name: Example gotestsum interaction
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup gotestsum
        uses: autero1/action-gotestsum@v0.1.0
        with:
          gotestsum_version: 0.4.1
      - name: Interact with gotestsum
        run: gotestsum --format short-verbose
```

### Inputs

| Parameter | Description | Required |
| --------- | ----------- | -------- |
| `gotestsum_version` | `gotestsum` [version](https://github.com/gotestyourself/gotestsum/releases) to deploy | true |

### Outputs

| Parameter | Description |
| --------- | ----------- |
| `gotestsum_path` | Cached tool path of `gotestsum` |

### Supported platforms

This action has been tested on the following platforms:

* ubuntu-18.04
* windows-latest
* macos-latest


## Contributing

Contributions to this repository are very welcome! We follow a fairly standard [pull request process](
https://help.github.com/articles/about-pull-requests/) for contributions, subject to the following guidelines:

1. File a GitHub issue
1. Fork the repository
1. Update the documentation
1. Update the tests
1. Update the code
1. Create a pull request
1. (Merge and release)

The maintainers for this repo will review your code and provide feedback. If everything looks good, they will merge the
code and release a new version, which you'll be able to find in the [releases page](../../releases).

## License

The scripts and documentation in this project are released under the [MIT](./LICENSE) license.
