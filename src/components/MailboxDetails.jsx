import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { id } = useParams();
  const mailbox = mailboxes.find(m => m._id === Number(id));

  if (!mailbox) return <h2>Mailbox Not Found!</h2>;

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox._id}</p>
      <p>Boxholder: {mailbox.name}</p>
      <p>Size: {mailbox.size}</p>
    </div>
  );
};

export default MailboxDetails;