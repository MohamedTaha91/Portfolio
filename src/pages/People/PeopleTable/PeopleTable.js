import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import { useState, useEffect } from 'react';
import LoadingLogo from 'components/LoadingLogo';

async function getPeople() {
  return fetch(`http://localhost:4002/people`, { method: 'GET' }).then((response) =>
    response.json(),
  );
}

// Again, feel free to modify any code as much as you need.
// We know some of these things are incorrect, so please
// show us how to do it right! ✨
export default function PeopleTable() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    async function loadPeople() {
      const people = await getPeople();
      setPeople(people);
    }
    loadPeople();
  }, []);

  if (!people) {
    return <LoadingLogo />;
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableThCell>Name</TableThCell>
            <TableThCell>Role</TableThCell>
            <TableThCell>Type</TableThCell>
            <TableThCell>Country</TableThCell>
            <TableThCell align="right">Salary</TableThCell>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.jobTitle}</TableCell>
              <TableCell>{person.employment}</TableCell>
              <TableCell>{person.country}</TableCell>
              <TableCell align="right">{person.salary}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}
