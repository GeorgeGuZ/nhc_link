/**
 * Created by George Gu on 2015/5/6.
 */

Ext.define('NHC_LINK.view.login.LoginView', {

    extend: 'Ext.container.Container',

    requires: [
        'NHC_LINK.view.main.MainController',
        'NHC_LINK.view.main.MainModel'
    ],

    controller: 'login_controller',

    title: 'Toronot Bankers Basketball League',

    layout: 'hbox',

    items: [
        {
            xtype: 'container',
            flex: 1
        },
        {
            xtype: 'panel',
            title: 'Toronto Banker Basketball League',
            width: 400,
            bodyPadding: 20,
            titleAlign: 'center',
            items: [
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email Address',
                    vtype: 'email',  // requires value to be a valid email address format
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    fieldLabel: 'Password',
                    inputType: 'password',
                    margin: '0 0 20 0'
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Sign up',
                            margin: '0 10 0 0',
                            handler: 'onSignUp'
                        },
                        {
                            xtype: 'button',
                            text: 'Login'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1
        }

    ],

    renderTo: Ext.getBody()

});