export const encode = (str: string) => {
  const encode = encodeURI(str);
  const base64 = btoa(encode);
  return base64;
};

export const decode = (base64: string) => {
  const decode = atob(base64);
  const str = decodeURI(decode);
  return str;
};
