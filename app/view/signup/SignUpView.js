/**
 * Created by George Gu on 2015/5/9.
 */

Ext.define('NHC_LINK.view.signup.SignUpView', {

    extend: 'Ext.container.Container',

    requires: [
        'NHC_LINK.view.main.MainController',
        'NHC_LINK.view.main.MainModel'
    ],

    controller: 'signup_controller',

    title: 'Sign Up',

    layout: 'hbox',

    items: [
        {
            xtype: 'container',
            flex: 1
        },
        {
            xtype: 'panel',
            title: 'Sign Up Your Team To Join Our League',
            width: 500,
            bodyPadding: 20,
            titleAlign: 'center',
            items: [
                {
                    xtype: 'textfield',
                    name: 'company',
                    fieldLabel: 'Company Name',
                    vtype: 'text',  // requires value to be a valid email address format
                    allowBlank: true
                },
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'First Name',
                    vtype: 'text',  // requires value to be a valid email address format
                    allowBlank: true
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Last Name',
                    vtype: 'text',  // requires value to be a valid email address format
                    allowBlank: true
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    vtype: 'email',  // requires value to be a valid email address format
                    allowBlank: true
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Submit',
                            margin: '0 10 0 0',
                            handler: 'onSubmit'
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