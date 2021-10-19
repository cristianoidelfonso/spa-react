import React from 'react';
import Header from './Header';
import Contact from './main/Contact';

export default class Contato extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Contact />
            </div>
        );
    }
}