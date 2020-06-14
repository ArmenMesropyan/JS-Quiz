import * as Controller from '../controller';
import * as Data from '../data';
import * as View from '../view';

const controllerArr = Object.keys(Controller);

const factory = {};

controllerArr.forEach((key) => {
    const DataItem = Data[key];
    const ViewItem = View[key];
    const ControllerItem = Controller[key];

    const data = new DataItem();
    const controller = new ControllerItem(data);
    const view = new ViewItem(controller);

    factory[key] = view;
});

export default factory;