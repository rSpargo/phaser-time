import { Scene } from "phaser";

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor (scene: Scene) {
    super(scene, 0, 0, 'bullet');
  }

  fire(x: number, y: number) {
    this.setPosition(x, y - 50);
    this.setRotation(Phaser.Math.DegToRad(90));
    this.setBodySize(this.height, this.width);

    this.setActive(true);
    this.setVisible(true);
  }

  update() {
    this.setVelocityY(-550);

    if (this.y < -50) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}