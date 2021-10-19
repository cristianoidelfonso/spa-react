import React from 'react';
// import { InformationItem } from 'InformationItem';

export default class Information extends React.Component {

    render() {
        const div1 = {
            image: "a.png",
            alt: "Excelente imóvel",
            text: "Apartamento com preço incrível",
            value: "600,00"
        }

        const div2 = {
            image: "b.png",
            alt: "Excelente imóvel",
            text: "Apartamento com preço incrível",
            value: "1000,00"
        }
        return (
            <div>
                <div className="vantagens">
                    {/* <InformationItem {...div1} /> */}
                    {/* <InformationItem {...div2} /> */}
                </div>
            </div>
        );
    }
}