import { ChangeEvent } from "react";
import "./index.css";

interface ViewProps {
  index: number;
  username: string;
  password: string;
  isUsernameDuplicate: boolean;
  handleClickDelete: () => void;
  handleNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePwdInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
function View({
  index,
  username,
  password,
  isUsernameDuplicate,
  handleClickDelete,
  handleNameInputChange,
  handlePwdInputChange,
}: ViewProps) {
  return (
    <div className="userform">
      <div className="userform-container">
        <div className="userform-container-header">
          <h3>User - {index}</h3>
          <button onClick={handleClickDelete}>x</button>
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              value={username}
              className="username"
              name="username"
              minLength={3}
              onChange={handleNameInputChange}
            />
            <p className="name-input-alert">
              Name must be at least 3 characters long.
            </p>
            {isUsernameDuplicate && (
              <p className="name-duplicate-alert">
                The name '{username}' is duplicated.
              </p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              className="password"
              name="password"
              minLength={6}
              placeholder=""
              onChange={handlePwdInputChange}
            />
            <p className="pwd-require-alert">Password is required.</p>
            <p className="pwd-input-alert">
              Password must be at least 6 characters long.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default View;
