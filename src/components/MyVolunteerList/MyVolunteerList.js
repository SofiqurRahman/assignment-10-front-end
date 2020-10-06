import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import animalShelter from '../../images/animalShelter.png';
import childSupport from '../../images/childSupport.png';
import cleanPark from '../../images/cleanPark.png';
import cleanWater from '../../images/cleanWater.png';
import './MyVolunteerList.css';

const MyVolunteerList = () => {
    return (
        <div class="container" style={{textAlign: 'center'}}>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img style={{height: '50px'}} src={logo} alt=""/>
    </a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mx-3">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">Donation</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">Events</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item mx-3 bg-primary px-3 rounded">
        <a class="nav-link text-white" href="#">Register</a>
      </li>
      <li class="nav-item mx-3 bg-secondary px-3 rounded">
        <a class="nav-link text-white" href="#">Admin</a>
      </li>
    </ul>
  </div>
</nav>

            <a href="database">
            <div class="card">
                <img class="img" src={animalShelter} alt=""/>
                <h3 class="text-left">Animal Shelter</h3>
                <button class="btn btn-primary cancel">Cancel</button>
            </div>
            <div class="card">
                <img class="img" src={childSupport} alt=""/>
                <h3 class="text-left">Child Support</h3>
                <button class="btn btn-primary cancel">Cancel</button>
            </div>
            <div class="card">
                <img class="img" src={cleanPark} alt=""/>
                <h3 class="text-left">Clean Park</h3>
                <button class="btn btn-primary cancel">Cancel</button>
            </div>
            <div class="card">
                <img class="img" src={cleanWater} alt=""/>
                <h3 class="text-left">Clean Water</h3>
                <button class="btn btn-primary cancel">Cancel</button>
            </div>
            </a>
        </div>
    );
};

export default MyVolunteerList;