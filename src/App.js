import React, { useState } from 'react';
import ReactImg from './assets/img/reactjs.png';
import VueImg from './assets/img/vue.png';
import CustomImg from './assets/img/custom.png';
import ReactionsImg from './assets/img/reactions.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import './index.scss';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      link: "view all courses",
      icon: [ReactImg, VueImg, CustomImg, ReactionsImg],
      title: ["23", "all courses", "courses you're powering through right now."]
    },
    {
      link: "upcoming courses",
      icon: [ReactImg, VueImg, CustomImg, ReactionsImg],
      title: ["05", "upcoming courses", "exciting new courses waiting to boost your skills."]
    },
    {
      link: "ongoing courses",
      icon: [ReactImg, VueImg, CustomImg, ReactionsImg],
      title: ["10", "ongoing courses", "currently happening - don't miss out on the action!"]
    }
  ];

  return (
    <div className="App">
      <div className=" flex p-10 w-11/12 max-w-5xl m-auto">
        <div className="stats flex flex-auto justify-around min-h-[490px] ">
          {data.map((stat, index) => (
            <div
              key={index}
              className={`stat-item m-3 group ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? activeIndex : index)}
            >
              <div className="view-courses flex items-center text-xl absolute right-6 top-6 group">
                <span>View all Courses</span>
                <FaArrowRightLong className="ml-2 icon" />
              </div>

              <div className="icons">
                {stat.icon.map((icon, idx) => (
                  <img key={idx} src={icon} alt={`course icon ${idx}`} className="w-20" />
                ))}
              </div>

              <div className="flex">
                <div className="stat-number absolute bottom-10 left-8 mr-2">
                  <h1 className='text-9xl font-bold flex'>
                    {stat.title[0]}
                    <span className='text-2xl group-hover:translate-y-2 transition-transform duration-300 ease-in-out'>
                      <FaPlus />
                    </span>
                  </h1>
                </div>
                <div className="stat-headings">
                  <h1 className='text-3xl'>{stat.title[1]}</h1>
                  <h3 className='text-lg'>{stat.title[2]}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;