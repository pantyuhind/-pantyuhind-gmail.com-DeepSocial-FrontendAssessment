import React, { Component } from 'react'

function removeButton(removeField) {
    return (
        <div className="count-button" onClick={removeField}>
            <span className="icon icon_remove" />
        </div>
    )
}

function addButton(addNewField) {
    return (
        <div className="count-button" onClick={addNewField}>
            <span className="icon icon_plus" />
            <span className="count-button__text">Добавить еще</span>
        </div>
    )
}

export default class Input extends Component {

    render() {

        const { sample, index, addNewField, removeField, isLast, onChange, data } = this.props;
        return (
            <div className="field-control field-control_increase">
                <input value={data.value} type="text" className="input" onChange={onChange} placeholder={ sample || "Введите значение" } />
                { index > 0 && removeButton(removeField) }
                { isLast && addButton(addNewField) }
            </div>
        )
    }

}