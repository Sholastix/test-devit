1. Выведите 5 записей из коллекции posts, пропустив первые 5:

    db.posts.find({}).skip(5).limit(5)

2. Выведите все записи, у которых like больше 100:

    db.posts.find({"properties.like": {$gt : 100}})

3. Добавьте новую запись в коллекцию posts:

    3.1. Добавить одиночную запись:

        db.posts.insertOne({"properties": {"title": "Божественная комедия", "content": "Ад, Чистилище, Рай", "author": "Данте Алигьери","like": 130, "dislike": 10}})

    3.2. Или для удобства проверки добавить сразу множество записей:

        db.posts.insertMany([
          {"properties": {"title": "1", "content": "А", "author": "Вася","like": 15, "dislike": 20}},
          {"properties": {"title": "2", "content": "Б", "author": "Петя","like": 101, "dislike": 27}},
          {"properties": {"title": "3", "content": "В", "author": "Коля","like": 145, "dislike": 5}},
          {"properties": {"title": "4", "content": "Г", "author": "Миша","like": 76, "dislike": 111}},
          {"properties": {"title": "5", "content": "Д", "author": "Федя","like": 33, "dislike": 22}},
          {"properties": {"title": "6", "content": "Е", "author": "Катя","like": 6, "dislike": 9}},
          {"properties": {"title": "7", "content": "Ж", "author": "Настя","like": 4, "dislike": 23}},
          {"properties": {"title": "8", "content": "З", "author": "Ксюша","like": 189, "dislike": 2}}
        ])

4. Выведите список авторов и их общее количество like:

    4.1. Список авторов и индивидуальное количество лайков у каждого:

        db.posts.find({}, { "properties.author": 1, "properties.like": 1, _id: 0 })

    4.2. Общее количество лайков у всех авторов:

        db.posts.aggregate([ {$group :{ _id: "Authors", total_likes: { $sum : "$properties.like" }}} ])