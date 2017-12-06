import React, { Component } from 'react';
import './sass/app.css';
//import Row from './decorators/Row'

export default class App extends Component {

  componentWillMount() {

      this.setState({
          model: [
              {
                  label: "ВУЗ",
                  description: "Укажите учебные заведения, в которых вы учились.",
                  example: "Например, ВолгГАСУ"
              }
          ]
      })

  }

  render() {
    return (
      <div className="app">
          <h1 className="header header_1">Анкета</h1>
          <div className="form">
              <div className="form__row">

                      <div className="form__col">
                          <div className="form__label">Семейное положение <span className="asterisk">*</span></div>
                      </div>
                      <div className="form__col">
                          <div className="dropdown opened1">
                              <div className="dropdown__label">
                                  <div className="dropdown__text">Не женат/не замужем</div>
                                  <span className="icon icon_arrow dropdown__arrow" />
                              </div>
                              <div className="dropdown__list">
                                  <div className="dropdown__list__inner">
                                      <div className="dropdown__item active">Не важно</div>
                                      <div className="dropdown__item">Абакан</div>
                                      <div className="dropdown__item">Женат/замужем</div>
                                  </div>
                              </div>
                          </div>
                          <div className="form__row__description">Укажите учебные заведения, в которых вы учились.</div>
                      </div>

              </div>
              <div className="form__row">
                      <div className="form__col">
                          <div className="form__label">ВУЗ</div>
                      </div>
                      <div className="form__col">
                          <div className="field-control field-control_increase">
                              <input type="text" className="input" placeholder="Например, ВолгГАСУ" />
                              <div className="count-button">
                                  <span className="icon icon_remove" />
                              </div>
                              <div className="count-button">
                                  <span className="icon icon_plus" />
                                  <span className="count-button__text">Добавить еще</span>
                              </div>
                          </div>
                      </div>
              </div>
              <div className="form__row">

                      <div className="form__col">
                          <div className="form__label">Навыки</div>
                      </div>
                      <div className="form__col">
                          <div className="checkbox-group">
                              <div className="checkbox-group__control">
                                <label className="checkbox">
                                    <input type="checkbox"  name="" id=""/>
                                    <span className="checkbox__square" />
                                    <span className="checkbox__label">Общение</span>
                                </label>
                              </div>
                              <div className="checkbox-group__control">
                                <label className="checkbox">
                                    <input type="checkbox"  name="" id=""/>
                                    <span className="checkbox__square" />
                                    <span className="checkbox__label">Пение</span>
                                </label>
                              </div>
                              <div className="checkbox-group__control">
                                <label className="checkbox">
                                    <input type="checkbox"  name="" id=""/>
                                    <span className="checkbox__square" />
                                    <span className="checkbox__label">Знание иностранных языков</span>
                                </label>
                              </div>
                              <div className="checkbox-group__control">
                                <label className="checkbox">
                                    <input type="checkbox"  name="" id=""/>
                                    <span className="checkbox__square" />
                                    <span className="checkbox__label">Программирование</span>
                                </label>
                              </div>
                          </div>
                          <div className="form__row__description">Отметьте ваши навыки.</div>
                      </div>

              </div>
              <div className="form__bottom">
                  <button type="submit" className="button">Отправить</button>
              </div>
          </div>
      </div>
    );
  }
}
