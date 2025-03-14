import React from 'react';
import classes from './member-table.module.css';
import { Member } from './member-row';
import { MemberVm } from '../member-row.vm';

interface Props {
  members: MemberVm[];
}

export const MemberTable: React.FC<Props> = (props) => {
  const { members } = props;
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
