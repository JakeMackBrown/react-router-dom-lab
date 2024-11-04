import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <div>
      <h2>{selectedBox.name}</h2>
      <p>Box Number: {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.name}</p>
      <p>Size: {selectedBox.size}</p>
    </div>
  );
};

export default MailboxDetails;