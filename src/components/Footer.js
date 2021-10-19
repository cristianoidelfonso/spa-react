import React from 'react';

const imgStyle = {
    width: '50%',
}

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div>
                    <img style={imgStyle} src="/img/logo-ideltech-removebg.png" alt="Logomarca Ideltech Imóveis Footer" />
                </div>
                <div>
                    Endereço <br />
                    Telefone <br />
                    Email
                </div>
            </div>
        );
    }
}