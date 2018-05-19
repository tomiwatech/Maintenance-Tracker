<!-- [![Maintainability](https://api.codeclimate.com/v1/badges/6c6d78b9aec5c31e179d/maintainability)](https://codeclimate.com/github/tomiwatech/Maintenance-Tracker/maintainability)  

[![Build Status](https://travis-ci.org/tomiwatech/Maintenance-Tracker.svg?branch=develop)](https://travis-ci.org/tomiwatech/Maintenance-Tracker) -->

<!-- [![Coverage Status](https://coveralls.io/repos/github/tomiwatech/Maintenance-Tracker/badge.svg?branch=master)](https://coveralls.io/github/tomiwatech/Maintenance-Tracker?branch=master) -->

<!-- [![Test Coverage](https://api.codeclimate.com/v1/badges/6c6d78b9aec5c31e179d/test_coverage)](https://codeclimate.com/github/tomiwatech/Maintenance-Tracker/test_coverage) -->


<p>
    <a style="padding:5px" href="https://codeclimate.com/github/tomiwatech/Maintenance-Tracker/maintainability" alt="Backers on Open Collective">
        <img src="https://api.codeclimate.com/v1/badges/6c6d78b9aec5c31e179d/maintainability" />
    </a>
     <a style="padding:5px" href="https://coveralls.io/github/tomiwatech/Maintenance-Tracker?branch=develop">
        <img src="https://coveralls.io/repos/github/tomiwatech/Maintenance-Tracker/badge.svg?branch=develop"
            alt="build status">
    </a>
     <a style="padding:5px" href="https://travis-ci.org/tomiwatech/Maintenance-Tracker">
        <img src="https://travis-ci.org/tomiwatech/Maintenance-Tracker.svg?branch=develop"
            alt="build status">
    </a>
    <a style="padding:5px" href="https://codeclimate.com/github/tomiwatech/Maintenance-Tracker/test_coverage"><img src="https://api.codeclimate.com/v1/badges/6c6d78b9aec5c31e179d/test_coverage" /></a>
</p>



## Maintenance-Tracker
Maintenance Tracker App is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request.


## Installation

```bash
git clone https://github.com/tomiwatech/Maintenance-Tracker.git 
```

```bash
cd Maintenance-Tracker
```

```bash
npm install
```

```bash
npm start
```

## Test
Testing is used at key checkpoints in the overall process to determine whether objectives are being met. It also speed up software development process

##### Server side tests
```bash
npm run test:dev
```

## Linting
Linting is the process of running a program that will analyse code for potential errors.
```bash
npm run lint:dev
```


<h3>ENDPOINTS</h3>
<hr>
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/users/requests</td>
      <td>Create a user request</td>
  </tr>
  <tr>
      <td>PUT</td>
      <td>/api/v1/users/requests/:id</td>
      <td>Modify a request by id</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/users/requests</td>
      <td>Get all requests</td>
  </tr>
  <tr>
        <td>GET</td>
        <td>/api/v1/users/requests/:id</td>
        <td>Get a request by id</td>
  </tr>
  <tr>
      <td>DELETE</td>
      <td>/api/v1/users/requests/:id</td>
      <td>Delete a request by id</td>
  </tr>

</table>
<br/>

# Technologies

* [Eslint](https://eslint.org/)
* [TravisCI](https://travis-ci.org/)
* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [HoundCI](https://houndci.com)
* [Code-Climate](https://codeclimate.com/)
* [Coveralls](https://coveralls.io/)
* [Babel](https://babeljs.io/)


## Author 
____
[Sanni Michael Tomiwa](https://tomiwatech.github.io/)

## Find Application stories on pivotal Tracker
____
[Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2170224)

## View app here
[ui](https://tomiwatech.github.io/Maintenance-Tracker/UI/)

## Find Api on heroku
[maintenance-tracker](https://maintenance-trackerr.herokuapp.com/)


