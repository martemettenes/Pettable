import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity'


const builder = imageUrlBuilder(client);

// @ts-ignore
export function urlFor(source) {
    return builder.image(source);
}