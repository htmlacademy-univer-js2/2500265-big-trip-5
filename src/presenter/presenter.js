import Filters from '../view/filters-view.js';
import FormEditing from '../view/editing-form-view.js';
import PointRouteList from '../view/point-of-route-list-view.js';
import PointRoute from '../view/point-of-route-view.js';
import Sorting from '../view/sorters-view.js';
import EmptyListView from '../view/empty-list-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';
import { generateFilter } from '../mock/filters-info.js';

export default class Presenter {
  #pointRouteListPart = new PointRouteList();
  #tripControlFilters = null;
  #tripEventsPart = null;
  #pointsModel = null;
  #allPoints = null;

  constructor({tripControlFilters, tripEvents, pointsModel}) {
    this.#tripEventsPart = tripEvents;
    this.#tripControlFilters = tripControlFilters;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#allPoints = this.#pointsModel.points;

    const currentFilters = generateFilter(this.#allPoints);

    if (this.#allPoints.length > 0) {
      render(new Filters({currentFilters}), this.#tripControlFilters);
      render(new Sorting(), this.#tripEventsPart);
      render(this.#pointRouteListPart, this.#tripEventsPart);

      this.#allPoints.forEach((point) => this.#renderPoint(point));
    } else {
      render(new EmptyListView(), this.#tripEventsPart);
    }
  }

  #renderPoint(point) {
    const onEscKeydown = (event) => {
      if (isEscapeKey(event)) {
        event.preventDefault();
        replaceEditingFormPoint();
        document.removeEventListener('keydown', onEscKeydown);
      }
    };

    const editForm = new FormEditing({point,
      onSubmitClick: () => {
        replaceEditingFormPoint();
        document.removeEventListener('keydown', onEscKeydown);
      },

      onRollButtonClick: () => {
        replaceEditingFormPoint();
        document.removeEventListener('keydown', onEscKeydown);
      }
    });

    const pointRouteItem = new PointRoute({point,
      onRollButtonClick: () => {
        replacePointEditingForm();
        document.addEventListener('keydown', onEscKeydown);
      }
    });

    function replaceEditingFormPoint() {
      replace(pointRouteItem, editForm);
    }

    function replacePointEditingForm() {
      replace(editForm, pointRouteItem);
    }

    render(pointRouteItem, this.#pointRouteListPart.element);
  }
}
