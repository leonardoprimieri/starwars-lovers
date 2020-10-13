import React, { useState } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

import Films from '../pages/Films';

import Home from '../pages/Home';
import People from '../pages/People';
import Planets from '../pages/Planets';
import Species from '../pages/Species';
import Starships from '../pages/Starships';
import Login from '../pages/Login';

import { motion } from 'framer-motion';

function Routes() {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      scale: 2,
      rotate: 90,
    },
    closed: {
      scale: 2,
      rotate: 180,
    },
  };

  return (
    <HashRouter>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.svg
        width="24"
        height="24"
        initial={false}
        animate={isOpen ? 'opened' : 'closed'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIsOpen((state) => !state)}
        variants={iconVariants}
        style={{
          position: 'fixed',
          top: 40,
          right: 40,
          zIndex: 9999,
          cursor: 'pointer',
        }}
      >
        <path
          d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
          fill="var(--white-color)"
        />
        <path
          d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
          fill="var(--white-color)"
        />
        <path
          d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
          fill="var(--white-color)"
        />
      </motion.svg>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/starships" component={Starships} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/species" component={Species} />
        <Route path="/login" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
