import React from 'react'

export default function CheckBox(props) {
    const { value, checked, b } = props.data;
    return (
        <label className="checkbox-group__control">
            <div className="checkbox">
                <input type="checkbox" checked={checked || false} name="" id="" onChange={props.onChange} />
                <span className="checkbox__square" />
                <span className={`checkbox__label ${b ? 'bold' : ''}`}>
                    { value }
                </span>
            </div>
        </label>
    )
}