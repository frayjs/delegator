fray.delegator
==============

DOM event delegator

Usage
-----

[live example](http://plnkr.co/edit/v7TyRi?p=preview)

```html
<ul id="list">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```

```js
var delegate = delegator(document.getElementById('list'));

delegate('click', 'li', function (event) {
  console.log(event.target.innerHTML + ' clicked');
});
```

Install
-------

    npm install fray.delegator

Contributing
------------

PRs are welcome!

    git clone https://github.com/frayjs/delegator
    cd delegator
    npm install
    npm test

References
----------

  * <https://davidwalsh.name/event-delegate>

License
-------

MIT
