import { create } from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware';
import type { FetchState } from '@/interface/interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFetchStore = create<FetchState<any>>()(
    devtools((set) => ({
        data: null,
        loading: false,
        error: null,

        fetchData: async (url: string) => {
            set({ loading: true, error: null });

            try {
                const response = await axios.get(url);
                set({ data: response.data });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
                set({ error: errorMessage });
                console.error("Fetch Error: ", errorMessage)
            } finally {
                set({ loading: false });
            }
        },
    }))
);