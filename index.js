const students = [
  { name: 'Denys', birthDate: '04/15/2008' },
  { name: 'Tom3', birthDate: '01/27/2010' },
  { name: 'Tom1', birthDate: '01/13/2010' },
  { name: 'Tom2', birthDate: '01/17/2010' },
  { name: 'Valera', birthDate: '02/09/2005' },
  { name: 'Ben', birthDate: '02/03/2010' },
  { name: 'Kate', birthDate: '03/06/2006' },
  { name: 'Alex', birthDate: '04/17/1950' },
  { name: 'Sam', birthDate: '04/10/2010' },
];

// const example = {
//   Jan: [
//     { name: 'Tom3', birthDate: '01/27/2012' },
//     { name: 'Tom1', birthDate: '01/13/2008' },
//     { name: 'Tom2', birthDate: '01/17/2010' },
//   ],
//   Apr: [
//     { name: 'Sam', birthDate: '04/10/2010' },
//     { name: 'Alex', birthDate: '04/17/1950' },
//   ],
// };

export const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  month: 'short',
});

export const getNamesSortedByDate = objectStudentBirth =>
  Object.fromEntries(
    Object.entries(objectStudentBirth).map(([month, studentsByMonth]) => [
      month,
      studentsByMonth
        .sort((fromDate, toDate) => new Date(fromDate.birthDate) - new Date(toDate.birthDate))
        .map(element => element.name),
    ]),
  );

export const studentsBirthDays = students =>
  getNamesSortedByDate(
    students.reduce((accum, student) => {
      const month = formatter.format(new Date(student.birthDate));
      return { ...accum, [month]: accum[month] ? accum[month].concat(student) : [student] };
    }, {}),
  );

console.log(studentsBirthDays(students));
// console.log(getSortByDate(example));
