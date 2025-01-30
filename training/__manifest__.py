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
        ],
        'web.assets_backend': [
            'training/static/src/js/product_chart.js',
            'training/static/src/xml/template.xml',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': False,
    'license': 'Other proprietary',
}
