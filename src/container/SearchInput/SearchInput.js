import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchValue } from "../../components/ReduxStore/actions";
import SearchInputView from "../../components/SearchInputView";

class SearchInput extends Component {
  state = {
    inputValue: "",
    searchTypeTitle: true
  };

  inputValueOnChange = e => {
    this.setState({
      inputValue: e.target.value
    });
    this.props.searchValue(this.state);
  };

  searchOnChange = e => {
    this.setState({
      searchTypeTitle: JSON.parse(e.target.value)
    });
  };

  render() {
    return (
      <SearchInputView
        searchOnChange={this.searchOnChange}
        inputValueOnChange={this.inputValueOnChange}
        inputValue={this.state.inputValue}
      />
    );
  }
}

const mapDispatchToProps = {
  searchValue
};

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
