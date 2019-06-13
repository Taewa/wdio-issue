# \<e2e\>

## The problem is... :
This is repo is for testing with Polymer2 with WebDriverIo v4 (wdio).
The test fails because the `form` in `<child-component></child-component>` has style as `position: absolute;`.

Because of that its parent, `<child-component>`'s `height` becomes `0`.

Because of that the test scenario which is
```
Then('I should see form', () => {
    const path = 'e2e-app child-component';
    browser.waitForVisible(path, 10000);
});
```

**will be failing.**

It is clearly visible on Browser but wdio doesn't detect the element.
I would like to know if this is intended behavior.

## The solutions I have found so far :
* Remove `position: absolute`
* OR give below code on `<child-component>`
```
:host {
    display: block;
    min-height: 1px;
}
```


# The below is how to install polymer

e2e-test-project

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
