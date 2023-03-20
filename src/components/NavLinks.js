import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';


const NavLinks = (props) => {
  
  return (
    <motion.ul className="menu-items" transition={{delay: 0.05}}>
            <motion.li
              onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <NavLink to="/" className="active-links">Home</NavLink>
              </motion.li>
            <motion.li
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">About</NavLink>
            </motion.li>
            <motion.li
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">Menu</NavLink>
            </motion.li>
            <motion.li
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/reservations" className="active-links">Reservations</NavLink>
            </motion.li>
            <motion.li
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">Order Online</NavLink>
            </motion.li>
            <motion.li
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">Login</NavLink>
            </motion.li>
        </motion.ul>
  )
}

export default NavLinks