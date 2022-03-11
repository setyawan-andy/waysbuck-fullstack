import React from 'react';
import DropdownAdmin from "./DropdownAdmin"

const HeaderAdmin = () => {
  return (
    <div>

        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
            <img src="../img/waysbuck-logo.svg" alt="waysbucklogo" />
        </div>
          <ul className="hidden md:flex flex-1 justify-end items-center gap-2">
          <DropdownAdmin />
          </ul>
      </nav>

    </div>
  )
}

export default HeaderAdmin