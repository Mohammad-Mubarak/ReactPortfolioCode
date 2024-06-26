import React, { useState } from "react";
import "./Tabs.css"
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

const front =[
    {
        title: 'HTML',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
    },
    {
      title: 'CSS',
  urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
  },
    {
        title: 'JavaScript',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    
    {
        title: 'BootStrap',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
    },
    {
        title: 'React',
    urlimg:"https://reactnative.dev/img/header_logo.svg"
    }

]
const Backend =[
    {
        title: 'Node js',
        urlimg:"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
    },
    {
        title: 'Express',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
    },
    {
        title: 'MongoDB',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
    },
    {
        title: 'Mongoose',
    urlimg:"https://res.cloudinary.com/dromvfu7p/image/upload/v1679472653/pngfind.com-js-logo-png-4309574_kntgkl.png"},
    {
        title: 'Spring Boot',
        urlimg:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    
    },
    {
        title: 'Java',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
    },
    {
        title: 'MySql',
    urlimg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
    }
    
]

const Tools =[ 
    {
        title: 'PostMan',
       urlimg:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    },
    {
        title: 'Git',
       urlimg:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    },
    {
        title: 'Github',
       urlimg:"https://www.vectorlogo.zone/logos/github/github-icon.svg"
    },
    {
        title: 'Vs Code',
       urlimg:"https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
    },

]

const All =[ 
...front,
...Backend,
...Tools
]



  const tabItems = [
    { label: "All", content: (
        <div className="flex justify-center flex-wrap">
          {All.map((x, i) => {
            const { title, urlimg } = x;
            return (
              <div key={i} className="flex-shrink-0 gls2 mx-4 my-4 text-center">
              <img src={urlimg}  className="md" alt={`Image${i+1}`}/>
                <div className="mt-2 text-sm clr font-medium">{title}</div>
              </div>
            );
          })}
        </div>
      ) },
      { label: "Backend", content: (
        <div className="flex justify-center flex-wrap">
          {Backend.map((x, i) => {
            const { title, urlimg } = x;
            return (
              <div key={i} className="flex-shrink-0 gls2 mx-4 my-4 text-center">
              <img src={urlimg}  className="md"  alt={`Image${i+1}`}/>
                <div className="mt-2 text-sm clr font-medium">{title}</div>
              </div>
            );
          })}
        </div>
      ) }
,      
    { label: "FrontEnd", content:  (
        <div className="flex justify-center flex-wrap">
          {front.map((x, i) => {
            const { title, urlimg } = x;
            return (
              <div key={i} className="flex-shrink-0 gls2  mx-4 my-4 text-center">
              <img src={urlimg}  className="md"  alt={`Image${i+1}`}/>
                <div className="mt-2 text-sm clr font-medium">{title}</div>
              </div>
            );
          })}
        </div>
      ) },
    { label: "Tools", content: (
        <div className="flex justify-center flex-wrap">
        {Tools.map((x, i) => {
          const { title, urlimg } = x;
          return (
            <div key={i} className="flex-shrink-0 gls2 mx-4 my-4 text-center">
            <img src={urlimg}  className="md"  alt={`Image${i+1}`}/>
              <div className="mt-2 text-sm clr font-medium">{title}</div>
            </div>
          );
        })}
      </div>
      )
    },
   
  ];

  return (
    <div id="md" className="py-4 px-4 gls mt-20 md:px-8 bg-indigo-800 bg-opacity-10">
      <ul
        role="tablist"
        className="w-80  mx-auto px-2.5 items-center justify-center gap-x-3 overflow-x-auto text-sm bg-gray-50 dark: bg-opacity-10 rounded-lg flex"
      >
        {tabItems.map((tabItem, index) => (
          <li key={index} className="py-2">
            <button
              role="tab"
              className={`py-2.5 px-4 rounded-lg top-ul duration-150 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800 ${
                activeTab === index
                  ? "bg-white text-indigo-500 shadow-sm hover:text-indigo-500 hover:bg-white active:bg-white/50"
                  : "hover:text-indigo-500 hover:bg-white active:bg-white/50"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tabItem.label}
            </button>
          </li>
        ))}
      </ul>
      {tabItems.map((tabItem, index) => (
        <div
          key={index}
          className={`${
            activeTab === index ? "" : "hidden"
          } py-4 px-4 md:px-8 bg-transparent`}
        >
          {tabItem.content}
        </div>
      ))}
    </div>
  );
};


export default Tabs;
