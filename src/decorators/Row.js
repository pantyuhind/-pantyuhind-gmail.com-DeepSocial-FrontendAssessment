import React, { Component } from 'react'

export default class Row extends Component {

    render() {

        const { label, required, description } = this.props.data;

        return (

            <div className="form__row">
                <div className="form__col">
                    <div className="form__label">
                        { label }
                        { required && <span className="asterisk">*</span> }
                    </div>
                </div>
                <div className="form__col">
                    { this.props.children }
                    { description && <div className="form__row__description"> { description } </div> }
                </div>

            </div>

        )
    }
}