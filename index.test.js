import { studentsBirthDays } from './index';

it('studentsBirthDays', () => {
  const expectArray = [
    { name: 'Denys', birthDate: '04/15/2008' },
    { name: 'Tom3', birthDate: '01/27/2010' },
    { name: 'Tom1', birthDate: '01/13/2010' },
    { name: 'Tom2', birthDate: '01/17/2010' },
    { name: 'Valera', birthDate: '04/11/2005' },
    { name: 'Sam2', birthDate: '12/19/2010' },
    { name: 'Sam1', birthDate: '12/17/2011' },
  ];
  const equalObject = {
    Apr: ['Valera', 'Denys'],
    Jan: ['Tom1', 'Tom2', 'Tom3'],
    Dec: ['Sam1', 'Sam2'],
  };
  expect(studentsBirthDays(expectArray)).toEqual(equalObject);
});
