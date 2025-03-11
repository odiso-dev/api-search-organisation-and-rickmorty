import React from 'react';
import { MemberEntity } from './member.model';
import { Link } from 'react-router-dom';

interface Props {
  member: MemberEntity;
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
