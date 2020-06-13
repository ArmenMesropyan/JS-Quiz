import * as Controller from '../controller';
import * as Data from '../data';
import * as View from '../view';

const dataArr = Object.values(Data);
const controllerArr = Object.values(Controller);
const viewArr = Object.values(View);

controllerArr.forEach((ControllerItem, i) => {
    const DataItem = dataArr[i];
    const ViewItem = viewArr[i];

    const data = new DataItem();
    const controller = new ControllerItem(data);
    const view = new ViewItem(controller);

    view.init();
});
