import { useFetchStore } from '@/stores/useFetch.store';
import { useEffect, useCallback } from 'react';

export const useFetch = <T,>(url: string) => {
    const { data, loading, error, fetchData } = useFetchStore();

    const stableFetchData = useCallback(() => fetchData(url), [url]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if (data) return;

        const fetchDataWithSignal = async () => {
            try {
                await stableFetchData();
            } catch (err) {
                if (signal.aborted) {
                    console.log('Request was aborted');
                }
                console.log(err);
            }
        };
        fetchDataWithSignal();      

        return () => {
            controller.abort();
        };
    }, [stableFetchData, data]);

    return { data: data as T | null, loading, error };
};