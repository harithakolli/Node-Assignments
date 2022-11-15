const mongoose = require('mongoose')

const playerDetails = new mongoose.Schema({

   player_id: {
      type: Number
   },
    userName:{
        type:String
    },
    password:{
         type:String
    },
     age:{
        type:Number
     },
     country:{
        type:String
     },
     installed_days:{
      type:Number
     },
     coins:{
         type:Number
     },
     gems:{
        type:Number
     },
     game_level:{
        type:Number
     },
     purchaser:Boolean
})

const PlayerData = mongoose.model("PlayerData",playerDetails);

module.exports =  PlayerData;
