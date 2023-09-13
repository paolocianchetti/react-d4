import React from 'react';
import MyNav from './components/navbar/MyNav';
import Welcome from './components/welcome/Welcome';
import Main from './components/main/Main';
import MyFooter from './components/footer/MyFooter';
import fantasyBooks from './data/fantasy.json';
import { navLinks } from './data/navLinks';

export default function App() {
  return (
    <>
      <MyNav links={navLinks} />
      <Welcome />
      <Main data={fantasyBooks} />
      <MyFooter />
    </>
  );
}
