const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique:true},

    serverID : {type:String, require: true},

    coins: {type: Number, default: 10},
    lotus: {type: Number, default: 10},
    bricks: {type: Number, default: 10},
    diamonds: {type: Number, default: 10},
    sins: {type: Number, default: 10},

    username: {type: String, require: true},

    security: {
        jail: {type: Number, default: 0},
        nrOfDigs : {type: Number, default: 0},
    },

    level: {
        value: {type: Number, default:1},
        nextReq: {type: Number, default:10},
        xp: {type: Number, default:0},
    },

    ratInv: {
        common: {type: Number, default:0},
        rare: {type: Number, default:0},
        epic: {type: Number, default:0},
        exotic: {type: Number, default:0},
        legendary: {type: Number, default:0},
        unique : {type: Number, default: 0}
    },

    bank: {
        coins: {type: Number, default:0},
        diamonds: {type: Number, default:0},
    },

    lab: {
        jobs : {
            circus : {
                price: {type: Number, default:0},
                reward: {type: Number, default:2},
              },
            explore : {
                price: {type: Number, default:0},
                reward: {type: Number, default:2},
              },
            construction : {
                price: {type: Number, default:0},
                reward: {type: Number, default:2},
              },
            mutation : {
                price: {type: Number, default:0},
                reward: {type: Number, default:2},
              },
            kill : {
                price: {type: Number, default:0},
                reward: {type: Number, default:2},
              }        
            
        },
        rat:{
            common: {type: Number, default:0},
            rare: {type: Number, default:0},
            epic: {type: Number, default:0},
            exotic: {type: Number, default:0}, 
            legendary: {type: Number, default:0},
        }
    },

    cooldowns: {
        daily: {type: Number, default:0},
        vote: {type: Number, default:0},
    },

    profile: {
        location: {
            ratville : {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            holyCastle : {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            dreamerPeak : {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            springRiverFalls : {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            sandoraDesert : {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            waterHeaven: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            ratLine: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            sunValleyCity: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            whitecliffFort: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            icefallMountains: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            greenstoneValley: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            ratholeTown: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default :0},
            },
            oldTavern: {
                price : {type: Number, default:0},
                bonus : {
                    common:{type: Number, default : 1 },
                    rare:{type: Number, default : 1 },
                    epic:{type: Number, default : 1 },
                    exotic:{type: Number, default : 1 },
                    legendary:{type: Number, default : 1 },

                },
                value : {type: Number, default: 0},
            },
            travel: {type:Number, default:1},
        },
        
        stats: {
            voteAmount: {type: Number, default:0},
            ratKilled: {type: Number, default:0},
            dateCreated: {type: Number, default:0}, 
            commonRatFound: {type: Number, default:0},
            rareRatFound: {type: Number, default:0}, 
            epicRatFound: {type: Number, default:0}, 
            exoticRatFound: {type: Number, default:0}, 
            legendaryRatFound: {type: Number, default:0},
            digAmount: {type: Number, default:0},
            commandsRun: {type: Number, default:0},
            locDiscovered: {type: Number, default:0}, 

        },
        pet:{
            name:{type: String},
            gender: {type: String},
        }
    },

    items: {
        MouseTrap: {
            name: {type: String,default: "Mouse Trap"},
            maxAmount : {type: Number, default : 10000},
            sellPrice: {type: Number,default : 25},
            buyPrice: {type: Number,default: 50},
            amount: {type: Number, default: 0},   
            rarity: {type: String,default : ":star:"},
            emoji: {type: String,default : ":mouse_trap:"},  
            category: {type: String,default : "Traps"},
            description: {type: String},
            usage: {type: String},
              
        },
        Cheese: {
            name: {type: String,default : "Cheese"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Bread: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Rice: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Tiger: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Peanut: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Pizza: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Cat: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Corn: {
            name: {type: String,default : "Cat"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        Books: {
            name: {type: String,default : "Cheese"},
            maxAmount : {type: Number, default : 10000},
            category: {type: String,require: true},
            description: {type: String,require: true},
            usage: {type: String,require: true},
            sellPrice: {type: Number,default: 50},
            buyPrice: {type: Number,default: 100},
            amount: {type: Number, default: 0},
            rarity: {type: String,require: true},
            emoji: {type: String, default : ':cat2:' }
        },
        
          
    },    
})


const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;