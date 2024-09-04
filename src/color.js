// Checks if a string is a valid hex color.
function isHexColor(hex) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

// Generates a random hex color code.
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Converts a hex color code to an RGB string.
function hexToRGB(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

// Converts an RGB value to a hex color code.
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Converts a hex color code to HSL format.
function hexToHSL(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max != min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}


// Converts a hex color to HSB (Hue, Saturation, Brightness).
function hexToHSB(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const brightness = max / 255;
    const saturation = max === 0 ? 0 : (max - min) / max;
    let hue = 0;
    if (max !== min) {
        if (max === r) {
            hue = (g - b) / (max - min);
        } else if (max === g) {
            hue = 2 + (b - r) / (max - min);
        } else {
            hue = 4 + (r - g) / (max - min);
        }
        hue *= 60;
        if (hue < 0) hue += 360;
    }
    return [Math.round(hue), Math.round(saturation * 100), Math.round(brightness * 100)];
}

// Determines if a color is closer to white or black for contrast.
function getContrastYIQ(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 >= 128 ? 'black' : 'white';
}



module.exports = {
    isHexColor,
    randomColor,
    hexToRGB,
    rgbToHex,
    hexToHSL,
    hexToHSB,
    getContrastYIQ
}