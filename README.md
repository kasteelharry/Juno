# Juno

Welcome to project Juno. This project is a personal portfolio website I am working on. Built in React with Materials UI and ParticlesJS. The main goal for me was to get more familiar with website design, docker and pipelining with my hardware project Hades. Development is still ongoing thus beware of the bugs.

## Installation

### Latest docker image

Go to the [docker image](https://docker.io/kasteelharry/juno) and pull the image to your machine. Deploy the docker image and map the ports to your liking. The image internally uses the port 3000. Now you should be able to host the website.

### Manually

Clone the repository and run the following commands inside the ``juno-client`` folder:

```bash
npm ci # This will install the node-modules.
npm run build # This will start the website in production mode. 
```

### Build the docker image

To build and run the docker image run the following commands from the root folder:

```bash
# Build the docker image
docker build . -f .dockerfile -t latest
# Map the internal port 3000 to your current host port 80
docker run -p 3000:80 -d latest
```
