'use strict';
const fs = require('fs');
const rename = require("gulp-rename");
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting(){
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('generator-fei-nodejs') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'page_name',
      message: 'Your page_name?',
      default: yoHelper.discoverRoot
    }];

    return this.prompt(prompts).then( (props) => {
      this.props = props;
    });
  }

  writing () {
    this._writingTplFiles();
  }

  _writingTplFiles () {
    yoHelper.rename(this, 'template', `${this.props.page_name}`);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath('./pages'),
      this.props
    );
  }

  install () {
    console.log('Use `yarn install`');
  }
};
