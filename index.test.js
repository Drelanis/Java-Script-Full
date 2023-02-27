import { getNamesSortedByDate, studentsBirthDays } from './index';

it('getNamesSortedByDate', () => {
  const expectObject = {
    Jan: [
      { name: 'Tom3', birthDate: '01/27/2012' },
      { name: 'Tom1', birthDate: '01/13/2008' },
      { name: 'Tom2', birthDate: '01/17/2010' },
    ],
    Apr: [
      { name: 'Sam', birthDate: '04/10/2010' },
      { name: 'Alex', birthDate: '04/17/1950' },
    ],
  };
  const equalObject = {
    Apr: ['Alex', 'Sam'],
    Jan: ['Tom1', 'Tom2', 'Tom3'],
  };
  expect(getNamesSortedByDate(expectObject)).toEqual(equalObject);
});

it('studentsBirthDays', () => {
  const expectArray = [
    { name: 'Denys', birthDate: '04/15/2008' },
    { name: 'Tom3', birthDate: '01/27/2010' },
    { name: 'Tom1', birthDate: '01/13/2010' },
    { name: 'Tom2', birthDate: '01/17/2010' },
    { name: 'Valera', birthDate: '04/11/2005' },
  ];
  const equalObject = {
    Apr: ['Valera', 'Denys'],
    Jan: ['Tom1', 'Tom2', 'Tom3'],
  };
  expect(studentsBirthDays(expectArray)).toEqual(equalObject);
});
