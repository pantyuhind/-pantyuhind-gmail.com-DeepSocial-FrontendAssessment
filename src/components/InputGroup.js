import React, { Component } from 'react'
import Input from './Input'

export default class InputGroup extends Component {

    addNewField = () => {
        const data = this.props.data;
        data.fields.push({value: ''});
        this.props.onChange(data);
    };

    removeField = (index) => {
        const data = this.props.data;
        data.fields.splice(index, 1);
        this.props.onChange(data);
    };

    handleChange = (event, index) => {
        const data = this.props.data;
        const fields = data.fields;
        fields[index].value = event.target.value;
        this.props.onChange(data);
    };

    render() {

        const data = this.props.data;
        const { sample, fields } = data;

        return (
            <div className="field-groups">
                {
                    fields.map((field, index) => {
                        const isLast = Boolean(index === fields.length - 1);
                        return <Input key={index}
                                      data={field}
                                      isLast={isLast}
                                      sample={sample}
                                      removeField={() => this.removeField(index)}
                                      addNewField={this.addNewField}
                                      index={index}
                                      onChange = {(event) => this.handleChange(event, index)}
                        />
                    })
                }
            </div>
        )
    }

}