# react-swipe-ruler
react-swipe-ruler

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]


[npm-image]: http://img.shields.io/npm/v/react-swipe-ruler.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-swipe-ruler
[download-image]: https://img.shields.io/npm/dm/react-swipe-ruler.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-swipe-ruler

## install

[![react-swipe-ruler](https://nodei.co/npm/react-swipe-ruler.png)](https://npmjs.org/package/react-swipe-ruler)

## Usage

```js
var SwipeRuler = require('react-swipe-ruler');
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<SwipeRuler />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>range</td>
          <td>Array</td>
          <td>[0, 10]</td>
          <td>min-value to max-value</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Function(value: Number)</td>
          <td></td>
          <td>called when swipe-ruler is swiped. value is the changed value.</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install
npm start
```

## License

react-swipe-ruler is released under the ISC license.
