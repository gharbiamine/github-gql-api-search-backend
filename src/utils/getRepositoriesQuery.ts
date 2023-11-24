export const getRepositoriesQuery: string = `
query getRepositoriesQuery($limit: Int!, $username: String!) {
  user(login: $username) {
    login
    email
    avatarUrl
    bio
    url
    following{
        totalCount
    }
    followers{
        totalCount
    }
    repositories(
      first: $limit
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          primaryLanguage{
            name
          }
          updatedAt
        }
      }
    }
  }
}`;
