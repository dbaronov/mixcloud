// @flow
import React, { useState, useEffect } from 'react';
import Name from '../components/name';

export default function NameContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<?Error>(null);
    const [data, setData] = useState<?Object>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setData({ name: 'John Smith' });
        }, 2500);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once

    return <Name loading={loading} error={error} data={data} />;
}
