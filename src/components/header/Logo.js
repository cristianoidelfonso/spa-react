import React from 'react';

export default class Logo extends React.Component {

    render() {
        return (
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/logo-ideltech.png" />
                    <source media="(min-width: 769px)" srcSet="/img/logo-ideltech.png" />
                    <img src="/img/logo-ideltech.png" alt="Logomarca Ideltech Imóveis" />
                </picture>
            </div>
        );
    }
}