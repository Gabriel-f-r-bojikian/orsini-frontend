<h1 align="center">
	<img alt="LPROT" title="Rocketshoes" src="./public/lprot.jpg" />
</h1>

# Orsini

![Badge](https://img.shields.io/badge/license-APACHE-informational?style=for-the-bade)
![Badge](https://img.shields.io/badge/Next.JS-Latest-000000?logo=next.js) ![Badge](https://img.shields.io/badge/React-v17.0.2-61dafb?logo=react) ![Badge](https://img.shields.io/badge/current_version-v0.1.0-informational?color=5F9EA0)

## About
This repository contains the code for the __Orsini__ module of the __Fast Data Collection__ project. This module is a dashboard that will display oscillography data and power quality metrics for the [LPROT](http://www.pea.usp.br/pesquisa/linha-de-pesquisa/lprot-laboratorio-de-pesquisa-em-automacao-e-protecao-de-sistemas-eletricos/) laboratory of the [Polytechnic School of the University of São Paulo](https://www.poli.usp.br/).
# Table of contents
- [Orsini](#orsini)
  - [About](#about)
- [Table of contents](#table-of-contents)
- [Status](#status)
- [Features](#features)
- [How to install and run this application](#how-to-install-and-run-this-application)
  - [Prerequisites](#prerequisites)
  - [Installing and running](#installing-and-running)
- [Author and Acknowledgements](#author-and-acknowledgements)
# Status
This is currently a work in progress in its early stages. Features will be added in frequently.
# Features
* Display voltage and current oscillography data in a easy to read dashboard designed to aid engineers and technicians in operating 4.0 industry power system facilities
* Plots oscillography graphs (~1 sec span) for elegant and in real time data visualization
* Acquires data in real time from a Kafka data stream
* Is completely web based and can be deployed via the cloud
# How to install and run this application
## Prerequisites
To run this code you will need the latest versions of [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed on your machine.
## Installing and running
```bash
# Clone this respository
$ git clone <https://github.com/Gabriel-f-r-bojikian/orsini-frontend.git>

# Move into the newly created folder
$ cd orsini

# Install all dependencies
$ yarn

# Run the application
$ yarn run dev
```
# Author and Acknowledgements
Autorship attribuition: Gabriel Bojikian

My links for contact are:
[![Github Badge](https://img.shields.io/badge/-Gabriel-181717?style=flat-square&logo=github&logoColor=white&link=https://github.com/Gabriel-f-r-bojikian)](https://github.com/Gabriel-f-r-bojikian) [![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-fernandes-rosa-bojikian-688b84164/)](https://www.linkedin.com/in/gabriel-fernandes-rosa-bojikian-688b84164/) [![Gmail Badge](https://img.shields.io/badge/-gabriel.bojikian.dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabriel.bojikian.dev@gmail.com)](mailto:gabriel.bojikian.dev@gmail.com)