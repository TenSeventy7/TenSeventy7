import { gql } from "graphql-request";
import { getClient } from "@site/lib/graphQLClient";

const blogDataApi = "blog.tenseventyseven.xyz";
const postsPerPage = 6;

export const getPosts = async (cursor) => {
    const client = getClient();
    console.log("Using cursor:", cursor); // Add this for debugging
    
    const allPosts = await client.request(
        gql`
        query allPosts($cursor: String) {
            publication(host: "${blogDataApi}") {
            title
            posts(first: ${postsPerPage}, after: $cursor) {
                pageInfo{
                hasNextPage
                endCursor
                }
                edges {
                node {
                    author{
                    name
                    profilePicture
                    }
                    title
                    subtitle
                    brief
                    slug
                    coverImage {
                    url
                    }
                    tags {
                    name
                    slug
                    }
                    publishedAt
                    readTimeInMinutes
                }
                }
            }
            }
        }
        `,
        { cursor: cursor }
    );
    
    console.log("Page info:", allPosts.publication.posts.pageInfo); // Debugging
    return allPosts;
};

export const getAllPosts = async () => {
    const client = getClient();
    const allPosts = await client.request(
    gql`
        query allPosts {
        publication(host: "${blogDataApi}") {
            title
            posts(first: 20) {
            pageInfo{
                hasNextPage
                endCursor
            }
            edges {
                node {
                author{
                    name
                    profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                    url
                }
                tags {
                    name
                    slug
                }
                publishedAt
                readTimeInMinutes
                }
            }
            }
        }
        }
    `
    );

    return allPosts;
};

export const getPost = async (slug) => {
    const client = getClient();
    const data = await client.request(
        gql`
        query postDetails($slug: String!) {
            publication(host: "${blogDataApi}") {
            post(slug: $slug) {
                author{
                name
                profilePicture
                }
                publishedAt
                title
                subtitle
                readTimeInMinutes
                content{
                html
                }
                tags {
                name
                slug
                }
                coverImage {
                url
                }
            }
            }
        }
        `,
        { slug: slug }
    );

    return data.publication.post;
};