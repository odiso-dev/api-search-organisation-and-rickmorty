import React from 'react';
import { Link } from 'react-router-dom';
import { MemberVm } from '@/member-row.vm';
import { Image } from './image';
import classes from './member-row.module.css';

interface Props {
  member: MemberVm;
}

export const Member: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <tr>
      <td>
        <Image
          src={member.avatar_url}
          alt={member.login}
          classname={classes.member_img}
        />
      </td>
      <td>
        <p>{member.id}</p>
      </td>
      <td>
        <Link to={`/detail/${member.login}`}>{member.login}</Link>
      </td>
    </tr>
  );
};
