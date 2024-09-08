import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import { useState } from "react";
import { ButtonWithLabel } from "./components/buttonWithLabel";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import { TabTypes, User } from "./types";
import { useUsers } from "./hooks/useUsers";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabTypes>(TabTypes.USERS);

  const { users, loadUsers, addUser } = useUsers();

  const UsersList = () => (
    <>
      {users.map((user, idx) => (
        <MemberCard user={user} key={user.id} />
      ))}
    </>
  );

  return (
    <div className="App">
      <Tabs onTabSelect={setActiveTab} />
      {activeTab === TabTypes.USERS && (
        <>
          <UsersList />
          <ButtonWithLabel onClick={loadUsers}>more users</ButtonWithLabel>
        </>
      )}

      {activeTab === TabTypes.FORM && <Form onSubmit={addUser} />}
    </div>
  );
}
