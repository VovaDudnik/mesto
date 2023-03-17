const profileEditeButtonElement = document.querySelector(".profile__edit-button"); /*Кнопка редактирвоания*/
const popupElement = document.querySelector(".popup");                                 /*Попап*/
const popupCloseButtonElement = document.querySelector(".popup__close"); /*Закрыть*/
const popupContentElement = document.querySelector(".popup__content");
const popupSaveElement = popupContentElement.querySelector(".popup__save");   /*Сохранить*/
const profileName = document.querySelector(".profile__name");
const profileDiscription = document.querySelector(".profile__discription");
const editName = document.querySelector('#name');
const editDiscription = document.querySelector('#discription');
const saveForm = document.querySelector(".popup__container");

/*Кнопка-Открыть-закрыть*/
const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
  editName.value = profileName.textContent;
  editDiscription.value = profileDiscription.textContent;
}
const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
}
profileEditeButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
/*Кнопка-Открыть-закрыть*/

/*Кнопка-сохранить*/
const saveContent = function (event) {
  event.preventDefault()
  profileName.textContent = editName.value;
  profileDiscription.textContent = editDiscription.value;
  closePopup();

}
saveForm.addEventListener("submit", saveContent);
