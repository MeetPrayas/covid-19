#### COVID-19 app built using React

---

`yarn` - Install all the packages
`yarn run` - Run the app in development environment
`yarn build` - Build the production version of the app, for deployment.

###### To serve the built app

```
yarn serve -s build
```

More info on deployment available [here](https://create-react-app.dev/docs/deployment/).

###### To build the docker image

```
// build docker image from the locally built files
docker build -t <tag-name> -f Dockerfile.local .

// build 2-stage docker image by downloading all dependencies
docker build -t <tag-name> -f Dockerfile .

```
