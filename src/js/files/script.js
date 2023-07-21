// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


  
  // Получаем все элементы с классом "brief__file" и обрабатываем их один за другим
  const fileElements = document.querySelectorAll('.brief__file');

  // Проходимся по каждому элементу с классом "brief__file"
  fileElements.forEach((fileElement) => {
    // Получаем элементы внутри текущего "brief__file" элемента
    const formImage = fileElement.querySelector('.file__input');
    const formPreview = fileElement.querySelector('.file__preview');
    const buttonPlaceholder = fileElement.querySelector('.file__button-text');

    // Добавляем обработчик события "change" для каждого input с классом "file__input"
    formImage.addEventListener('change', function () {
      if (this.files.length > 0) {
        const fileName = this.files[0].name;
        formPreview.textContent = fileName;
        buttonPlaceholder.style.display = 'none'; // Скрываем текст "Выбрать"
      } else {
        formPreview.textContent = '';
        buttonPlaceholder.style.display = 'block'; // Восстанавливаем текст "Выбрать"
      }
    });
  });
