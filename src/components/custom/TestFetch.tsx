import { TEST_URL } from '@/api/api';
import { useFetch } from '@/hooks/use-fetch';
import React from 'react'

const TestFetch: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, loading, error } = useFetch<any>(`${TEST_URL}/notification`);

    if (loading) {
        return <>
            <div className="text-center text-lg">
                <span>Loading...</span>
            </div>;
        </>

    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Fetched Data</h1>
            <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default TestFetch
