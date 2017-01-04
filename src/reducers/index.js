/* eslint-env node*/

const { combineReducers } = require('redux');
const game = require('./game');
const players = require('./players');
const heroes = require('./heroes');
const weapons = require('./weapons');
const minions = require('./minions');
const secrets = require('./secrets');
const deckCards = require('./deckCards');
const effects = require('./effects');

const rootReducer = combineReducers({
  game,
  deckCardsById: deckCards,
  playersById: players,
  heroesById: heroes,
  weaponsById: weapons,
<<<<<<< HEAD
  minionsById: minions,
  secretsById: secrets,
=======
  minions,
  secretsById: secrets,
  effectsById: effects,
>>>>>>> upstream/master
});

module.exports = rootReducer;
