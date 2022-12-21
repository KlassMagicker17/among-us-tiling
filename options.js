const OPTIONS = {
    scale: 3,
    flipState: false,
    width: 40,
    gradiets: [
        // new HSLGradient(20, [153, 100, 78],
        //     hsl => [hsl[0], hsl[1], hsl[2] - 1.5],
        //     hsl => [hsl[0], hsl[1] - 2, hsl[2]]),
        // new HSLGradient(10, [0, 0, 19],
        //     hsl => [hsl[0], hsl[1], hsl[2] - 1],
        //     hsl => [hsl[0], hsl[1] + 2, hsl[2]]),
        // new HSLGradient(20, [49, 83, 84],
        //         hsl => [hsl[0], hsl[1], hsl[2] - 1.5],
        //         hsl => [hsl[0], hsl[1] - 2, hsl[2]]),
        new HSLGradient(10, [70, 40, 20],
            hsl => [hsl[1], hsl[2], hsl[0]],
            hsl => [hsl[1] + 4, hsl[2] + 4, hsl[0] + 4])

    ],
    canvasWidth: 700,
    canvasHeight: 300
}