import React from 'react';
import Menu from './Menu';
import { ContainerHome } from './style/HomeStyle';

const Home = () => {
  return (
    <ContainerHome>
      <div>
        <p>Logo</p>
      </div>
      <div>
        {' '}
        <h1>home</h1>
      </div>
      <div>
        {' '}
        <Menu />
      </div>
    </ContainerHome>
  );
};

export default Home;
