import React, { Component } from 'react';

class ContactList extends Component {
  handleDelete = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul className="List">
        {contacts.map(contact => (
          <li className="List-contact" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="Button"
              onClick={() => this.handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
