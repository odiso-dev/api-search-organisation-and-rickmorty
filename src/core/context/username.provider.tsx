import React from 'react';

interface Username {
  name: string;
  setName: (value: string) => void;
}

export const UserNameContext = React.createContext<Username>({
  name: '',
  setName: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const UserNameProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [name, setName] = React.useState('');

  return (
    <>
      <UserNameContext.Provider value={{ name, setName }}>
        {children}
      </UserNameContext.Provider>
    </>
  );
};
