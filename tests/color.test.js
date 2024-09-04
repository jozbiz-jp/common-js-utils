const {
    isHexColor,
    randomColor,
    hexToRGB,
    rgbToHex,
    hexToHSL,
    hexToHSB,
    getContrastYIQ
} = require("../src/color");

describe('Color Utility Functions', () => {

    test('isHexColor should correctly identify valid and invalid hex color codes', () => {
        expect(isHexColor('#FFF')).toBe(true);  // Valid 3-digit hex
        expect(isHexColor('#FFFFFF')).toBe(true);  // Valid 6-digit hex
        expect(isHexColor('#FF5733')).toBe(true);  // Valid 6-digit hex
        expect(isHexColor('FFF')).toBe(false);  // Missing #
        expect(isHexColor('#FF573')).toBe(false);  // Incomplete hex
        expect(isHexColor('#GGG')).toBe(false);  // Invalid characters
    });

    test('randomColor should generate a valid hex color code', () => {
        const color = randomColor();
        expect(isHexColor(color)).toBe(true);
    });

    test('hexToRGB should correctly convert a hex color code to an RGB string', () => {
        expect(hexToRGB('#FFFFFF')).toBe('rgb(255, 255, 255)');
        expect(hexToRGB('#000000')).toBe('rgb(0, 0, 0)');
        expect(hexToRGB('#FF5733')).toBe('rgb(255, 87, 51)');
    });

    test('rgbToHex should correctly convert an RGB value to a hex color code', () => {
        expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
        expect(rgbToHex(0, 0, 0)).toBe('#000000');
        expect(rgbToHex(255, 87, 51)).toBe('#FF5733');
    });

    test('hexToHSL should correctly convert a hex color code to HSL format', () => {
        expect(hexToHSL('#FFFFFF')).toEqual([0, 0, 100]);  // White
        expect(hexToHSL('#FF0000')).toEqual([0, 100, 50]);  // Red
        expect(hexToHSL('#00FF00')).toEqual([120, 100, 50]);  // Green
        expect(hexToHSL('#0000FF')).toEqual([240, 100, 50]);  // Blue
    });

    test('hexToHSB should correctly convert a hex color code to HSB format', () => {
        expect(hexToHSB('#FFFFFF')).toEqual([0, 0, 100]);  // White
        expect(hexToHSB('#FF0000')).toEqual([0, 100, 100]);  // Red
        expect(hexToHSB('#00FF00')).toEqual([120, 100, 100]);  // Green
        expect(hexToHSB('#0000FF')).toEqual([240, 100, 100]);  // Blue
    });

    test('getContrastYIQ should correctly determine if a color is closer to white or black for contrast', () => {
        expect(getContrastYIQ('#FFFFFF')).toBe('black');  // White color should return black contrast
        expect(getContrastYIQ('#000000')).toBe('white');  // Black color should return white contrast
        expect(getContrastYIQ('#FF5733')).toBe('black');  // Should return black contrast for this color
        expect(getContrastYIQ('#CCCCCC')).toBe('black');  // Light grey should return black contrast
        expect(getContrastYIQ('#333333')).toBe('white');  // Dark grey should return white contrast
    });

});
