const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function formatCurrency(value) {
    value = String(value).replace(/\D/g, "");

    value = parseFloat(value.replace(",", "."))

    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return value.replace(".", ",")
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + Number(minutes))
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    formatCurrency,
    convertHoursToMinutes
}