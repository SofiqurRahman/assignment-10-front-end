import React from 'react';
import Task from '../Task/Task';
import logo from '../../logos/Group 1329.png'

const tasks=[
  {
    name: 'Animal Shelter',
    pic: 'animalShelter.png'
  },
  {
    name: 'Baby Sit',
    pic: 'babySit.png'
  },
  {
    name: 'Bird House',
    pic: 'birdHouse.png'
  },
  {
    name: 'Child Support',
    pic: 'childSupport.png'
  },
  {
    name: 'Clean Park',
    pic: 'cleanPark.png'
  },
  {
    name: 'Clean Water',
    pic: 'cleanWater.png'
  },
  {
    name: 'Cloth Swap',
    pic: 'clothSwap.png'
  },
  {
    name: 'Drive Safety',
    pic: 'driveSafety.png'
  },
  {
    name: 'Vote Register',
    pic: 'voteRegister.png'
  },
  {
    name: 'Food Charity',
    pic: 'foodCharity.png'
  },
  {
    name: 'Good Education',
    pic: 'goodEducation.png'
  },
  {
    name: 'IT Help',
    pic: 'ITHelp.png'
  },
  {
    name: 'Library Books',
    pic: 'libraryBooks.png'
  },
  {
    name: 'Music Lessons',
    pic: 'musicLessons.png'
  },
  {
    name: 'New Books',
    pic: 'newBooks.png'
  },
  {
    name: 'Refuse Shelter',
    pic: 'refuseShelter.png'
  },
  {
    name: 'River Clean',
    pic: 'riverClean.png'
  },
  {
    name: 'School Suffiles',
    pic: 'schoolSuffiles.png'
  },
  {
    name: 'Study Group',
    pic: 'studyGroup.png'
  },
  {
    name: 'Stuffed Animals',
    pic: 'stuffedAnimals.png'
  },
]

const Home = () => {
  return (
    <div className="container">
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
<h1 class="text-center text-uppercase mt-3 mb-3">I grow by helping people in need.</h1>
      <form action="" style={{marginLeft:"350px"}} class="mb-4">
      <div class="input-group mb-3 col-md-6">
  <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-primary" type="button">Search</button>
  </div>
</div>
      </form>
      <div className="row">
        {
          tasks.map(task=><Task task={task}></Task>)
        }
      </div>
    </div>
    
  );
};

export default Home;