import UserForm from "../UserForm";
import "./index.css";

interface User {
  name: string;
  password: string;
  isUsernameDuplicate: boolean;
}
interface ViewProps {
  users: User[];
  isFormValid: boolean;
  isConfirmed: boolean;
  handleAddUser: () => void;
  deleteUser: (index: number) => void;
  changeUsername: (name: string, index: number) => void;
  changePassword: (pwd: string, index: number) => void;
  handleFormSubmit: (event: React.FormEvent) => void;
  handleConfirmClick: () => void;
  generatePwd: (pwd: string) => string;
}
function View({
  users,
  isFormValid,
  isConfirmed,
  handleAddUser,
  changeUsername,
  changePassword,
  deleteUser,
  handleFormSubmit,
  handleConfirmClick,
  generatePwd,
}: ViewProps) {
  return (
    <div className="container">
      <div className="form-container">
        <form action="" onSubmit={handleFormSubmit}>
          {users.map((user, index) => (
            <UserForm
              key={index}
              index={index}
              username={user.name}
              isUsernameDuplicate={user.isUsernameDuplicate}
              changeUsername={changeUsername}
              changePassword={changePassword}
              deleteUser={deleteUser}
            />
          ))}
          <div className="btn-container">
            <button className="btn-add" onClick={handleAddUser}>
              Add User
            </button>
            <button
              className="btn-confirm"
              onClick={handleConfirmClick}
              disabled={!isFormValid}
            >
              Confirm
            </button>
          </div>
        </form>
        {isConfirmed && (
          <div className="result">
            {users.map((user, index) => (
              <div className="result-container">
                <div className="result-name">
                  Name: <p> {user.name}</p>
                </div>
                <div className="result-pwd">
                  Password: <p> {generatePwd(user.password)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
