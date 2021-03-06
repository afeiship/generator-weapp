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
      description: 'Your component base dir',
      default: './src/components'
    });

    const prompts = [{
      type: 'input',
      name: 'component_name',
      message: 'Your component_name?'
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
      this.destinationPath(`${this.options.dir}/${this.props.component_name}/`),
      this.props
    );
  }

  install() {
    console.log('Use `yarn install`');
    console.log(`Add "components/${this.props.component_name}/index" to your app.json`);
  }
};
