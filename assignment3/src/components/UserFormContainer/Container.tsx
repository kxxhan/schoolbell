import { useEffect, useState } from "react";
import View from "./View";

interface User {
  name: string;
  password: string;
  isUsernameDuplicate: boolean;
}
function Container() {
  const firstUser: User = {
    name: "",
    password: "",
    isUsernameDuplicate: false,
  };
  const [users, setUsers] = useState<User[]>([firstUser]);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleAddUser = (): void => {
    const newUser: User = {
      name: "",
      password: "",
      isUsernameDuplicate: false,
    };
    setUsers([...users, newUser]);
    setIsConfirmed(false);
  };
  const deleteUser = (index: number): void => {
    const newUsers: User[] = users.filter((elem, idx) => idx !== index);
    setUsers(newUsers);
  };

  const changeUsername = (name: string, index: number): void => {
    const newUsers = [...users];
    newUsers[index].name = name;

    // Duplication check
    const nameMap = new Map();
    newUsers.forEach((obj) => {
      const { name } = obj;

      if (nameMap.has(name)) {
        nameMap.get(name).isUsernameDuplicate = true;
        obj.isUsernameDuplicate = true;
      } else if (name !== "") {
        nameMap.set(name, obj);
        obj.isUsernameDuplicate = false;
      }
    });
    setUsers([...newUsers]);
  };

  const changePassword = (pwd: string, index: number): void => {
    const newUsers = [...users];
    newUsers[index].password = pwd;
    setUsers([...newUsers]);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const generatePwd = (pwd: string): string => {
    const visibleLength = Math.ceil(pwd.length / 2);
    const visiblePart = pwd.slice(0, visibleLength);
    const maskedPart = "*".repeat(pwd.length - visibleLength);

    return visiblePart + maskedPart;
  };

  // Check Form is valid
  useEffect(() => {
    for (const elem of users) {
      if (
        elem.name.length < 3 ||
        elem.password.length < 6 ||
        elem.isUsernameDuplicate === true
      ) {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  }, [users]);

  const handleConfirmClick = (): void => {
    setIsConfirmed(true);
  };

  return (
    <View
      users={users}
      isFormValid={isFormValid}
      isConfirmed={isConfirmed}
      handleAddUser={handleAddUser}
      deleteUser={deleteUser}
      changeUsername={changeUsername}
      changePassword={changePassword}
      handleFormSubmit={handleFormSubmit}
      handleConfirmClick={handleConfirmClick}
      generatePwd={generatePwd}
    />
  );
}
export default Container;
