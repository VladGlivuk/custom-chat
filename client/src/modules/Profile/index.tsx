import ProfileRoom from 'entities/ProfileRoom';
import UserForm from 'entities/UserForm';
import { rooms } from 'mocks';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/Button';
import { IAuthorizationRequest } from 'types';

const Profile: FC = () => {
  const navigate = useNavigate();

  const editProfileHandler = (authorizationValues: IAuthorizationRequest) => ({});

  const signOutHandler = () => {
    navigate('/');
  };

  const removeAccountHandler = () => {
    navigate('/');
  };

  const userData = { login: 'User', password: '' };

  return (
    <div>
      <div className="container mx-auto my-60">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16 px-6 w-full flex flex-col gap-4">
              <UserForm
                buttonTitle={'Edit profile'}
                submitHandler={editProfileHandler}
                defaultValues={userData}
              />

              <Button
                className="bg-red-400 hover:bg-red-500"
                title={'Sign out'}
                onClick={signOutHandler}
              />

              <Button
                className="bg-red-800 hover:bg-red-900"
                title={'Remove account'}
                onClick={removeAccountHandler}
              />
            </div>

            <div className="mt-16 w-full">
              <h3 className="font-medium text-gray-900 text-left px-6">Recent chat rooms</h3>

              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                {rooms.map(({ title, description, id }) => (
                  <ProfileRoom key={id} title={title} description={description} id={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
