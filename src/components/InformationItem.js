import React from 'react';

export default class InformationItem extends React.Component {
    render() {
        return (
            <div className="vantagensItem ">
                <div className="vantagensItemImg">
                    <img src={"img/icons/" + this.props.image} alt={this.props.alt} title={this.props.title} />
                </div>
                <div className="vantagensItemTxt">
                    {this.props.text} <br />
                    R${this.props.value}
                </div>
            </div>
        );
    }
}