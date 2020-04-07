import React from 'react';


function Home(props) {
    const history = props.history;
  return (
    <div>
      <h1 onClick={()=> {
          history.goBack();
      }}>Home</h1>
    </div>
  );
}

export default Home;
