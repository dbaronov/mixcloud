// @flow
import React from 'react';
import Name from '../components/name';

type State = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default class NameContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false, data: { name: 'John Smith' } });
        }, 2500);
    }

    render() {
        const { loading, error, data } = this.state;
        return <Name {...{ loading, error, data }} />;
    }
}
