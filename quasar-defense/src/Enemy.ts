import { Scene } from "phaser";

export default class Enemy extends Phaser.GameObjects.Rectangle {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 50, 50, 0xff0000);
        this.scene = scene;
        this.scene.physics.add.existing(this);
    }
}