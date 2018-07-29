const appConfig = config.default

console.log(appConfig.defaultWidth)

export default {
    'clock-main-wrapper': {
        display: 'flex',
        justifyContent: 'space-around',
        minHeight: `calc(${appConfig.defaultWidth} / 6)`
    },
    'clock-face': {
        maxWidth: `calc((${appConfig.defaultWidth} / 6) / 2)`,
        flex: `1 0 calc((${appConfig.defaultWidth} / 6) / 2)`,
        position: 'relative',
    },
    'clock-part': {
        background: appConfig.defaultColor,
        display: 'block',
        position: 'absolute',
        width: '60%',
        height: '10%',
        transition: 'background, box-shadow .3s ease',

        '&.active': {
            background: appConfig.activeColor,
            boxShadow: `0 0 2px #fff,
                0 0 4px #fff,
                0 0 6px #fff,
                0 0 8px ${appConfig.activeColor},
                0 0 14px ${appConfig.activeColor},
                0 0 16px ${appConfig.activeColor},
                0 0 20px ${appConfig.activeColor},
                0 0 30px ${appConfig.activeColor}`
        }
    },
    'clock-part-0': {
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)'
    },
    'clock-part-1': {
        width: '50%',
        left: '-15%',
        top: '20%',
        transform: 'rotate(90deg)'
    },
    'clock-part-2': {
        width: '50%',
        left: '-15%',
        bottom: '20%',
        transform: 'rotate(90deg)'
    },
    'clock-part-3': {
        width: '50%',
        right: '-15%',
        top: '20%',
        transform: 'rotate(90deg)'
    },
    'clock-part-4': {
        width: '50%',
        right: '-15%',
        bottom: '20%',
        transform: 'rotate(90deg)'
    },
    'clock-part-5': {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    'clock-part-6': {
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)'
    },
    'part-border-top': {
        position: 'absolute',
        borderColor: 'transparent',
        borderTopColor: appConfig.defaultColor,
        borderStyle: 'solid',

        '&.active': {
            borderTopColor: appConfig.activeColor,
        },
        '&:first-child': {
            borderRightColor: appConfig.defaultColor,

            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,
            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
    'part-border-bottom': {
        position: 'absolute',
        borderColor: 'transparent',
        borderBottomColor: appConfig.defaultColor,
        borderStyle: 'solid',

        '&.active': {
            borderBottomColor: appConfig.activeColor,
        },

        '&:first-child': {
            borderRightColor: appConfig.defaultColor,
            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,

            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
    'part-border-left-top': {
        position: 'absolute',
        borderColor: 'transparent',
        borderBottomColor: appConfig.defaultColor,
        borderStyle: 'solid',

        '&.active': {
            borderBottomColor: appConfig.activeColor,
        },

        '&:first-child': {
            borderRightColor: appConfig.defaultColor,

            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,

            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
    'part-border-left-bottom': {
        position: 'absolute',
        borderColor: 'transparent',
        borderBottomColor: appConfig.defaultColor,
        borderStyle: 'solid',

        '&.active': {
            borderBottomColor: appConfig.activeColor,
        },

        '&:first-child': {
            borderRightColor: appConfig.defaultColor,

            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,

            
            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
    'part-border-right-top': {
        position: 'absolute',
        borderColor: 'transparent',
        borderTopColor: appConfig.defaultColor,
        borderStyle: 'solid',

        '&.active': {
            borderTopColor: appConfig.activeColor,
        },

        '&:first-child': {
            borderRightColor: appConfig.defaultColor,
            
            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,
            
            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
    'part-border-right-bottom': {
        position: 'absolute',
        borderColor: 'transparent',
        borderTopColor: appConfig.defaultColor,
        borderStyle: 'solid',

        '&.active': {
            borderTopColor: appConfig.activeColor,
        },

        '&:first-child': {
            borderRightColor: appConfig.defaultColor,

            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,

            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
    'part-border-center': {
        position: 'absolute',
        borderColor: 'transparent',
        borderStyle: 'solid',

        '&:first-child': {
            borderRightColor: appConfig.defaultColor,

            '&.active': {
                borderRightColor: appConfig.activeColor,
            }
        },
        '&:last-child': {
            borderLeftColor: appConfig.defaultColor,

            '&.active': {
                borderLeftColor: appConfig.activeColor,
            }
        }
    },
}