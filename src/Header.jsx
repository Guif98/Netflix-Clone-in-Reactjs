import React from 'react';

const Header = ({header, description}) => {
    return (
        <div className="collection-header">
            <h1 className="collection-header-name">{header}</h1>
            <p className="collection-description">{description}</p>
        </div>
    )
}

export default Header;