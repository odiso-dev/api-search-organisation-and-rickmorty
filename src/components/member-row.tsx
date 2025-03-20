import React from 'react';
import { Link } from 'react-router-dom';
import { MemberVm } from '@/member-row.vm';
import { Image } from './image';
import classes from './member-row.module.css';
/* MUI */
import { TableRow, TableCell } from '@mui/material/';

interface Props {
  member: MemberVm;
}

export const Member: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <TableRow>
      <TableCell>
        <Image
          src={member.avatar_url}
          alt={member.login}
          classname={classes.member_img}
        />
      </TableCell>
      <TableCell sx={{ fontSize: '16px' }}>
        <p>{member.id}</p>
      </TableCell>
      <TableCell sx={{ fontSize: '16px' }}>
        <Link to={`/detail/${member.login}`}>{member.login}</Link>
      </TableCell>
    </TableRow>
  );
};
