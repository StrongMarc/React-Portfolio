import React, {useState, createContext} from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {
  const [projects, setProjects] = useState([
    {
      name: 'Scheduler',
      image: 'images/Scheduler.PNG',
      link: 'https://strongmarc.github.io/HW5-Scheduler/',
      repository: 'https://github.com/StrongMarc/HW5-Scheduler.git',
      id: 1
    },
    {
      name: 'Weather Dashboard',
      image: 'images/weather.PNG',
      link: 'https://strongmarc.github.io/HW6-Weather/',
      repository: 'https://github.com/StrongMarc/HW6-Weather.git',
      id: 2
    },
    {
      name: 'Shaker',
      image: 'images/Collapse.PNG',
      link: 'https://json-d3rulo.github.io/project-1/',
      repository: 'https://github.com/JSON-D3RULO/project-1.git',
      id: 3
    },
    {
      name: 'Note Taker',
      image: 'images/noteTaker.PNG',
      link: 'https://warm-plains-86528.herokuapp.com/',
      repository: 'https://github.com/StrongMarc/Note-Taker.git',
      id: 4
    },
    {
      name: 'Burger',
      image: 'images/Burger.PNG',
      link: 'https://morning-chamber-69176.herokuapp.com/',
      repository: 'https://github.com/StrongMarc/burger.git',
      id: 5
    },
    {
      name: 'StockWATCH',
      image: 'images/stockWatch.PNG',
      link: 'https://thawing-sea-68388.herokuapp.com/',
      repository: 'https://github.com/JSMBDevCorp/Project2.git',
      id: 6
    }
  ]);
  return(
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
}