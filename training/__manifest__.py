{
    'name': 'Training',
    'version': '18.0.1.0',
    'summary': """Training""",
    'category': 'Web',
    'author': "OpenEduCat Inc",
    'website': 'https://www.openeducat.org',
    'depends': [
        'website',
    ],
    'data': [
        'views/template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'training/static/src/js/contacts.js'
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': False,
    'license': 'Other proprietary',
}
