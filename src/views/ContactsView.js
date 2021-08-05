import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactEditor from '../components/ContactEditor';
import ContactList from '../components/ContactList';
import Finder from '../components/Finder';
import { contactOperations, contactSelectors } from '../store/constact';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <>
        <h1 className="hedders">Phonebook </h1>
        <ContactEditor />
        <div className="ContactList">
          <h2 className="ml">Contacts</h2>
          <Finder />
          {this.props.isLoadingContacts && <h1>...Loading</h1>}
          <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
