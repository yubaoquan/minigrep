/* globals document */
import { init } from 'snabbdom/build/package/init.js';
import { h } from 'snabbdom/build/package/h.js';
import { styleModule } from 'snabbdom/build/package/modules/style.js';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners.js';
import { movies, addMovie } from './movies.js';

const patch = init([eventListenersModule, styleModule]);

function renderOperations() {
  return h('section.operations', [
    h('span', 'Sort by: '),
    h('button', { on: { click: getSortHandler('rank') } }, 'Rank'),
    h('button', { on: { click: getSortHandler('title') } }, 'Title'),
    h('button', { on: { click: getSortHandler('desc') } }, 'Description'),
    h('button.btn-add', {
      on: {
        click() {
          addMovie();
          render();
        },
      },
    }, 'Add'),
  ]);
}

function getSortHandler(sortBy) {
  return () => {
    console.info(`sort by ${sortBy}`);
    movies.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    render();
  };
}

function renderMovieList() {
  return h('div', [
    h('ul', movies.map((movie, index) => h('li.movie-item', {
      key: movie.title,
      style: {
        opacity: '0',
        delayed: { opacity: '1' },
        remove: {
          opacity: '0',
        },
      },
    }, [
      h('span.rank', movie.rank),
      h('span.title', movie.title),
      h('span.desc', movie.desc),
      h('button.btn-remove', {
        on: {
          click() {
            movies.splice(index, 1);
            render();
          },
        },
      }, 'x'),
    ]))),
  ]);
}

let oldNode = document.querySelector('#app');

function render() {
  const vnode = h('div#container.cls', [
    h('h1.page-title', 'Top 10 Movies'),
    renderOperations(),
    renderMovieList(),
  ]);
  oldNode = patch(oldNode, vnode);
}

render();
