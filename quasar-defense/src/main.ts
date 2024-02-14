import Phaser from 'phaser'

import Gameplay from './Gameplay'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	scene: [Gameplay]
}

export default new Phaser.Game(config)
