//@ts-nocheck
import { Button, Input, InputNumber, Select, DatePicker, Checkbox } from "antd";
import useForm from "../hook/useForm";
import Summary from "./Summary";

const Form = () => {
  const { TextArea } = Input;
  const options = [
    "c++",
    "Java",
    "css",
    "HTML",
    "Python",
    "javascript",
    "Excel",
    "Figma",
  ];
  const {
    values,
    handleChange,
    onSubmit,
    contextHolder,
    experience,
    handleChangeExperience,
    position,
    handlePosition,
    handleSkills,
    handleDateandTime,
    isModalOpen,
    data,
    onClose,
  } = useForm();

  return (
    <>
      {contextHolder}
      <form
        onSubmit={onSubmit}
        action=""
        className="max-w-[500px] mx-auto mt-10 shadow-lg p-2 space-y-3 bg-slate-100 rounded-md"
      >
        <h1 className="text-xl text-center font-bold">Level 2 Form</h1>
        <Input
          placeholder="Enter your Name..."
          value={values.Name}
          onChange={handleChange}
          name="Name"
        />
        <Input
          placeholder="Enter your Email..."
          value={values.email}
          onChange={handleChange}
          name="Email"
        />
        <div className="flex gap-2">
          <p>Phone Number:</p>
          <Input
            placeholder="Enter your phone number..."
            value={values.Number}
            onChange={handleChange}
            name="Number"
          />
        </div>

        <div className="flex gap-2">
          <p>Position:</p>
          <Select
            value={position}
            onChange={handlePosition}
            style={{ width: 130 }}
            options={[
              { value: "Developer", label: "Developer" },
              { value: "Designer", label: "Designer" },
              { value: "Manager", label: "Manager" },
            ]}
          />
        </div>
        {(position === "Developer" || position === "Designer") && (
          <div className="flex gap-2">
            <p>Experience:</p>
            <InputNumber
              min={0}
              max={100}
              value={experience}
              name="Experience"
              onChange={handleChangeExperience}
            />
          </div>
        )}

        {position === "Designer" && (
          <Input
            placeholder="Give your Portfolio URL"
            onChange={handleChange}
            name="URL"
            value={values.url}
          />
        )}
        {position === "Manager" && (
          <TextArea
            placeholder="Explain your management experience"
            autoSize={{ minRows: 4, maxRows: 8 }}
            onChange={handleChange}
            name="Explanation"
            value={values.Explanation}
          />
        )}
        <div>
          <p>Additional Skills:</p>
          <Checkbox.Group
            options={options}
            defaultValue={[]}
            onChange={handleSkills}
          />
        </div>

        <div className="flex gap-2">
          <p>Preferred Interview Date and Time:</p>
          <DatePicker showTime onChange={handleDateandTime} />
        </div>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
      <Summary isOpen={isModalOpen} data={data} onClose={onClose} />
    </>
  );
};

export default Form;
