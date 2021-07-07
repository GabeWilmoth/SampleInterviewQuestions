import React from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const code = {
  fontFamily: "Andale Mono, monospace",
  textAlign: "left"
};

const TaskDescription = () => {
  return (
    <div style={styles}>
      <h2>Coding task</h2>
      <p>
        Your task is to write a simple React Application that renders list of
        repositories In the following manner:
      </p>
      <pre>
        {`
        • <name> - <stars> - <forks>
        • react - 69012 - 12581
        • reselect - 7291 - 214
        • redux - 31705 - 6581
        • recompose - 5671 - 342
      `}
      </pre>
      <span>
        Please use method <span style={code}>getReactRepositories</span> to
        fetch the list of repositories, once resolved it will return the list in
        following format:
        <pre>
          {`
          [
            {name: 'react', stars: 69012, forks: 12581, url: 'http://…'},
            {name: 'react', stars: 7291, forks: 214, url: 'http://…'},
            {name: 'react', stars: 31705, forks: 6581, url: 'http://…'},
            {name: 'react', stars: 5671, forks: 342, url: 'http://…'}
          ]
        `}
        </pre>
      </span>
      <h2>Bonus Task</h2>
      <p>
        Bonus task is to create a higher order component that will then wrap the
        list of repositories and provide a "More/Less" button that will expanse
        or collapse the list, for example:
      </p>
      <pre>
        {`
        // Expanded Mode
        +-----------------------------------------------+
        | <name> |  <numberOfStars> | <numberOfForks>|        
        +-----------------------------------------------+
        | react      |      69012      |    12581    |
        +-----------------------------------------------+
        | reselect    |      7291       |    214      |
        +-----------------------------------------------+
        | redux      |      31705      |    6581     |
        +-----------------------------------------------+
        | recompose  |      5671       |    342      |
        +-----------------------------------------------+
        | See Less Button |
        +-----------------+

        // Collapsed Mode
        +-----------------------------------------------+
        | <name> |  <numberOfStars> | <numberOfForks>|        
        +-----------------------------------------------+
        | react      |      69012      |    12581    |
        +-----------------------------------------------+
        | reselect    |      7291       |    214      |
        +-----------------------------------------------+
        | See More Button |
        +-----------------+
      `}
      </pre>
    </div>
  );
};

export default TaskDescription;
