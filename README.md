# Завдання 11. Перенос логіки АПІ на сервер, знайомство з Docker 

##  Запуск PostgreSQL у Docker (Windows)
docker run --name postgresql1 -e POSTGRES_PASSWORD=123456 -v C:\projects\DB\pg15_2:/var/lib/postgresql/data -p 5432:5432 -d postgres:15.2

## Старт сервера та клієнта
1. Сервер

cd server
npm run serve

2. Клієнт

cd client
npm run dev

Таблиця бази даних створюється під час першого запуску проєкту

![webstorm64_i4eUobzVzG](https://github.com/user-attachments/assets/80fefb7b-8037-496a-aced-e1918cd766d7)
![dbeaver_J03HNsRKID](https://github.com/user-attachments/assets/db9c7116-9550-4c3f-bf30-24a7ab210dc2)


Якщо контейнер не запущено, з’явиться помилка про відсутність підключення до PostgreSQL
![firefox_5xRF2lobC8](https://github.com/user-attachments/assets/83f3c63f-5130-4983-88f1-6dc9ecffe214)
