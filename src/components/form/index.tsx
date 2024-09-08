import React, { useState, FormEvent, ChangeEvent } from "react";
import "./style.scss";
import { UserMainData } from "../../types";

interface FormProps {
  onSubmit: (user: any) => void; // Принимаем функцию для обновления состояния верхнего компонента
}

const initialForm: UserMainData = {
  username: "",
  phone: "",
  website: "",
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserMainData>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData);
    setFormData(initialForm);
  };

  const onFormChange =
    (field: keyof UserMainData) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, ...{ [field]: event.target.value } });
    };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          Username:
          <input
            type="text"
            value={formData["username"]}
            onChange={onFormChange("username")}
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="text"
            value={formData["phone"]}
            onChange={onFormChange("phone")}
          />
        </label>
      </div>
      <div>
        <label>
          Website:
          <input
            type="email"
            value={formData["website"]}
            onChange={onFormChange("website")}
          />
        </label>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
