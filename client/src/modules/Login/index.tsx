import API from 'API';
import AuthorizationWrapper from 'entities/AuthorizationWrapper';
import UserForm from 'entities/UserForm';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IAuthorizationRequest } from 'types';

const Login: FC = () => {
  const navigate = useNavigate();

  const loginHandler = async (authorizationValues: IAuthorizationRequest) => {
    const loginResponse = await API.post('register', authorizationValues);
    if (loginResponse?.data) navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
      <AuthorizationWrapper title={'Login'}>
        <UserForm buttonTitle={'Login'} submitHandler={loginHandler} />
      </AuthorizationWrapper>

      <Link to="/">Go to registration</Link>
    </div>
  );
};

export default Login;
