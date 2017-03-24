# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Create new project
```
$ rails new try-rails5.1.beta-webpack-react --webpack=react
```

* Ruby version
```
$ ruby -v
ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]
```

* Rails version
```
$ rails -v
Rails 5.1.0.rc1
```

* System dependencies
 - npm version
```
$ npm -v
4.0.2
```
 - node version
```
 $ node -v
 v6.9.1
```
 
* Configuration
- node module install for React and webpack - see package.json
  issue 'npm install' then install node_module following by package.json in your project.
```
npm install react react-dom react-router --save
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev
npm install webpack webpack-merge webpack-dev-server path process glob path-complete-extname --save-dev
```

* Run Webpack
webpack watch js or jsx files with 8080 ports
```
$ ./bin/webpack-dev-server --hot --host localhost
```

* Create controller
```
rails g controller Home index
```

* Add javascript_pack_tag at views/home/index.html.erb
'hello_react' is file name of javascript/packs/hello_react.jsx

```
<%= javascript_pack_tag 'hello_react' %>
```

* Run rails
```
$ rails server
=> Booting Puma
=> Rails 5.1.0.rc1 application starting in development on http://localhost:3000
=> Run `rails server -h` for more startup options
Puma starting in single mode...
* Version 3.8.2 (ruby 2.3.1-p112), codename: Sassy Salamander
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://0.0.0.0:3000

```
* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
