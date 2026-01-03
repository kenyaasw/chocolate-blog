import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: "2026-01-03",
    dataset: "production",
    projectId: "mb1na5pm",
    useCdn: false,
});
