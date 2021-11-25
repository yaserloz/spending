const env = () => {
  if ( process.env.NODE_ENV === 'development' ) {
    return 'https://yaz-fr.com/api.yaz-fr.com/';
  }else {
    return 'https://api.yaz-fr.com/';
  }
  return '';
};
export default env;
