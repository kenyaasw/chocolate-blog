export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title of Blog Article",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug of Blog Article",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "thumbnailImage",
            title: "Thumbnail Image of Blog Article",
            type: "image",
            // options: {
            //     hotspot: true,
            // },
        },
        {
            name: "smallDescription",
            title: "Small Description of Blog Article",
            type: "text",
        },
        {
            name: "content",
            title: "Content of Blog Article",
            type: "array",
            of: [{ type: "block" }],
        },

        // {
        //     name: "author",
        //     title: "Author",
        //     type: "reference",
        //     to: [{ type: "author" }],
        // },
        // {
        //     name: "categories",
        //     title: "Categories",
        //     type: "array",
        //     of: [{ type: "reference", to: [{ type: "category" }] }],
        // },
        // {
        //     name: "body",
        //     title: "Body",
        //     type: "blockContent",
        // },
    ],
}