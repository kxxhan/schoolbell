import Container from "./Container";
interface iProps {
  index: number;
  username: string;
  password: string;
  isUsernameDuplicate: boolean;
  changeUsername: (name: string, index: number) => void;
  changePassword: (pwd: string, index: number) => void;
  deleteUser: (index: number) => void;
}

function index(props: iProps) {
  return <Container {...props} />;
}
export default index;
