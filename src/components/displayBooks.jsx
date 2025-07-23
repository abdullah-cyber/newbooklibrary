import React, { useEffect, useState } from 'react';
import storeToLocal from '../utils/StoreToLocal';

export const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  // Load books from local storage
  useEffect(() => {
    const savedBooks = storeToLocal.getBooks();
    setBooks(savedBooks);
  }, []);

  // Delete handler
  const handleDelete = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    storeToLocal.removeBooks(id);
  };

  // View handler
  const handleView = (book) => {
    setSelectedBook(book);
    setIsEditing(false);
  };

  // Begin editing
  const handleEdit = () => {
    setEditForm({ ...selectedBook });
    setIsEditing(true);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  // Save edited book
  const handleSaveEdit = () => {
    storeToLocal.updateBook(editForm);
    const updatedBooks = books.map(book =>
      book.id === editForm.id ? editForm : book
    );
    setBooks(updatedBooks);
    setSelectedBook(editForm);
    setIsEditing(false);
    alert('Book updated!');
  };

  // Close modal
  const closeModal = () => {
    setSelectedBook(null);
    setIsEditing(false);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">📚 My Library</h3>

      {books.length === 0 ? (
        <div className="alert alert-info text-center">No books found. Please add one.</div>
      ) : (
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Details</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td><strong>{book.firstName}</strong></td>
                <td>{book.lastName}</td>
                <td>
                  <button className="btn btn-sm btn-success" onClick={() => handleView(book)}>
                    View
                  </button>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ Modal */}
      {selectedBook && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">{isEditing ? '✏️ Edit Book' : '📖 Book Details'}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>

              <div className="modal-body">
                {isEditing ? (
                  <>
                    <div className="mb-2">
                      <label>First Name</label>
                      <input type="text" name="firstName" className="form-control" value={editForm.firstName} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                      <label>Last Name</label>
                      <input type="text" name="lastName" className="form-control" value={editForm.lastName} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                      <label>Title</label>
                      <input type="text" name="title" className="form-control" value={editForm.title} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                      <label>Year</label>
                      <input type="number" name="year" className="form-control" value={editForm.year} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                      <label>Publisher</label>
                      <input type="text" name="publisher" className="form-control" value={editForm.publisher} onChange={handleChange} />
                    </div>
                  </>
                ) : (
                  <>
                    <p><strong>Author's Name:</strong> {selectedBook.firstName} {selectedBook.lastName}</p>
                    <p><strong>Title:</strong> {selectedBook.title}</p>
                    <p><strong>Year:</strong> {selectedBook.year}</p>
                    <p><strong>Publisher:</strong> {selectedBook.publisher}</p>
                  </>
                )}
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>Close</button>
                {isEditing ? (
                  <button className="btn btn-primary" onClick={handleSaveEdit}>Save</button>
                ) : (
                  <button className="btn btn-success" onClick={handleEdit}>Edit</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {selectedBook && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};
