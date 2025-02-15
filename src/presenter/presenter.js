import Filters from '../view/filters';
import FormCreation from '../view/creating-form';
import FormEditing from '../view/editing-form';
import PointRouteList from '../view/point-of-route-list';
import PointRoute from '../view/point-of-route';
import Sorting from '../view/sorters';
import { render } from '../render.js';

const MAX_ROUTE_POINT_COUNT = 3;

export default class Presenter {
  PointRouteListPart = new PointRouteList();

  constructor() {
    this.tripEvents = document.querySelector('.trip-events');
    this.tripControlFilters = document.querySelector('.trip-controls__filters');
  }

  init() {
    render(new Filters(), this.tripControlFilters);
    render(new Sorting(), this.tripEvents);
    render(this.PointRouteListPart, this.tripEvents);
    render(new FormEditing(), this.PointRouteListPart.getElement());

    for (let i = 0; i < MAX_ROUTE_POINT_COUNT; i++) {
      render(new PointRoute(), this.PointRouteListPart.getElement());
    }

    render(new FormCreation(), this.PointRouteListPart.getElement());
  }
}
