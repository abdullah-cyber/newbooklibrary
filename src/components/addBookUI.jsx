import React, { useState } from 'react';
import storeToLocal from '../utils/StoreToLocal';

export const AddBookForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      firstName,
      lastName,
      title,
      year,
      publisher,
    };

    storeToLocal.addBooks(newBook);

    alert('Book saved successfully!');

    setFirstName('');
    setLastName('');
    setTitle('');
    setYear('');
    setPublisher('');
  };

  return (
    <div className="form-container">
      <h2 className="form-header">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Title of Book:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Year of Publication:</label>
          <input value={year} type = "number" onChange={(e) => setYear(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Publisher:</label>
          <input value={publisher} onChange={(e) => setPublisher(e.target.value)} required />
        </div>

        <button type="submit" className="submit-btn">Save Book</button>
      </form>
    </div>
  );
};
