<h1 align="center">
  <a href="#">
    <img src="https://paisefilhos.uol.com.br/wp-content/uploads/2019/09/nome-do-bebe.jpg" alt="Logo image" width="250px">
  </a>
  
  <div style="display: inline_block">
    <img align="center" alt="Breno-Docker" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" /> 
    <img align="center" alt="Breno-Nginx" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" /> 
    <img align="center" alt="Breno-Nodejs" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />           
    <img align="center" alt="Breno-MySQL" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
  </div>
</h1>

<h3 align="center">
 Nginx, Node.js and MySQL Challenge: List names.
</h3>

<p align="center">
  <a href="#house-about-the-project">About the project</a>&nbsp;|
  <a href="#hammer-prerequisites">Prerequisites</a>&nbsp;|
  <a href="#computer-technologies">Technologies</a>&nbsp;|
  <a href="#rocket-how-to-run">How to Run</a>&nbsp;|
  <a href="#key-environment-variables">Environment Variables</a>&nbsp;|
  <a href="#pencil-usage-example">Usage Example</a>&nbsp;|
  <a href="#seedling-contribution">Contribution</a>&nbsp;|
  <a href="#bulb-issues">Issues</a>&nbsp;|
  <a href="#scroll-license">License</a>&nbsp;|
  <a href="#speaking_head-talk-to-me">Talk to me</a>
</p>

## :house: About the project

This project implements a simple system for adding and listing names, created as part of the Full Cycle course. Nginx was used as a reverse proxy, a Node.js application that connects to a MySQL database and Docker Compose to orchestrate all components.

## :hammer: Prerequisites

Make sure you have Docker and Docker Compose installed on your machine to build and run the container image.

## :computer: Technologies

- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nginx](https://docs.nginx.com/nginx/admin-guide/web-server/)
- [Nodejs](https://nodejs.org/en/docs)
- [MySQL](https://dev.mysql.com/doc/)

## :rocket: How to Run

Follow the steps below to run the project:

1. Clone the repository: 
```bash
#bash
git clone https://github.com/breno-felix/Docker-Nginx-Node.git
cd Docker-Nginx-Node
```
2. Create a .env file with the necessary environment variables (see the .env.example example).
3. Run Docker Compose:
```bash
#bash
docker-compose up -d
```
4. O sistema estará disponível em http://localhost:8080.

## :key: Environment Variables

- `MYSQL_HOST`: MySQL server address.
- `MYSQL_USER`: MySQL user.
- `MYSQL_PASSWORD`: MySQL password.
- `MYSQL_DB`: MySQL database name.
- `MYSQL_ROOT_PASSWORD`: MySQL root password.

## :pencil: Usage Example

- Add a name to the database:
```bash
#bash
curl http://localhost:8080/add
```
  
- Get the list of registered names:
```bash
#bash
curl http://localhost:8080
```

## :seedling: Contribution

Feel free to contribute to this project. Just follow these steps:

1. Fork the repository.
2. Create a branch for your feature: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Added a new feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a pull request.

## :bulb: Issues

Feel free to **file a new issue** with a respective title and description on the [Origin Take-Home Assignment](https://github.com/breno-felix/Docker-Nginx-Node/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!

## :scroll: License
This project is distributed under the MIT License. 
<br>
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/breno-felix/Docker-Nginx-Node/blob/master/LICENSE) 

## :speaking_head: Talk to me
<div>
  <a href="https://api.whatsapp.com/send?phone=5585985113119&text= "><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
  <a href="https://github.com/breno-felix"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/breno-felix-lessa"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href = "mailto:brenodev.felix@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a> 
</div>

*Developed by **Breno Felix***