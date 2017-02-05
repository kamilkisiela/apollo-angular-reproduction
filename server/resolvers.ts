const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
];

const resolveFunctions = {
  Query: {
    posts() {
      return posts;
    },
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = posts.find(({id}) => id === postId);
      
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;

      return post;
    },
  },
  Author: {
    posts(author) {
      return posts.filter(({authorId}) => authorId === author.id);
    },
  },
  Post: {
    author(post) {
      return authors.find(({id}) => id === post.authorId);
    },
  },
};

export default resolveFunctions;