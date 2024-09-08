import "./App.scss";
import { useState } from "react";
import { ButtonWithLabel } from "./components/buttonWithLabel";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import { TabTypes } from "./types";
import { useUsers } from "./hooks/useUsers";
import { Button } from "./components/button";
import { MemberCards } from "./components/memberCards";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabTypes>(TabTypes.USERS);

  const { users, loadUsers, addUser } = useUsers();

  return (
    <div className="App">
      <Tabs>
        <Button onClick={() => setActiveTab(TabTypes.FORM)}>form</Button>
        <Button onClick={() => setActiveTab(TabTypes.USERS)}>users</Button>
      </Tabs>

      {activeTab === TabTypes.USERS && (
        <>
          <MemberCards items={users} />
          <ButtonWithLabel onClick={loadUsers}>more users</ButtonWithLabel>
        </>
      )}

      {activeTab === TabTypes.FORM && <Form onSubmit={addUser} />}
    </div>
  );
}
