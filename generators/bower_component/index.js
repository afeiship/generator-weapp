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

    const prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Your project_name (eg: like this `weapp-auth-user-info` )?',
      default: yoHelper.discoverRoot
    }, {
      type: 'input',
      name: 'description',
      message: 'Your description?'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this._writingTplFiles();
  }

  _writingTplFiles() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      this.props
    );
  }

  end() {
    const { project_name } = this.props;
    const tips = `
    // USAGE:(Copy to your project)

    "usingComponents": {
        "${project_name}": "../../bower_components/${project_name}/dist/index"
    }
    `;
    console.log(tips);
  }
};
