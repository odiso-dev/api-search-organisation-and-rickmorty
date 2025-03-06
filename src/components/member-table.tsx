import React from 'react';
import classes from './member-table.module.css';
import { Member } from './member';

export const MemberTable: React.FC = () => {
  const [members, setMembers] = React.useState([]);
  const [inputCurrentValue, setInputCurrentValue] = React.useState('');

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th className={classes.listHeader}>Avatar</th>
          <th className={classes.listHeader}>Id</th>
          <th className={classes.listHeader}>Name</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </tbody>
    </table>
  );
};
