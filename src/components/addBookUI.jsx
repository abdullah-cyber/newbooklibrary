import React, { useState } from 'react';
import storeToLocal from '../utils/StoreToLocal'; // ✅ adjust if needed

export const AddBookForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(), // ✅ unique identifier
      firstName,
      lastName,
      title,
      year,
      publisher,
    };

    storeToLocal.addBooks(newBook); // ✅ save to localStorage

    alert('Book saved successfully!');

    // Clear form
    setFirstName('');
    setLastName('');
    setTitle('');
    setYear('');
    setPublisher('');
  };

  return (
    <div className="card shadow-sm p-4 mx-auto mt-4" style={{ maxWidth: '600px' }}>
      <h3 className="text-center mb-3">➕ Add a New Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="secondName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="secondName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title of Book</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Year of Publication</label>
          <input
            type="number"
            className="form-control"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher</label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Save Book</button>
      </form>
    </div>
  );
};
