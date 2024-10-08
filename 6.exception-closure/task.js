// Задание 1

function parseCount(value) {
    const result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return error;
    }
}

// Задание 2

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

        if (side1 + side2 <= side3 ||
            side1 + side3 <= side2 ||
            side2 + side3 <= side1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    get area() {
        const s = this.perimeter / 2;
        const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {

    try {
        return new Triangle(side1, side2, side3);
    }
    catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }

        }
    }
}