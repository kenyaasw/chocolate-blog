import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
    apiVersion: "2026-01-03",
    dataset: "production",
    projectId: "mb1na5pm",
    useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}