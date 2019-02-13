'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('generator-fei-nodejs') + ' generator!'
    ));

    this.option('dir', {
      type: String,
      alias: 'd',
      description: 'Your page base dir',
      default: './src/pages'
    });

    const prompts = [{
      type: 'input',
      name: 'page_name',
      message: 'Your page_name?',
      default: yoHelper.discoverRoot
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this._writingTplFiles();
  }

  _writingTplFiles() {
    yoHelper.rename(this, 'template', 'index');
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${this.options.dir}/${this.props.page_name}/`),
      this.props
    );
  }

  install() {
    console.log('Use `yarn install`');
    console.log(`Add "pages/${this.props.page_name}/index" to your app.json`);
  }
};
