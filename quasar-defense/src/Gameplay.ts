import Phaser from 'phaser'
import Bullet from './Bullet';

export default class Gameplay extends Phaser.Scene {

  player: any;
  liveEnemies: any;
  cursors: any;
	fireButton: any;
	bullets: any;

	fireEnabled = true;

  score: any;
  scoreText: any;

  constructor() {
    super('gameplay');
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');
    this.load.image('sky', 'assets/skies/space3.png');
		this.load.image('bullet', '/assets/sprites/bullets/bullet6.png');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.player = this.add.triangle();
		this.player.setFillStyle(0xffffff);
		this.player.setStrokeStyle(5, 0x028ffd);
		this.player.setScale(0.5);
		this.player.setPosition(
			this.cameras.main.centerX, 
			this.cameras.main.displayHeight - (this.player.height / 2)
		);
		this.physics.add.existing(this.player);
		this.player.body.setCollideWorldBounds(true);

		this.bullets = this.physics.add.group({runChildUpdate: true});
		this.bullets.createMultiple({
      frameQuantity: 20,
      key: 'bullet',
      active: false,
      visible: false,
      classType: Bullet
    });

		this.cursors = this.input.keyboard?.createCursorKeys();
		this.fireButton = this.input.keyboard?.addKey(
      Phaser.Input.Keyboard.KeyCodes.Z
    );
  }

  update() {
    if (this.cursors.left.isDown) {
			this.player.body.setVelocityX(-500)
		} else if (this.cursors.right.isDown) {
			this.player.body.setVelocityX(500);
		} else {
			this.player.body.setVelocityX(0);
		}

		if (this.fireButton.isDown && this.fireEnabled) {
			const bullet = this.bullets.getFirstDead(false);
			if (bullet) { bullet.fire(this.player.x, this.player.y); }
			console.log("FIRE!");

			this.fireEnabled = false;
		} else if (this.fireButton.isUp && !this.fireEnabled) {
			this.fireEnabled = true;
		}
  }
}
