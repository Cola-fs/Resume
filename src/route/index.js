// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },
    salary: '600$',
    position: 'Junior Fullstack JS Developer',
    social: {
      email: {
        text: 'ivanov@gmail.com',
        href: 'mailto:ivanov@gmail.com',
      },
    },
    summary: {
      title: 'Summary',
      text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to       work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
    },
    experience: {
      title: 'Other experience',
      text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.'
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
