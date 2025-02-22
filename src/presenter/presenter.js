import Filters from '../view/filters';
import FormCreation from '../view/creating-form';
import FormEditing from '../view/editing-form';
import PointRouteList from '../view/point-of-route-list';
import PointRoute from '../view/point-of-route';
import Sorting from '../view/sorters';
import { render } from '../render.js';

export default class Presenter {
  PointRouteListPart = new PointRouteList();

  constructor(tripControlFilters, tripEvents, pointsModel) {
    this.tripEvents = tripEvents;
    this.tripControlFilters = tripControlFilters;
    this.pointsModel = pointsModel;
  }

  init() {
    this.allPoints = [...this.pointsModel.getPoints()];

    render(new Filters(), this.tripControlFilters);
    render(new Sorting(), this.tripEvents);
    render(this.PointRouteListPart, this.tripEvents);
    render(new FormEditing({point: this.allPoints[0]}), this.PointRouteListPart.getElement());

    for (let i = 0; i < this.allPoints.length; i++) {
      render(new PointRoute({point: this.allPoints[i]}), this.PointRouteListPart.getElement());
    }

    render(new FormCreation(), this.PointRouteListPart.getElement());
  }
}
