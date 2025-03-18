import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MemberEntity } from './api/api.member.model';
import { emptyMemberDetail } from './api/api.members';
import classes from './detail.module.css';

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const [member, setMember] = React.useState<MemberEntity>(emptyMemberDetail());

  React.useEffect(() => {
    try {
      fetch(`https://api.github.com/users/${id}`).then((response) =>
        response.json().then((data) => {
          setMember(data);
        })
      );
    } catch (error) {
      throw new Error(`** Failed conection API ${error} **`);
    }
  }, [id]);

  return (
    <div className={classes.layoutMember}>
      <div className={classes.backPage}>
        <Link to="/list">Back to list page</Link>
      </div>
      <h1>Member detail</h1>
      <div className={classes.memberCard}>
        <h2>{member.login}</h2>
        <p>{member.name}</p>
        <img src={member.avatar_url} alt={member.login} />
        <p>
          {member.type} {member.id}
        </p>
      </div>
    </div>
  );
};
