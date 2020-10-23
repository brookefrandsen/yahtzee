module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script"
    },
    "rules": {
        "no-console": 1,
        "no-unused-vars": [1, {
            "args": "none"
        }],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "strict": [
            "error",
            "global"
        ],
        "max-params": [
            "warn",
            {
                "max": 7
            }
        ],
        "max-depth": [
            "warn",
            {
                "max": 4
            }
        ],
        "max-statements": [
            "warn",
            {
                "max": 30
            }
        ],
        "complexity": [
            "warn",
            {
                "max": 16
            }
        ],
        "semi": [
            "warn",
            "always"
        ],
        "curly": [
            "error",
            "all"
        ],
        "eqeqeq": [
            "error",
            "always",
            {"null": "ignore"}
        ],
        "no-caller": [
            "error"
        ],

        //Style decisions
        "new-cap": [
            0
        ],
        "no-useless-catch": [
            0
        ],
        "require-atomic-updates": [
            "warn"
        ]
    },
};