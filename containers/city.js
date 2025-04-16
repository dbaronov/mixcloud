// @flow
import React from 'react';
import City from '../components/city';

type State = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default class CityContainer extends React.Component<{}, State> {
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
            this.setState({ loading: false, data: { city: 'London, UK' } });
        }, 2000);
    }

    render() {
        const { loading, error, data } = this.state;
        return <City {...{ loading, error, data }} />;
    }
}
