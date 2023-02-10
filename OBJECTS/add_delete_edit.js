const student = {
    id: 1,
    programmLanguage: 'JavaScript',
    hasExperienceInReact: false,
}

// Добавление

student.experience = 6;
console.log('student: ', student);

// Удаление

delete student.hasExperienceInReact;
console.log('student: ', student);

// Изменение

student.experience = 12;
console.log('student: ', student);

student.id = 2;
console.log('student: ', student);