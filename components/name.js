// @flow
import * as React from 'react';
import UniversalDisplay from './universalDisplay';

export default function Name({ loading, error, data }) {
    return (
        <UniversalDisplay
            loading={loading}
            error={error}
            data={data}
            renderData={(data) => <h2>{data.name}</h2>}
        />
    );
}
