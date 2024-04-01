import React, { useEffect, useState } from "react";

const UserForm = ({ onSave, defaultUser, onCancel, userToEdit }) => {
  const [formData, setFormData] = useState({
    name: userToEdit ? userToEdit.name : "",
    job: userToEdit ? userToEdit.job : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  useEffect(() => {
    if (defaultUser) {
      setFormData((prev) => ({
        ...prev,
        name: defaultUser.email,
        job: defaultUser.first_name,
      }));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="job" className="form-label">
          Job
        </label>
        <input
          type="text"
          className="form-control"
          id="job"
          name="job"
          value={formData.job}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary me-2">
        {userToEdit ? "Edit User" : "Create User"}
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="btn btn-secondary"
      >
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
