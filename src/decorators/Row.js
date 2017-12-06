import React, { Component } from 'react'

export default class Row extends Component {

    render() {
        return (

            <div className="form__row">
                <div className="form__row__inner">
                    <div className="form__col">
                        <div className="form__label">ВУЗ</div>
                    </div>
                    <div className="form__col">
                        { this.props.children }
                    </div>
                </div>
                <div className="form__row__description">Укажите учебные заведения, в которых вы учились.</div>
            </div>

        )
    }
}