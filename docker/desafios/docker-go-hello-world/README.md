<h1 align="center">
  <a href="https://hub.docker.com/repository/docker/brenofelix/go-hello-world/general">
    <img src="https://ltecnologia.com.br/blog/wp-content/uploads/2015/02/helloworld.png" alt="Logo image" width="250px">
  </a>
  
  <div style="display: inline_block">
    <img align="center" alt="Breno-Docker" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" /> 
    <img align="center" alt="Breno-Go" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />          
  </div>
</h1>

<div align="center">
   <a href="https://hub.docker.com/repository/docker/brenofelix/go-hello-world/general">:bangbang: Click here and see this Docker image, try Now :bangbang:</a>
</div>

<h3 align="center">
  Hello world with GO in Docker.
</h3>

<br>

<p align="center">
  <a href="#house-about-the-project">About the project</a>&nbsp;|
  <a href="#hammer-prerequisites">Prerequisites</a>&nbsp;|
  <a href="#computer-technologies">Technologies</a>&nbsp;|
  <a href="#rocket-how-to-run">How to Run</a>&nbsp;|
  <a href="#whale-docker-image">Docker Image</a>&nbsp;|
  <a href="#bulb-issues">Issues</a>&nbsp;|
  <a href="#scroll-license">License</a>&nbsp;|
  <a href="#speaking_head-talk-to-me">Talk to me</a>
</p>

<br>

## :house: About the project

This is a simple "Hello World" project in Go, created as part of the Full Cycle course. It consists of a Go program that prints "Full Cycle Rocks!!" to the standard output. The project also includes the necessary files to create a Docker image that packages and runs the Go program in a minimal container.
<br>

## :hammer: Prerequisites

Make sure you have Docker installed on your machine to build and run the container image.
<br>

## :computer: Technologies

- [Docker](https://docs.docker.com/)
- [GO](https://go.dev/doc/)
<br>

## :rocket: How to Run

Follow the steps below to run the project:

1. Clone the repository: 
```bash
#bash
git clone https://github.com/breno-felix/docker-go-hello-world.git
cd docker-go-hello-world
```
2. Compile the Go program and build the Docker image:
```bash
#bash
docker build -t go-hello-world .
```

3. Run the container image: 
```bash
#bash
docker run --rm go-hello-world
```

This will print "Full Cycle Rocks!!" to the terminal.

<br>

## :whale: Docker Image
A pre-built Docker image for this project is available on Docker Hub. You can obtain it by running the following command:
```bash
#bash
docker pull brenofelix/go-hello-world
```

You can also check the image and its information at the following link: [brenofelix/go-hello-world](https://hub.docker.com/repository/docker/brenofelix/go-hello-world/general)

## :bulb: Issues

Feel free to **file a new issue** with a respective title and description on the [Origin Take-Home Assignment](https://github.com/breno-felix/docker-go-hello-world/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!.

<br>

## :scroll: License
This project is distributed under the MIT License. 
<br>
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/breno-felix/docker-go-hello-world/blob/master/LICENSE) 

## :speaking_head: Talk to me
<div>
  <a href="https://api.whatsapp.com/send?phone=5585985113119&text= "><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
  <a href="https://github.com/breno-felix"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/breno-felix-lessa"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href = "mailto:brenodev.felix@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a> 
</div>

*Developed by **Breno Felix***