import React from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Header = ({isOpen, toggleSidebar}) => {
  return (
    <>
    <header className='d-flex w-100 align-items-center'>
    <button
            className={isOpen ? 'd-none' : "rounded-lg p-2 m-2 menu-btn align-items-center d-flex justify-content-center"}
            style={{
              backgroundColor: "transparent",
              border: "0",
              borderRadius: "5px",
              height: '33px',
              width: '33px'
            }}
            onClick={toggleSidebar}
          >
            <MenuOpenIcon />
          </button>
    </header>
    </>
  )
}

export default Header