import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import { contactAction, contactSelectors } from '../../store/constact';

const Finder = ({ value, onChange }) => (
  <Col md="8" className="ml">
    <Form.Label
      label="Name"
      className="mb-3"
      htmlFor="inlineFormInputGroup"
      visuallyHidden
    >
      Username filter
    </Form.Label>
    <InputGroup className="mb-2">
      <InputGroup.Text>Filter by name</InputGroup.Text>
      <FormControl
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Name"
      />
    </InputGroup>
  </Col>
);

Finder.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
