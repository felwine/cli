export default [
    {
        "id": "pageable",
        "name": "Pageable",
        "version": "0.0.1",
        "apiVersion": "1.0.0",
        "description": "Adds pageing capacity to a Felwine app",
        "packages": [
            {
                "id": "@felwine-community/pageable-parse-server",
                "description": "",
                "type": "main",
                "components": ["server"],
                "url": "https://github.com/felwine-community/pageable-parse-server.git"
            },
            {
                "id": "@felwine-community/pageable-parse-classes",
                "description": "",
                "type": "classes",
                "components": ["server"]
            },
        ],
        "author": {
            "name": "Felwine Community",
            "email": "servablecommunity@gmail.com",
            "url": "https://servablecommunity.com/"
        },
        "keywords": [
            "node",
            "features",
            "felwine",
            "yeoman-toolbox"
        ],
        "repository": {
            "type": "git",
            "url": "https://github.com/felwine-community/toolbox-felwine.git"
        },
        "bugs": {
            "url": "https://github.com/felwine-community/toolbox-felwine/issues"
        },
        "main": "./toolboxs/app/index.js",
        "homepage": "http://servablecommunity.com",
        "license": "MIT",
        "engines": {
            "node": ">=14.15.0"
        },
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
        "api": {
            "template": {
                "id": "pageable",
                "name": "pageable",
                "slug": "pg",
                // module: {
                //     '@felwine-community/publishable-parse-server': '*'
                // },
                // version: '*',
                "params": {
                    "apiKey": "<%= apiKey %>",
                    "liveClasses": ["publishable"],
                    "schema": {
                        "restrictSecurity": true
                    }
                }
            },
            "parameters": [
                {
                    "id": "apiKey",
                    "prompt": {
                        "type": "input",
                        "name": "API Key",
                        "message": "API Key",
                        "default": "",
                        "vacuity": "mandatory",
                        "validators": [{
                            "type": "",
                            "params": {}
                        }]
                    }
                },
            ]
        },

    },
    {
        "id": "emailable",
        "name": "Emailable",
        "version": "0.0.1",
        "description": "Adds email capacity to a Felwine app",
        "homepage": "http://servablecommunity.com",
        "license": "MIT",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
        "author": {
            "name": "Felwine Community",
            "email": "servablecommunity@gmail.com",
            "url": "https://servablecommunity.com/",
            "github": "https://github.com/felwine-community"
        },
        "keywords": [
            "emailable",
            "sendgrid"
        ],
        "forks": {
        },
        "packages": [
            {
                "id": "@felwine-community/felwine-emailable",
                "description": "",
                "type": "main",
                "components": ["server"],
                "url": "https://github.com/felwine-community/felwine-publishable.git",
                "engines": {
                    "@felwine/engine": ">=1.0"
                },
                "usage": {
                    "howto": "Fill the API key",
                    "template": {
                        "id": 'emailable',
                        "name": 'emailable',
                        "slug": 'em',
                        "params": {
                            "apiKey": "<%= apiKey %>",
                            "frontWebUrl": "<%= frontWebUrl %>",
                            "env": CliNext.env.NODE_ENV,
                            "appName": CliNext.env.SERVABLE_APP_NAME,
                            "restrictSend": "<%= restrictSend %>",
                            "restrictTo": "<%= restrictTo %>",
                            "restrictToRegex": "<%= restrictToRegex %>",
                            "schema": {
                                "exclude": false
                            }
                        }
                    },
                    "parameters": [
                        {
                            "id": "apiKey",
                            "prompt": {
                                "type": "input",
                                "name": "API Key",
                                "message": "API Key",
                                "vacuity": "optional",
                                "validators": [{
                                    "type": "",
                                    "params": {}
                                }],
                                "transformer": a => a
                            }
                        },
                        {
                            "id": "frontWebUrl",
                            "prompt": {
                                "type": "input",
                                "message": "Front Web Url",
                                "default": "https://localhost:3000",
                                "vacuity": "mandatory",
                                "validators": [{
                                    "type": "",
                                    "params": {}
                                }]
                            }
                        },
                        {
                            "id": "restrictSend",
                            "prompt": {
                                "type": "input",
                                "message": "Restrict sending emails",
                                "default": false,
                                "vacuity": "mandatory",
                                "validators": [{
                                    "type": "",
                                    "params": {}
                                }]
                            }
                        },
                        {
                            "id": "restrictTo",
                            "prompt": {
                                "type": "input",
                                "message": "Restrict sending emails to",
                                "vacuity": "optional",
                                "validators": [{
                                    "type": "",
                                    "params": {}
                                }]
                            }
                        },
                        {
                            "id": "restrictToRegex",
                            "prompt": {
                                "type": "input",
                                "message": "Restrict sending emails to regex",
                                "vacuity": "optional",
                                "validators": [{
                                    "type": "",
                                    "params": {}
                                }]
                            }
                        }
                    ]
                },
                "dependencies": {

                }
            }
        ]
    },
    {
        "id": "slugable",
        "name": "Slugable",
        "packages": [
            {
                "id": "@felwine-community/slugable",
                "description": "",
                "type": "main"
            }
        ],
        "author": "Felwine Community",
        "email": "servablecommunity@gmail.com",
        "description": "Adds slug capacity to a Felwine app",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
    },
    {
        "id": "reviewable",
        "name": "Reviewable",
        "packages": [
            {
                "id": "felwine-reviewable",
                "description": "",
                "type": "main"
            }
        ],
        "author": "Felwine Community",
        "email": "servablecommunity@gmail.com",
        "description": "Adds review capacity to a Felwine app",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
    },
    {
        "id": "publishable",
        "name": "Publishable",
        "packages": [
            {
                "id": "felwine-publishable",
                "description": "",
                "type": "main"
            }
        ],
        "author": "Felwine Community",
        "email": "servablecommunity@gmail.com",
        "description": "Adds review capacity to a Felwine app",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
    }
]
