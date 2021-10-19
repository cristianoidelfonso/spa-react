import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
    color: 'blue',
    width: '30px',
    cursor: 'pointer',
};

export default class Address extends React.Component {

    render() {
        return (
            <div className="address">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/btn-whatsapp.png" />
                    <source media="(min-width: 769px)" srcSet="/img/btn-whatsapp.png" />
                    <Link to='/'>
                        <img style={divStyle} src="/img/btn-whatsapp.png" alt="WhatsApp de Imóveis no Barreiro" />
                    </Link>
                </picture>

                <strong> (xx) xxxx - xxxx</strong>< br/>
                Endereço
            </div>
        );
    }
}