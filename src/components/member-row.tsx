import React from 'react';
import { Link } from 'react-router-dom';
import { MemberVm } from '../member-row.vm';

interface Props {
  member: MemberVm;
}

export const Member: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <tr>
      <td>
        <img src={member.avatar_url} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <Link to={`/detail/${member.login}`}>{member.login}</Link>
      </td>
    </tr>
  );
};
