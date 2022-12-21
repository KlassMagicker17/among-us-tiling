window.addEventListener('load', e => {
    const canvas = document.getElementById('canvasCenter');
    const ctx = canvas.getContext('2d');
    canvas.width = OPTIONS.canvasWidth;
    canvas.height = OPTIONS.canvasHeight;

    const firstGradient = new HSLGradient(200,
        [10, 50, 50],
        hsl => [hsl[0] - 30, hsl[1], hsl[2]],
        hsl => [hsl[0] + 50, hsl[1] + 1, hsl[2]]);

    const test = new AmongUsGradient(1, false, 200, [firstGradient]);
    drawAmongUsGradient(ctx, new AmongUsGradient(OPTIONS.scale, OPTIONS.flipState, OPTIONS.width, OPTIONS.gradiets));
})
/**
 * Draws a singular Among Us.
 * @param {CanvasRenderingContext2D} ctx The canvas' context object thing.
 * @param {string} color the color, duh.
 * @param {number} xOffset how much to offset the amongus in the x axis.
 * @param {number} yOffset how much to offset the amongus in the y axis.
 * @param {number} scale how much to size the among us. defaults to 1.
 * @param {boolean} flipped whether the among us is flipped. defaults to false (upright).
 */
function drawAmongUs(ctx, color, xOffset, yOffset, scale, flipped = false) {
    ctx.fillStyle = color;
    // among us boxes things + offset
    if (flipped) {
        ctx.fillRect(0 * scale + xOffset, 4 * scale + yOffset, 3 * scale, 1 * scale); //head
        ctx.fillRect(2 * scale + xOffset, 2 * scale + yOffset, 2 * scale, 2 * scale); //backpack
        ctx.fillRect(2 * scale + xOffset, 0 * scale + yOffset, 1 * scale, 2 * scale); //left leg
        ctx.fillRect(1 * scale + xOffset, 1 * scale + yOffset, 1 * scale, 2 * scale); //mid section
        ctx.fillRect(0 * scale + xOffset, 0 * scale + yOffset, 1 * scale, 3 * scale); //right leg
    } else {
        ctx.fillRect(1 * scale + xOffset, 0 * scale + yOffset, 3 * scale, 1 * scale); //head
        ctx.fillRect(0 * scale + xOffset, 1 * scale + yOffset, 2 * scale, 2 * scale); //backpack
        ctx.fillRect(1 * scale + xOffset, 3 * scale + yOffset, 1 * scale, 2 * scale); //left leg
        ctx.fillRect(2 * scale + xOffset, 2 * scale + yOffset, 1 * scale, 2 * scale); //mid section
        ctx.fillRect(3 * scale + xOffset, 2 * scale + yOffset, 1 * scale, 3 * scale); //right leg
    }
}
/**
 * Draws the Among Us Gradient.
 * @param {CanvasRenderingContext2D} ctx The canvas' context object thing.
 * @param {AmongUsGradient} AmongUsGradient an instance of AmongUsGradient to draw unto the canvas.
 */
function drawAmongUsGradient(ctx, AmongUsGradient) {
    const gradientRowCount = AmongUsGradient.gradientArray.length;

    const xCenterOffset = (OPTIONS.canvasWidth - OPTIONS.width * OPTIONS.scale * 4) >> 1;
    const yCenterOffset = (OPTIONS.canvasHeight - ((gradientRowCount >> 1) * 3 * AmongUsGradient.scale + ((gradientRowCount + 1) >> 1) * 4 * AmongUsGradient.scale + AmongUsGradient.scale * OPTIONS.width)) >> 1;
    for (i = 0; i < AmongUsGradient.gradientArray.length; i++) {
        let xOffset = (i % 2 ? 2 * AmongUsGradient.scale : 0) + xCenterOffset;
        let yOffset = (i >> 1) * 3 * AmongUsGradient.scale + ((i + 1) >> 1) * 4 * AmongUsGradient.scale + yCenterOffset; // +4 then +3 alternating
        console.log(yCenterOffset) 
        for (let j = 0; j < AmongUsGradient.gradientArray[i].length; j++) {
            const hslColor = AmongUsGradient.gradientArray[i][j];
            drawAmongUs(ctx, hslColor, xOffset, yOffset, AmongUsGradient.scale, AmongUsGradient.flipState);
            xOffset += 4 * AmongUsGradient.scale;
            yOffset += 1 * AmongUsGradient.scale;
        }
        AmongUsGradient.flipState = !AmongUsGradient.flipState;
    }
}