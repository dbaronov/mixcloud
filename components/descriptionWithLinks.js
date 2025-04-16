// @flow
import * as React from 'react';

export default class DescriptionWithLinks extends React.Component {
    render() {
        const { description } = this.props;
        return <div>{description}</div>;
    }
}

DescriptionWithLinks.defaultProps = {
    links: []
};
