import React from 'react';
import { Link } from 'react-router-dom';

import Particles from 'react-particles-js';
import { motion } from 'framer-motion';

import './styles.css';

const Header = ({ isOpen, setIsOpen }) => {
  const navVariants = {
    opened: {
      position: 'relative',
      left: 0,
    },
    closed: {
      position: 'relative',
      left: '-100vw',
    },
  };
  return (
    <motion.div
      className="container"
      animate={isOpen ? 'opened' : 'closed'}
      initial={false}
      variants={navVariants}
    >
      <motion.div className="content">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1>
            StarWars <span>Lovers</span>
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/films" onClick={() => setIsOpen(false)}>
                Films
              </Link>
            </li>
            <li>
              <Link to="/starships" onClick={() => setIsOpen(false)}>
                Starships
              </Link>
            </li>
            <li>
              <Link to="/people" onClick={() => setIsOpen(false)}>
                People
              </Link>
            </li>
            <li>
              <Link to="/planets" onClick={() => setIsOpen(false)}>
                Planets
              </Link>
            </li>
            <li>
              <Link to="/species" onClick={() => setIsOpen(false)}>
                Species
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <Particles
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1803.4120608655228,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 2,
                color: '#000000',
              },
              polygon: {
                nb_sides: 14,
              },
            },
            opacity: {
              value: 0.4008530152163807,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2.2,
              random: true,
              anim: {
                enable: true,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: '#ffffff',
              opacity: 0.3687847739990702,
              width: 0.6413648243462091,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </motion.div>
  );
};

export default Header;
