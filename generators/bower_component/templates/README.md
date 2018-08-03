# <%= project_name %>
> <%= "description" %>

## .bowerrc(Place in your project root path)
```json
{
  "directory": "src/bower_components/"
}
```

## install:
```shell
bower install --save afeiship/<%= project_name %>
```

## usage:
```json
{
  "navigationBarTitleText": "YOUR PAGE TITLE",
  "usingComponents": {
    "auth-user-info": "../../bower_components/<%= project_name %>/index"
  }
}
```
