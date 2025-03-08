import { getPosts } from './data';

export async function countTotalPages() {
  const firstPageData = await getPosts(null);
  let cursor = firstPageData.publication.posts.pageInfo.endCursor;
  let pageCount = 1;
  let hasMorePages = firstPageData.publication.posts.pageInfo.hasNextPage;

  while (hasMorePages && pageCount < 15) {
    const nextPageData = await getPosts(cursor);
    if (nextPageData.publication.posts.pageInfo.hasNextPage) {
      cursor = nextPageData.publication.posts.pageInfo.endCursor;
      hasMorePages = true;
      pageCount++;
    } else {
      hasMorePages = false;
      pageCount++;
    }
  }

  return pageCount;
}

export function getNavigationUrls(currentPage, hasNextPage) {
  const prevPageUrl = currentPage > 1 
    ? (currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`) 
    : null;
  const nextPageUrl = hasNextPage ? `/blog/${currentPage + 1}` : null;

  return { prevPageUrl, nextPageUrl };
}