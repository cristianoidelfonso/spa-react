import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <AnchorLink href='#photo'>Fotos</AnchorLink>
                <AnchorLink href='#mapa'>Mapa</AnchorLink>
                <AnchorLink href='#information'>Informações</AnchorLink>
                <Link to="/contato">Contato</Link>
            </div>
        );
    }
}