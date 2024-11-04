import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const initialState = [
  { _id: 1, name: 'Jake Brown', size: 'Large' },
  { _id: 2, name: 'John Connor', size: 'Medium' }
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Page Not Found!</h2>} />
      </Routes>
    </>
  );
};

export default App;