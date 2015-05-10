/**
 * Created by George Gu on 2015/5/6.
 */

Ext.define('NHC_LINK.controller.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login_controller',

    onSignUp: function () {
        this.getView().destroy();
        Ext.create('NHC_LINK.view.signup.SignUpView')
    }
});