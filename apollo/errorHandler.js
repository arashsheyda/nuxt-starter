export default ({ graphQLErrors, networkError, operation, forward }, nuxtContext) => {
  // eslint-disable-next-line no-console
  console.log('Global error handler');
  // eslint-disable-next-line no-console
  console.log(graphQLErrors, networkError, operation, forward);
  // console.log(nuxtContext);
};
