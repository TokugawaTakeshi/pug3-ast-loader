# webpack-ast-loader

A loader for webpack that allows importing of Pug files as a [AST object](https://github.com/pugjs/pug-ast-spec/blob/master/parser.md).
Works with **Pug 3** and **Webpack 5**.


## Installation

```
npm i pug-ast-loader -D -E
```


## Webpack 

There is no single "right" preset - it depends on which `.pug` modules loading rules you want.
For example, if you want `*.ast.pug` be loaded as AST objects while all other `.pug` modules be loaded as compiled HTML,
  the preset will be:

```javascript
{
  
  // ...

  module: {
    rules: [

      {
        test: /\.pug$/,
        oneOf: [
            
          {
            test: /\.ast\.pug$/,
            loader: "pug-ast-loader"
          },

          {
            loader: "@webdiscus/pug-loader",
            options: {
              mode: "render"
            }
          }
        ]
      },
        
      // ...

    ]
  }
}
```
