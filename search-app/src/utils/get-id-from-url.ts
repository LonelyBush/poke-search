function getIdFromURL(url: string) {
  return url.split('/')[url.split('/').length - 2];
}

export default getIdFromURL;
