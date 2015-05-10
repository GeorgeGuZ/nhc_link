/**
 * Created by George Gu on 2015/5/9.
 */

Ext.define('NHC_LINK.controller.signup.SignUpController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.signup_controller',

    onSubmit: function () {
        console.log('sign up is submitted');
    }
});