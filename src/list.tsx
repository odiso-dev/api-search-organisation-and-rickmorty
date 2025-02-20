import React from 'react';
import { Link } from 'react-router-dom';
import classes from './list.module.css';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>+{' '}
      <div className={classes.listUserListContainer}>
        <span className={classes.listHeader}>Avatar</span>
        <span className={classes.listHeader}>Id</span>
        <span className={classes.listHeader}>Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
