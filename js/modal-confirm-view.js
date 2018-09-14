import AbstractView from './abstract-view.js';

export default class ModalConfirmView extends AbstractView {
  get template() {
    return `<section class="modal">
              <button class="modal__close" type="button" data-id="reject"><span class="visually-hidden">Закрыть</span></button>
              <h2 class="modal__title">Подтверждение</h2>
              <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
              <div class="modal__buttons">
                <button class="modal__button button" data-id="ok">Ок</button>
                <button class="modal__button button" data-id="reject">Отмена</button>
              </div>
            </section>`;
  }

  bind() {
    const modal = this.element.querySelector(`.modal`);
    modal.addEventListener(`click`, (e) => {
      if (e.target.dataset.id === `ok`) {
        this.onOkBtnClick();
      } else if (e.target.dataset.id === `reject`) {
        this.onRejectButtonClick();
      }
    });
  }

  onOkBtnClick() {}
  onRejectButtonClick() {}
}
