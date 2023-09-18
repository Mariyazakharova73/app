### app

#### О проекте

Проект без использования Create React App. Настроена работа с css-модулями. Бандл разделен на чанки (React.lazy). Добавлена возможность смены темы (React Context, css-variables, custom hook useTheme). Добавлена helper-функция для работы с классами. Реализована возможность смены языка (i18next). Настроен EsLint, Stylelint. протестированы некоторые функции (jest). настроена обработка ошибок (React ErrorBoundary)

<details><summary>Применен Feature-Sliced Design</summary>
app - router, ThemeProvider, styles, types

pages - AboutPage, MainPage

widgets - Navbar, SideBar, ThemeSwitcher, LanguageSwitcher, PageLoader

feautures

entities

shared - AppLink, classNames, assets, config i18next, routeConfig, Loader

</details>

#### Технологии

<div>
<img height='25px' src="https://img.shields.io/badge/Webpack-20232A??style=plastic&logo=Webpack&logoColor=8DD6F9" alt="Webpack.">
  <img height='25px' src="https://img.shields.io/badge/React-20232A??style=plastic&logo=react&logoColor=61DAFB" alt="React.">
  <img height='25px' src="https://img.shields.io/badge/TypeScript-20232A??style=plastic&logo=typescript&logoColor=3178C6" alt="TypeScript.">
  <img height='25px' src="https://img.shields.io/badge/React Router v6-20232A??style=plastic&logo=reactrouter&logoColor=CA4245" alt="React Router.">
  <img height='25px' src="https://img.shields.io/badge/Sass-20232A??style=plastic&logo=sass&logoColor=CC6699" alt="Sass">
  <img height='25px' src="https://img.shields.io/badge/Jest-20232A??style=plastic&logo=jest&logoColor=C21325" alt="Jest">
</div>

#### Установка и запуск приложения

<details><summary><b>Развернуть</b></summary>

Клонировать репозиторий (backend):

    git clone https://github.com/Mariyazakharova73/app.git

Установить зависимости:

    npm install

Запустить проект:

    npm start

</details>