module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "react/jsx-no-bind": [
        "enabled", {
        "ignoreRefs": boolean || false,
        "allowArrowFunctions": boolean || false,
        "allowBind": boolean || false
}],

        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};