const keyword = 'recent_search';

const storage = {
  get: () => {
    const item = localStorage.getItem(keyword);
    if (item) {
      return JSON.parse(item);
    }
    return false;
  },

  set: (value) => {
    localStorage.clear();
    const stringifiedToken = JSON.stringify(value);
    return localStorage.setItem(keyword, stringifiedToken);
  },

  clear: () => localStorage.clear(),
};

export default storage;
