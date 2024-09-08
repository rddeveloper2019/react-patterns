import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import { useEffect, useState } from "react";
import { UserProps } from "./components/memberCard/types";
import { ButtonWithLabel } from "./components/buttonWithLabel";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [moreUsers, setMoreUsers] = useState<User[]>([]);
  const [addedUser, setAddedUser] = useState<User | null>(null);
  const [tabForm, setTabForm] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);

  const onButtonClick = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setMoreUsers(res));
  };

  const handleUserAddition = (user: User) => {
    setAddedUser(user);
  };

  return (
    <div className="App">
      <Tabs onChange={setTabForm} />
      {!tabForm && users.map((user) => <MemberCard user={user} />)}
      {!tabForm && moreUsers.map((user) => <MemberCard user={user} />)}
      {!tabForm && (
        <ButtonWithLabel onClick={onButtonClick}>more users</ButtonWithLabel>
      )}
      {tabForm && <Form onUserAddition={handleUserAddition} />}
      {addedUser && <MemberCard user={addedUser} />}
    </div>
  );
}
