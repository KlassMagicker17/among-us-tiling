/**
 * defines an Among Us Gradient which can be read by that other function that renders the gradient onto the canvas.
 * @class
 */
class AmongUsGradient {
    /**
     * constructs the AmongUsGradient. {feels wrong}
     * @param {number} scale how big the among us are going to be. Looks really weird if not an integer.
     * @param {boolean} startFlipState how the among us will start
     * @param {number} gradientWidth how many columns; how long the gradient will be
     * @param {HSLGradient[]} gradients different HSLGradients, one is perfectly fine.
     */
    constructor(scale, startFlipState, gradientWidth, gradients) {
        this.scale = scale;
        this.flipState = startFlipState;
        this.gradientWitdh = gradientWidth;
        this.gradients = gradients;
        this.gradientArray = this.generateGradientArray();
    }
    /**
     * Generates the gradient array from the different HSLGradients
     * @returns {Array[]}
     */
    generateGradientArray() {
        const tempArray = [];
        this.gradients.forEach(gradient => {
            let columnColor = [...gradient.hslArray];

            for (let i = 0; i < gradient.gradientHeight; i++) {
                const tempRow = [];
                let rowColor = [...columnColor];
                for (let j = 0; j < this.gradientWitdh; j++) {
                    tempRow.push(`hsl(${rowColor[0]},${rowColor[1]}%,${rowColor[2]}%)`);
                    rowColor = gradient.xAxisChange(rowColor);
                }
                tempArray.push(tempRow);
                columnColor = gradient.yAxisChange(columnColor);
            }
        })
        return tempArray;
    }
}
/**
 * defines a gradient made of hsl, with rules for going left and down.
 * @class
 */
class HSLGradient {
    /**
     * callback that modifies the color going right.
     * @callback xAxisChange
     * @param {[number, number, number]} hsl hsl array that's modified however way.
     * @returns {[number, number, number]} modified hsl array
     */
    /**
     * callback that modifies the color going down.
     * @callback yAxisChange
     * @param {[number, number, number]} hsl hsl array that's modified however way.
     * @returns {[number, number, number]} modified hsl array
     */
    /**
     * constructs the class gradient. (this feels wrong)
     * @param {number} gradientHeight how many rows to generate; how tall this gradient will be.
     * @param {[number,number,number]} hslArray an array for hsl. (I THINK THIS SHOULD HAVE BEEN AN OBJECT WAH)
     * @param {xAxisChange} xAxisChange
     * @param {yAxisChange} yAxisChange 
     */
    constructor(gradientHeight, hslArray, xAxisChange, yAxisChange) {
        this.gradientHeight = gradientHeight;
        this.hslArray = hslArray;
        this.xAxisChange = xAxisChange;
        this.yAxisChange = yAxisChange;
    }
}