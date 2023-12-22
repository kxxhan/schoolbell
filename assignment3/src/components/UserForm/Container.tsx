import { ChangeEvent, useEffect, useState } from "react";
import View from "./View";

interface ContainerProps {
  index: number;
  username: string;
  password: string;
  isUsernameDuplicate: boolean;
  changeUsername: (name: string, index: number) => void;
  changePassword: (pwd: string, index: number) => void;
  deleteUser: (index: number) => void;
}

function Container({
  index,
  username,
  password,
  isUsernameDuplicate,
  changeUsername,
  changePassword,
  deleteUser,
}: ContainerProps) {
  const handleClickDelete = (): void => {
    deleteUser(index);
  };

  const handleNameInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    changeUsername(event.target.value, index);
  };

  const handlePwdInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    changePassword(event.target.value, index);
  };

  return (
    <View
      index={index}
      username={username}
      password={password}
      isUsernameDuplicate={isUsernameDuplicate}
      handleClickDelete={handleClickDelete}
      handleNameInputChange={handleNameInputChange}
      handlePwdInputChange={handlePwdInputChange}
    />
  );
}
export default Container;
