const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Insert data
    const proffyValue = {
        name: "Diego Fernandes",
        avatar: 'https://avatars2.githubusercontent.com/u/35296262?s=460&u=a0210f863cd646b406a668bdaba8e0c08e268ba6&v=4',
        whatsapp: '131211343',
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    }

    const classValue = {
        subject: '5',
        cost: 'R$20'
    }

    const classScheduleValues = [
        {
            weekday: 0,
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Query data
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Query the classes of a specific professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "520"
    `)    

    console.log(selectClassesSchedule)
})