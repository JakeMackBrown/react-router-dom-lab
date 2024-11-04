import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addMailbox }) => {
  const [formData, setFormData] = useState({ name: '', size: 'Small' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMailbox(formData);
    setFormData({ name: '', size: 'Small' });
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Size:
        <select name="size" value={formData.size} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm;