import Container from "./Container";

// interface User {
//   name: string;
//   password: string;
//   isUsernameDuplicate: boolean;
// }
interface iProps {
  index: number;
  username: string;
  isUsernameDuplicate: boolean;
  changeUsername: (name: string, index: number) => void;
  changePassword: (pwd: string, index: number) => void;
  deleteUser: (index: number) => void;
}

function index(props: iProps) {
  return <Container {...props} />;
}
export default index;
