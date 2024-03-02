import AuthorizationWrapper from 'entities/AuthorizationWrapper';
import UserForm from 'entities/UserForm';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IAuthorizationRequest } from 'types';

const Registration: FC = () => {
  const navigate = useNavigate();

  const registerHandler = (authorizationValues: IAuthorizationRequest) => {
    console.log('authorizationValues: ', authorizationValues);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
      <AuthorizationWrapper title="Registration">
        <UserForm buttonTitle={'Register'} submitHandler={registerHandler} />
      </AuthorizationWrapper>

      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default Registration;
