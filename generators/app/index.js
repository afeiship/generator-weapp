'use strict';
var chalk = require('chalk');
var yosay = require('yosay');
var yoHelper = require('yeoman-generator-helper');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting(){
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('generator-fei-nodejs') + ' generator!'
    ));

    this.argument('dir', {
      type: String,
      desc: "Your app dir",
      defaults: 'src',
      required: false
    })

    var prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Your project_name?',
      default: yoHelper.discoverRoot
    },{
      type:'input',
      name:'description',
      message:'Your project description?'
    },{
      type:'input',
      name:'app_bar_title',
      message:'Your project app bar title?'
    }];

    console.log(
      this.argument('dir')
    );

    return this.prompt(prompts).then( (props) => {
      this.props = props;
    });
  }

  writing () {
    this._writingTplFiles();
  }

  _writingTplFiles () {
    this.fs.copyTpl(
      this.templatePath('{.*,*,pages/**}'),
      this.destinationPath('.'),
      this.props
    );
  }

  install () {
    console.log('Use `yarn install`');
  }
};
