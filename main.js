/** Connect to Moralis server */
const serverUrl = "https://bqzryuxy8etj.usemoralis.com:2053/server";
const appId = "wu613wYkVgQ682OegkSs9bR6j1JcHdnDqK7yswge";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var platforms;
var player;

//Loading assets (images, sounds..)
function preload ()
{
	this.load.image('background', 'assets/BG.png');
	this.load.image('ground', 'assets/Tiles/Tile (2).png');
	this.load.image('ground', 'assets/Tiles/Tile (3).png');

	this.load.image('player', 'assets/player.png');
}

//initial setup (background..)
function create ()
{
	this.add.image(400, 300, 'background').setScale(0.5);

	platforms = this.physics.add.staticGroup();
	platforms.create(80, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(140, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(200, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(260, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(320, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(380, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(420, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(480, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(540, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(600, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(660, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(720, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(340, 400, 'ground').setScale(0.5).refreshBody();
	platforms.create(280, 400, 'ground').setScale(0.5).refreshBody();

	player = this.physics.add.sprite(150, 250, 'player').setScale(0.02).refreshBody();
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);

	this.physics.add.collider(player, platforms);


}

//60 times per second - 60 frames oer second
function update ()
{
	//LOGIC
}

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/