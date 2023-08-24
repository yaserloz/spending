const env = () => {
  if ( process.env.NODE_ENV === 'development' ) {
    return 'https://dev-api.yaz-fr.com/';
  }else {
    return 'http://yasiralqaisi.great-site.net/';
  }
  return '';
};
export default env;
