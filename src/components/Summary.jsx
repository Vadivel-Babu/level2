import React from "react";
import { Modal } from "antd";

const Summary = ({ isOpen, data, onClose }) => {
  return (
    <Modal title="Summary" open={isOpen} onCancel={onClose}>
      <p>Name: {data.Name}</p>
      <p>Email: {data.Email}</p>
      <p>mobile: {data.Number}</p>
      <p>Position: {data.position}</p>
      <p>Experience: {data.experience}</p>
      {data.position === "Designer" ? (
        <div className="flex gap-2">
          <p>Portfolio link:</p>
          <a href={data.URL} target="blank">
            click here
          </a>
        </div>
      ) : (
        ""
      )}
      {data.Explanation ? <p>Explanation: {data.Explanation}</p> : ""}

      {data.skills && (
        <ul>
          Additional Skills:{" "}
          {data.skills.map((skill, i) => (
            <li key={skill}>
              {i + 1}. {skill}
            </li>
          ))}
        </ul>
      )}
      {data.date && (
        <div>
          <p>Date: {data.date.split(" ")[0]}</p>
          <p>Time: {data.date.split(" ")[1]}</p>
        </div>
      )}
    </Modal>
  );
};

export default Summary;
