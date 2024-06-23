import * as EmailValidator from "email-validator";
import isUrl from "is-url";
import { useState } from "react";
import validator from "validator";
import { message } from "antd";
const useForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [values, setValues] = useState({});
  const [experience, setExperience] = useState(0);
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [skills, setSkills] = useState([]);
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeExperience = (value) => {
    setExperience(value);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handlePosition = (value) => {
    setPosition(value);
  };

  const handleSkills = (checkedValues) => {
    setSkills(checkedValues);
  };

  const handleDateandTime = (_, dateString) => {
    setDate(dateString);
  };

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  console.log(values);
  function onSubmit(e) {
    e.preventDefault();
    if (values.Name === undefined || values.Name.trim().length === 0) {
      messageApi.error("Enter a valid Name");
      return;
    }
    if (!EmailValidator.validate(values.Email)) {
      messageApi.error("Enter a valid Email");
      return;
    }
    if (!validator.isMobilePhone(values.Number)) {
      messageApi.error("Enter a valid phone number");
      return;
    }
    if (position.length === 0) {
      messageApi.error("pls select the position you are applying for");
      return;
    }
    if (position === "Designer" && !isUrl(values.URL)) {
      messageApi.error("Enter a valid url");
      return;
    }
    if (
      position === "Manager" &&
      (values.Explanation === undefined ||
        values.Explanation.trim().length === 0)
    ) {
      messageApi.error("Pls give an explanation about your manager experience");
      return;
    }
    if (skills.length === 0) {
      messageApi.error("select atleast one skill");
      return;
    }
    if (date.length === 0 || date.split(" ")[1].split(":")[0] === "00") {
      messageApi.error("Give a valid date and time");
      return;
    }
    const data = {
      ...values,
      position,
      experience,
      skills,
      date,
    };
    setData(data);
    setIsModalOpen(true);
    setValues({});
    setPosition("");
    setDate("");
    setSkills([]);
  }
  console.log(isModalOpen);
  return {
    handleChange,
    values,
    onSubmit,
    contextHolder,
    handleChangeExperience,
    experience,
    handlePosition,
    position,
    handleSkills,
    handleDateandTime,
    data,
    isModalOpen,
    onClose,
  };
};

export default useForm;
