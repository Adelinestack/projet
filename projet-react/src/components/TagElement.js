import React, { Component } from 'react';

const TagElement = props => <div onClick={props.onClick}>{props.tag}</div>;

export default TagElement;
