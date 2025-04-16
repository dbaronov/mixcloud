// @flow
import React, { useState, useEffect } from 'react';
import City from '../components/city';

export default function CityContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<?Error>(null);
    const [data, setData] = useState<?Object>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setData({ city: 'London, UK' });
        }, 2000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once

    return <City loading={loading} error={error} data={data} />;
}
