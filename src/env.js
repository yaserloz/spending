const env = () => {
  if ( process.env.NODE_ENV === 'development' ) {
    return 'https://dev-api.yaz-fr.com/';
  }else {
    return 'https://yasiralqaisi.great-site.net/';
  }
  return '';
};
export default env;
