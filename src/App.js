import React, { Component } from 'react';
import './sass/app.css';
import Row from "./decorators/Row";
import JSONPretty from 'react-json-pretty';
import DropDown from './components/dropDown'
import InputGroup from './components/InputGroup'
import CheckBoxGroup from './components/CheckBoxGroup'
import { cloneDeep } from 'lodash'
import { processModel, getData, PrettyModel } from './utils'
import { CHECKBOX_GROUP, DROPDOWN } from './constants'

function renderComponent(data, index, handleChange) {
    switch (data.type) {
        case DROPDOWN:
            return <DropDown onChange={(param) => handleChange(param, index)} data={data} />;
        case CHECKBOX_GROUP:
            return <CheckBoxGroup onChange={(param) => handleChange(param, index)} data={data} />;
        default:
            return <InputGroup onChange={(param) => handleChange(param, index)} data={data} />
    }
}

export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = { model: [] }
  }

  componentWillMount() {

      // запрашиваем json и отрисовываем модель
      getData().then((model) => {
          this.setState({
              model: processModel(model)
          });
      });
  }

  handleChange = (item, index) => {
      let newModel = cloneDeep(this.state.model);
      newModel[index] = cloneDeep(item);
      this.setState({
          model: newModel
      });
  };

  formSubmit = (event) => {
      event.preventDefault();
  };

  render() {

      const prettyModel = PrettyModel(this.state.model);

      return (
        <div className="app">
          <h1 className="header header_1">Анкета</h1>
          <form action="#" className="form" onSubmit={(event) => this.formSubmit(event)}>
              { this.state.model.map((data, index) => {
                  return (
                      <Row key={data.name} data={data}>
                          { renderComponent(data, index, this.handleChange) }
                      </Row>
                  )
              }) }
              <div className="form__bottom">
                  <button type="submit" className="button">Отправить</button>
              </div>
          </form>
          <div className="output">
            <JSONPretty id="json-pretty" json={prettyModel} />
          </div>
      </div>
    );
  }
}
