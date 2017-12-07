import React, { Component } from 'react'
import { find } from 'lodash'

export default class DropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    hideList = () => {
        this.setState({isOpen: false});
        document.removeEventListener('click', this.hideList);
    };

    openList = () => {
      if (this.state.isOpen) return;
      this.setState({isOpen: true});
      setTimeout(() => document.addEventListener('click', this.hideList), 0);
    };

    handleChange = (option) => {
        const data = this.props.data;
        const options = data.options;
        options.map( (opt) => opt.selected = Boolean(opt.id === option.id) );
        this.props.onChange(data);
    };

    render() {

        const { isOpen } = this.state;
        const { options } = this.props.data;
        const chosenItem = find(options, (o) => o.selected === true);

        return (
            <div className={`dropdown ${isOpen ? 'opened' : ''}`}>
                <div className="dropdown__label" onClick={this.openList}>
                    <div className="dropdown__text">{ chosenItem && chosenItem.value }</div>
                    <span className="icon icon_arrow dropdown__arrow" />
                </div>
                <div className="dropdown__whiteout" />
                <div className="dropdown__list">
                    <div className="dropdown__list__inner">
                        {
                            options.map((option) => {
                                return (
                                    <div className={`dropdown__item ${option.selected ? 'active' : ''}`} onClick={() => this.handleChange(option)} key={option.id}>
                                        { option.value }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }

}