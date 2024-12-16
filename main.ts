input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000; index++) {
        music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
