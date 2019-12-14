class Storage {
  getObject(key: string) {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  setObject(key: string, value: object | any[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export const storage = new Storage();
