import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Mediterate</div>

      <ul style={styles.links}>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Levels</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    width: '90%',
    padding: '10px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    position: 'absolute',
    top: 0,
    zIndex: 20,
    color: 'white',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px'
  }
};

export default Navbar;