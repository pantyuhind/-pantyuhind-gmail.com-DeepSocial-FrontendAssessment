import { cloneDeep, each, find, isEmpty, remove } from 'lodash'
import { CHECKBOX_GROUP, INPUT, DROPDOWN } from './constants'
import 'whatwg-fetch';

function setItemType(model) {
    let newModel = cloneDeep(model);
    each(newModel, (item) => {
        if (item.options) {
            item.type = item.choices ? CHECKBOX_GROUP : DROPDOWN;
        } else {
            item.type = INPUT
        }
    });
    return newModel;
}

function selectFirstOptions(model) {
    let newModel = cloneDeep(model);
    each(newModel, (item) => {
        if (item.type !== DROPDOWN) return;
        const chosenItem = findSelectedItem(item.options);
        if (!chosenItem) item.options[0].selected = true;
    });
    return newModel;
}

export function PrettyModel(model) {
    const pModel = cloneDeep(model);
    const result = [];
    each(pModel, (row) => {
        let item = {};
        item.name = row.name;
         if (row.fields) {
             item.value = remove(row.fields, x => !!x.value).map(x => x.value);
             return;
         }
        if (row.choices) {
            item.value = remove(row.options, x => x.checked).map(x => x.value);
        } else {
            item.value = findSelectedItem(row.options).value;
        }
        if (!isEmpty(item.value)) result.push(item);
    });
    return result;
}

function addFields(model) {
    let newModel = cloneDeep(model);
    each(newModel, (item) => {
        if (item.type !== INPUT) return;
        item.fields = [{ "value" : "" }];
    });
    return newModel;
}

export function findSelectedItem(options) {
    return find(options, (o) => o.selected === true);
}

// берем json
export function getData() {
    return fetch('/data.json').then((response) => response.json());
}

// обрабатываем изначальные данные
export function processModel(model) {
    // определяем компонент (тип) для отрисовки айтема
    let newModel = setItemType(model);
    // выбираем первый пункт у dropdown
    newModel = selectFirstOptions(newModel);
    // возможность добавления нового поля
    newModel = addFields(newModel);

    return newModel;
}