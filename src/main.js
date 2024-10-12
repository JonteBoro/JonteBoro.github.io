// Phaser Spielkonfiguration
var config = {
    type: Phaser.AUTO,
    width: 600, // Spielbreite an Bildschirm anpassen
    height: 300,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    parent: "game-container",backgroundColor: '#3498db', // Hintergrundfarbe
    physics: {
        default: 'arcade', // Aktiviert die Arcade-Physik
        arcade: {
            gravity: { y: 0 }, // Keine Schwerkraft in diesem Fall (da wir den Spieler manuell bewegen)
            debug: false // Debugging deaktivieren (aktivierbar bei Bedarf)
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;

// Neues Phaser-Spiel erstellen
var game = new Phaser.Game(config);

// Assets laden
function preload () {
    this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png'); // Einfaches Spielerbild laden
}

// Erste Szene erstellen
function create () {
    // Spieler-Sprite in der Mitte des Bildschirms platzieren
    player = this.physics.add.sprite(config.width / 2, config.height / 2, 'player');
    player.setScale(0.5); // Größe des Bildes anpassen
    cursors = this.input.keyboard.createCursorKeys(); // Eingaben für Pfeiltasten aktivieren

    // Text hinzufügen, der bei Klick auf den Bildschirm erscheint
    this.input.on('pointerdown', function (pointer) {
        this.add.text(pointer.x, pointer.y, 'Clicked!', { fontSize: '32px', fill: '#fff' });
    }, this);
}

// Wird bei jedem Frame aufgerufen
function update () {
    // Bewegung des Spielers mit den Pfeiltasten
    if (cursors.left.isDown) {
        player.x -= 5;
    }
    else if (cursors.right.isDown) {
        player.x += 5;
    }

    if (cursors.up.isDown) {
        player.y -= 5;
    }
    else if (cursors.down.isDown) {
        player.y += 5;
    }
}
