import React, { useState } from 'react';
import { Line } from './Line';
import ContentBoxes from './ConBox';


const Nav = () => {
    const [selectedId, setSelectedId] = useState(0);

    const handleClick = (id) => {
        setSelectedId(id);
    };

    return (
        <nav>
            <div id="category-box-container">
                <div id="box-0" role="button" style={{ border: selectedId === 0 ? 'none' : '0.05px solid #bdbdbd' }} className={`category-box ${selectedId === 0 ? 'selected' : ''}`} onClick={() => handleClick(0)} tabIndex="0">HTML</div>
                <div id="box-1" role="button" style={{ border: selectedId === 1 ? 'none' : '0.05px solid #bdbdbd' }} className={`category-box ${selectedId === 1 ? 'selected' : ''}`} onClick={() => handleClick(1)} tabIndex="1">CSS</div>
                <div id="box-2" role="button" style={{ border: selectedId === 2 ? 'none' : '0.05px solid #bdbdbd' }} className={`category-box ${selectedId === 2 ? 'selected' : ''}`} onClick={() => handleClick(2)} tabIndex="2">JavaScript</div>
                <div id="box-3" role="button" style={{ border: selectedId === 3 ? 'none' : '0.05px solid #bdbdbd' }} className={`category-box ${selectedId === 3 ? 'selected' : ''}`} onClick={() => handleClick(3)} tabIndex="3">React</div>
                <div id="box-4" role="button" style={{ border: selectedId === 4 ? 'none' : '0.05px solid #bdbdbd' }} className={`category-box ${selectedId === 4 ? 'selected' : ''}`} onClick={() => handleClick(4)} tabIndex="4">Sanity and headless CMS</div>
            </div>

            <Line selectedId={selectedId}/>

            <ContentBoxes selectedId={selectedId}/>
        </nav>
    );
};
    
export default Nav;
  
  
  
  