// @flow
import * as React from 'react';

type Props = {
    loading: boolean,
    error: boolean,
    data: ?Object,
    renderData: (data: Object) => React.Node,
};

export default function universalDisplay({ loading, error, data, renderData }: Props) {
    if (loading) {
        return <div>Loading..</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }
    if (data) {
        return renderData(data);
    }
    return null;
}