import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { contactOperations, contactSelectors } from '../../store/constact';

export default function ContactList() {
  const contacts = useSelector(contactSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className="contact">
              {name}:{number}
            </p>
            <Button
              type="button"
              onClick={() => dispatch(contactOperations.deleteContact(id))}
            >
              Удалить
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

// const mapStateToProps = state => ({
//   contacts: contactSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
