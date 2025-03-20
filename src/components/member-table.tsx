import React from 'react';
import classes from './member-table.module.css';
import { Member } from './member-row';
import { MemberVm } from '../member-row.vm';
/* MUI */
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material/';

interface Props {
  members: MemberVm[];
}

export const MemberTable: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              '& th': { color: '#fff', fontWeight: 'bold', fontSize: '18px' },
            }}
          >
            <TableCell
              component="th"
              scope="row"
              className={classes.listHeader}
            >
              Avatar
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              className={classes.listHeader}
            >
              Id
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              className={classes.listHeader}
            >
              Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
