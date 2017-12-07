import React, { Component } from 'react'
import CheckBox from './CheckBox'
import { CHOOSE_ALL, UNCHOOSE_ALL } from '../constants'

let selectAllCheckbox = {
    value: "Выбрать все",
    checked: false,
    all: true,
    b: true
};

export default class CheckBoxGroup extends Component {

    handleChange = (checkbox, index) => {
        const { data, onChange } = this.props;
        const checked = !Boolean(checkbox.checked);
        data.options[index].checked = checked;
        if (!checked && selectAllCheckbox.checked) {
            selectAllCheckbox.checked = false;
            selectAllCheckbox.value = CHOOSE_ALL;
        }
        onChange(data);
    };

    selectAll = () => {
        const checked = !Boolean(selectAllCheckbox.checked);
        selectAllCheckbox.checked = checked;
        selectAllCheckbox.value = checked ? UNCHOOSE_ALL : CHOOSE_ALL;
        const { data, onChange } = this.props;
        data.options.map((checkbox) => checkbox.checked = selectAllCheckbox.checked);
        onChange(data);
    };

    render() {

        const { options } = this.props.data;

        return (
            <div className="checkbox-group">
                {
                    options.map((checkbox, index) => {
                        return <CheckBox key={index} data={checkbox} onChange={() => this.handleChange(checkbox, index)} />
                    })
                }
                {
                    <CheckBox data={selectAllCheckbox} onChange={() => this.selectAll()} />
                }
            </div>
        )
    }

}