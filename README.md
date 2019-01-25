# react-vulnlink

> Link creator using standard vulnerability identifiers

[![NPM](https://img.shields.io/npm/v/react-vulnlink.svg)](https://www.npmjs.com/package/react-vulnlink) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-vulnlink
```

## Usage

```jsx
import React, { Component } from 'react'

import VulnLink from 'react-vulnlink'

class Example extends Component {
  render () {
    return (
      <VulnLink id="CVE-2018-16598" />
    )
  }
}
```

## License

MIT © [sparticvs](https://github.com/sparticvs)
