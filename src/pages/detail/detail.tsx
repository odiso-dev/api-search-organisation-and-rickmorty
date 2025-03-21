import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MemberEntity } from '@/api';
import { emptyMemberDetail } from '@/api';
import { Image } from '@/components/image';
import classes from './detail.module.css';
import { routes } from '@/core/router';

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
        <Link to={routes.organisation}>Back to list page</Link>
      </div>
      <h1>Member detail</h1>
      <div className={classes.memberCard}>
        <h2>{member.login}</h2>
        <p>{member.name}</p>
        <Image
          src={member.avatar_url}
          alt={member.login}
          classname={classes.detailImg}
        />
        <p>
          {member.type} {member.id}
        </p>
      </div>
    </div>
  );
};
