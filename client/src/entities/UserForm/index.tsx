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
  const [userName, setUserName] = useState(defaultValues?.userName || '');
  const [password, setPassword] = useState(defaultValues?.password || '');

  const userNameChangeHandler = (userName: string) => setUserName(userName);
  const passwordChangeHandler = (password: string) => setPassword(password);

  const onSubmitClick = () => {
    if (
      userName.length >= 2 &&
      userName.length <= 30 &&
      password.length >= 4 &&
      password.length <= 20
    )
      submitHandler({ userName, password });
  };

  return (
    <div className="flex flex-col gap-4">
      <Input value={userName} changeHandler={userNameChangeHandler} label={'Login'} />
      <Input value={password} changeHandler={passwordChangeHandler} label="Password" />

      <Button title={buttonTitle} onClick={onSubmitClick} />
    </div>
  );
};

export default UserForm;
