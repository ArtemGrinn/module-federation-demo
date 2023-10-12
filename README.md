# Демонстрация работы Webpack module-federation-plugin
1. Cобираем и запускаем Host приложение:

    `cd host && npm i && npm run build && npm run build:start`

2. В новом окне терминала собираем и запускаем Remote App1:

    `cd app1 && npm i && npm run build && npm run build:start`

3. В новом окне терминала собираем и запускаем Remote App2:

    `cd app2 && npm i && npm run build && npm run build:start`

4. Открываем http://localhost:8080
