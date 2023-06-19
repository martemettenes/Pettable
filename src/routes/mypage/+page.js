import { getData } from '$lib/utils/sanity';

export const load = (async () => {
    const data = await getData();

    if (data) {
        console.log(data);
        return {
            pets: data
        }
    }

    return {
        status: 500, 
        body: new Error('Internal server error')
    };

});