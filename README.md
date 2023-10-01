[![OpenElectionCompass](https://kimara2024.fi/wp-content/uploads/2023/05/Kimara24_Logoydistelma_VM_SVG.svg)](https://kimara2024.fi/)

[Visit pestikone website](https://pestikone.kimara2024.fi/)
[Visit main website](https://kimara2024.fi/)

# Pestikone - Kimara2024

## Project state

This is Kimara's pestikone built on top of [Open election compass](https://open-election-compass.com/). This heavily modified and many unnecessary features are removed. 

### Technical Guide

Learn how the configuration files of the OpenElectionCompass are structured in our
[Technical Guide](https://open-election-compass.com/guide/technical/overview.html) or take a look at
the easy to use [Configuration Editor](https://open-election-compass.com/configurator/version-1/configuration-editor.html)
to generate configurations without needing any coding skills.

#### Deployment on your own server

Currently, it is only possible to deploy OpenElectionCompass on your own systems. However, the
process is relatively simple to be accessible for people with limited coding skills, thanks to our
[HTML Generator](https://open-election-compass.com/configurator/version-1/html-generator.html).

**[Learn more about deploying the OpenElectionCompass on your site](https://open-election-compass.com/guide/technical/deployment.html#option-1-the-simple-one-file-only-set-up)**

## Development

Install the project and it's dependencies using the package manager of your choice:

```sh
git clone git@github.com:open-election-compass/client.git
cd client
npm ci
```

### Compile for development with HMR

```sh
npm run dev
```

### Compiles and minify for production

```sh
npm run build:demo # Build demo
npm run build:lib # Build the actual library / client
npm run build:nuxt # Build the Nuxt.js module
npm run build # runs all builds sequentially
```

### Run tests

```sh
npm run test:unit
npm run test:e2e
npm run test # run all both test suites sequentially
```

### Run linting

```sh
npm run lint # run ESLint
npm run lint:style # run Stylelint
```
