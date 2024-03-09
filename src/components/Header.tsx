import React from 'react'

export const Header = () => {
  return (
    <nav className='flex justify-center items-center p-10'>
        <ul className='flex flex-row items-center gap-12'>
            <li>Home</li>
            <li>Discover</li>
            <li>Gallery</li>
            <li>Artist</li>
        </ul>
    </nav>
  );
}
