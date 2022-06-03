import React, { Component } from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        autoFocus
        id={name}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
