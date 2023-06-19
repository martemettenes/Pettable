import {createClient} from '@sanity/client';

export const client = createClient({
    projectId: '9g8006q8',
    dataset: 'production',
    apiVersion: '2023-05-31',
    useCdn: false
});

export async function getData() {
    return await client.fetch(`*[_type == "pet"] | order(name)`);
}

// @ts-ignore
export async function getPet(slug) {
    return await client.fetch(`*[_type == "pet" && slug.current == $slug][0]`, {
        slug
    });
}