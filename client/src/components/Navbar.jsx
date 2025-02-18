import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@mantine/core';
import { X, Menu } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-16 p-2 sticky top-0 z-5 bg-white">
      <div className="flex mx-6 items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          NEWSAI
        </motion.h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4">
          {['Home', 'Categories', 'Channels', 'About', 'reduxt', 'Loading'].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              key={item}
              className="hover:text-gray-700"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="flex space-x-4 items-center justify-center">
          <Link to="/login" className="hidden md:block">
            <Button variant='white'>Login</Button>
          </Link>

          <Link to="/register" className="hidden md:block">
            <Button variant='white'>Register</Button>
          </Link>

          {/* Mobile menu button */}
          <button onClick={handleClick} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden mt-4 p-4 bg-gray-100">
          <ul className="space-y-4">
            {['Home', 'Categories', 'Channels', 'About'].map((item) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                key={item}
                className="hover:text-gray-700"
              >




                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </motion.li>
            ))}
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}

              className="hover:text-gray-700"
            >
              <Link to="/login" className="block py-2">
                Login
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}

              className="hover:text-gray-700">
              <Link to="/register" className="block py-2">
                Register
              </Link>
            </motion.li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
