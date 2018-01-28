import test from 'ava';

import { searchUsers, fetchImages } from './';

test('searchUsers returns a function', (t) => {
  t.is(typeof searchUsers(Function.prototype, 'api.io'), 'function');
});

test('searchUsers call the endpoint', (t) => {
  const baseUrl = 'api.io?q=';
  const client = {
    get(url) {
      t.is(url, `${baseUrl}mrbabbs`);
    },
  };

  searchUsers(client, baseUrl)('mrbabbs');
});

test('fetchImages returns a function', (t) => {
  t.is(typeof fetchImages(Function.prototype), 'function');
});

test('fetchImages downloads images for caching', (t) => {
  const images = ['img1.url', 'img2.url'];
  t.plan(images.length);
  const client = {
    get(url) {
      t.is(images.includes(url), true);
    },
  };

  fetchImages(client)(images);
});

test('fetchImages resolves on success', (t) => {
  const images = ['img1.url', 'img2.url'];
  const client = {
    get() {
      Promise.resolve();
    },
  };

  return fetchImages(client)(images)
    .then(values => t.is(values.length, images.length));
});

test('fetchImages rejects on fail fetching', (t) => {
  const images = ['img1.url', 'img2.url'];
  const error = new Error();
  const client = {
    get() {
      return Promise.reject(error);
    },
  };

  return fetchImages(client)(images)
    .catch(err => t.is(err, error));
});
