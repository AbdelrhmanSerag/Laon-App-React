import { useState } from "react";
import "../formStyle.css";
import Modal from "./Modal";

export default function LaonForm() {
  const [form, setForm] = useState({
    client: "",
    phone: 0,
    age: 0,
    employee: false,
    salary: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");

  const isDisable =
    form.age === 0 ||
    form.phone === 0 ||
    form.client === "" ||
    form.employee === false ||
    form.salary === "";

  const classBtn = isDisable ? { backgroundColor: "gray" } : {};

  function EditModal(form) {
    if (form.age > 50 || form.age < 20) {
      setMsg("The Age is not Allowed");
      setColor("red");
    } else if (form.phone.length < 11 || form.phone.length > 11) {
      setMsg("The Phone Number is Not Correct");
      setColor("red");
    } else {
      setMsg("The Form Has Been Submitted Success");
      setColor("green");
    }
  }
  function HandelDivClick() {
    if (showModal === true) {
      setShowModal(false);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    EditModal(form);
    setShowModal(true);
  }

  return (
    <div className="flex" onClick={HandelDivClick}>
      <form id="loan-form" onSubmit={submitHandler}>
        <h1>Requesting a Loan</h1>

        <hr />
        <label>
          Name: <br />
          <input
            value={form.client}
            onChange={(e) => {
              setForm({ ...form, client: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Phone Number: <br />
          <input
            type="number"
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: Number(e.target.value) });
            }}
          />
        </label>
        <br />
        <label>
          Age: <br />
          <input
            type="number"
            value={form.age}
            onChange={(e) => {
              setForm({ ...form, age: Number(e.target.value) });
            }}
          />
        </label>
        <br />
        <label>
          Are You Employee?
          <input
            type="checkbox"
            checked={form.employee}
            onChange={(e) => {
              setForm({ ...form, employee: e.target.checked });
            }}
          />
        </label>
        <br />
        <label>
          Salary: <br />
          <select
            style={{
              color: "black",
            }}
            value={form.salary}
            onChange={(e) => {
              console.log(e.target.value);
              setForm({ ...form, salary: e.target.value });
            }}
          >
            <option>what's your salary</option>
            <option value="Less Than 500$">Less Than 500$</option>
            <option value="more Than 500$">more Than 500$</option>
          </select>
        </label>
        <br />
        <button id="submit-btn" disabled={isDisable} style={classBtn}>
          Submit
        </button>
      </form>
      <Modal msg={msg} color={color} isVisible={showModal} />
    </div>
  );
}
