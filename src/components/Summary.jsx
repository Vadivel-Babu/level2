import React from "react";
import { Modal } from "antd";

const Summary = ({ isOpen, data, onClose }) => {
  return (
    <Modal title="Summary" open={isOpen} onCancel={onClose}>
      <p>
        Name: <span className="font-bold">{data.Name}</span>{" "}
      </p>
      <p>
        Email: <span className="font-bold">{data.Email}</span>{" "}
      </p>
      <p>
        mobile: <span className="font-bold">{data.Number}</span>{" "}
      </p>
      <p>
        Position: <span className="font-bold">{data.position}</span>{" "}
      </p>
      <p>
        Experience: <span className="font-bold">{data.experience}</span>{" "}
      </p>
      {data.position === "Designer" ? (
        <div className="flex gap-2">
          <p>Portfolio link:</p>
          <a href={data.URL} className="font-bold" target="blank">
            click here
          </a>
        </div>
      ) : (
        ""
      )}
      {data.Explanation ? (
        <p>
          Explanation: <span className="font-bold">{data.Explanation}</span>{" "}
        </p>
      ) : (
        ""
      )}

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
          <p>
            Date: <span className="font-bold">{data.date.split(" ")[0]}</span>{" "}
          </p>
          <p>
            Time: <span className="font-bold">{data.date.split(" ")[1]}</span>{" "}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default Summary;
