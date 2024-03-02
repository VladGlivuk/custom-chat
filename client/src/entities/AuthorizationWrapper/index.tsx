import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const AuthorizationWrapper: FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      <h1>{title}</h1>

      {children}
    </div>
  );
};

export default AuthorizationWrapper;
