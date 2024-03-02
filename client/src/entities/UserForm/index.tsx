import { FC, useState } from 'react';
import Button from 'shared/Button';
import Input from 'shared/Input';
import { IAuthorizationRequest } from 'types';

type Props = {
  buttonTitle: string;
  defaultValues?: IAuthorizationRequest;
  submitHandler: (authorizationValues: IAuthorizationRequest) => void;
};

const UserForm: FC<Props> = ({ defaultValues, buttonTitle, submitHandler }) => {
  const [login, setLogin] = useState(defaultValues?.login || '');
  const [password, setPassword] = useState(defaultValues?.password || '');

  const loginChangeHandler = (login: string) => setLogin(login);
  const passwordChangeHandler = (password: string) => setPassword(password);

  const onSubmitClick = () => {
    if (login.length >= 2 && login.length <= 30 && password.length >= 4 && password.length <= 20)
      submitHandler({ login, password });
  };

  return (
    <div className="flex flex-col gap-4">
      <Input value={login} changeHandler={loginChangeHandler} label={'Login'} />
      <Input value={password} changeHandler={passwordChangeHandler} label="Password" />

      <Button title={buttonTitle} onClick={onSubmitClick} />
    </div>
  );
};

export default UserForm;
