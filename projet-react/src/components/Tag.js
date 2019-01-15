import React, { Component } from 'react';
import TagElement from './TagElement';
import './Tag.css';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      newTagValue: '',
    };
  }
  onInputChange(e) {
    this.setState({
      newTagValue: e.target.value,
    });
  }
  addTag(e) {
    if (e.key === 'Enter') {
      this.setState({
        tags: [...this.state.tags, this.state.newTagValue],
        newTagValue: '',
      });
    }
  }
  removeTag(tagToRemove) {
    const tags = this.state.tags.filter(tag => tag !== tagToRemove);
    this.setState({ tags });
  }

  render() {
    const tagsElements = this.state.tags.map(tag => (
      <TagElement
        key={tag}
        tag={tag}
        onClick={this.removeTag.bind(this, tag)}
      />
    ));

    return (
      <div className="tag">
        <div className="container-tag">
          <h1>Create your TAGS</h1>
          <div>{tagsElements}</div>
          <input
            type="text"
            onChange={this.onInputChange.bind(this)}
            onKeyPress={this.addTag.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Tag;
