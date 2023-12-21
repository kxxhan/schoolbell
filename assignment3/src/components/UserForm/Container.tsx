import { ChangeEvent, useEffect, useState } from "react";
import View from "./View";

interface ContainerProps {
  index: number;
  username: string;
  isUsernameDuplicate: boolean;
  changeUsername: (name: string, index: number) => void;
  changePassword: (pwd: string, index: number) => void;
  deleteUser: (index: number) => void;
}

function Container({
  index,
  username,
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
    // if (event.target.value.length > 2)
    changeUsername(event.target.value, index);
  };

  const handlePwdInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length > 5)
      changePassword(event.target.value, index);
  };

  useEffect(() => {
    console.log(1111);
  }, [isUsernameDuplicate]);

  return (
    <View
      index={index}
      username={username}
      isUsernameDuplicate={isUsernameDuplicate}
      handleClickDelete={handleClickDelete}
      handleNameInputChange={handleNameInputChange}
      handlePwdInputChange={handlePwdInputChange}
    />
  );
}
export default Container;
