import Presenter from './presenter/presenter';
import PointsModel from './model/model-for-point';

const tripControlFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const pointsModel = new PointsModel();

const currentPresenter = new Presenter(tripControlFilters, tripEvents, pointsModel);

currentPresenter.init();
