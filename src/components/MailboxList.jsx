import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.map(mailbox => (
        <div key={mailbox._id} className="mailbox">
          <Link to={`/mailboxes/${mailbox._id}`}>
            <p>Mailbox #{mailbox._id}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MailboxList;