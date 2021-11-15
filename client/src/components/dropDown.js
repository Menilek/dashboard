import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CategoryDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [optionActive, setOptionActive] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const toggleOptionActive = (e) => {
    const name = e.target.getAttribute('name');
    setOptionActive((prevState) => !prevState);
  };

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle color="primary" caret>
          Category
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem active={optionActive} onClick={toggleOptionActive} name="all">
            All
          </DropdownItem>
          <DropdownItem active={optionActive} onClick={toggleOptionActive} name="verbs">
            Verbs
          </DropdownItem>
          <DropdownItem active={optionActive} onClick={toggleOptionActive} name="adverbs">
            Adverbs
          </DropdownItem>
          <DropdownItem active={optionActive} onClick={toggleOptionActive} name="adjectives">
            Adjectives
          </DropdownItem>
          <DropdownItem active={optionActive} onClick={toggleOptionActive} name="slang">
            Slang
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CategoryDropdown;
