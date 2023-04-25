const DATA = {
    "TITLE": {
        "death": "СМЕРТЬ",
        "disability": "НС С ПОТЕРЕЙ ТРУДОСПОСОБНОСТИ",
        "microtrauma": "МИКРОТРАВМЫ",
        "consequences": "ПРОИСШЕСТВИЯ БЕЗ ПОСЛЕДСТВИЙ",
        "dangerous": "ОПАСНЫЕ ДЕЙСТВИЯ И УСЛОВИЯ",
        "coefficient": "КОЭФФИЦИЕНТ ПРОЗРАЧНОСТИ ОТЧЕТНОСТИ:"
    },
    "DATA_2022": {
        "death": 0,
        "disability": 16,
        "microtrauma": 15,
        "consequences": 35,
        "dangerous": 1647,
        "coefficient": 1.9
    },
    "DATA_2023": {
        "death": 0,
        "disability": 8,
        "microtrauma": 14,
        "consequences": 42,
        "dangerous": 3023,
        "coefficient": 3.0
    }
};

const COLORS = ['black', 'red', '#ffc000', '#4f81bd', '#00b050'];

let drawChart = function (DATA, COLORS) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.font = "bold 16px Arial sans-serif";
    ctx.fillStyle = '#1f497d';
    ctx.textAlign = "center";
    ctx.fillText("Пирамида травматизма", 253, 36);

    ctx.beginPath();
    ctx.font = "bold 16px Arial sans-serif";
    ctx.fillStyle = '#000000';
    ctx.fillText("2022", 282, 74);

    ctx.beginPath();
    ctx.font = "bold 16px Arial sans-serif";
    ctx.fillStyle = '#000000';
    ctx.fillText("2023", 348, 74);

    const DATA_ARRAY = Object.values(DATA);
    const DATA_2022 = Object.values(DATA_ARRAY[1]);
    const DATA_2023 = Object.values(DATA_ARRAY[2]);

    let xStart = 253;
    let yStart = 80;

    let w = 70;
    for (let i = 1; i <= 5; i++) {
        if (i === 1) {
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xStart - 32, yStart + 54);
            ctx.lineTo(xStart + 34, yStart + 54);
            ctx.lineTo(xStart, yStart);
            ctx.closePath();
            ctx.fillStyle = COLORS[0];
            ctx.fill();

            xStart = xStart - 34;
            yStart = yStart + 56;

        } else {
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xStart - 32, yStart + 54);
            ctx.lineTo(xStart + 32 + w, yStart + 54);
            ctx.lineTo(xStart + w, yStart);
            ctx.closePath();
            ctx.fillStyle = COLORS[i - 1];
            ctx.fill();

            xStart = xStart - 34;
            yStart = yStart + 56;
            w = w + 32 + 35;
        }
    }

    let xStartValue = 298;
    let yStartValue = 110;

    for (let i = 0; i < DATA_2022.length; i++) {
            ctx.beginPath();
            ctx.font = "16px Arial sans-serif";
            ctx.fillStyle = '#0079c2';
            ctx.fillText(DATA_2022[i], xStartValue, yStartValue);
            xStartValue += 34;
            yStartValue += 56;
    }

    xStartValue = 298;
    yStartValue = 110;

    for (let i = 0; i < DATA_2023.length; i++) {
            ctx.beginPath();
            ctx.font = "16px Arial sans-serif";
            ctx.fillStyle = '#0079c2';
            ctx.fillText(DATA_2023[i], xStartValue + 68, yStartValue);
            xStartValue += 34;
            yStartValue += 56;
    }

    const titleTemplate = document.getElementsByClassName('lvl');
    const titleArrayData = Object.values(DATA.TITLE);

    for (let i = 0; i < titleTemplate.length; i++) {
        for (let j = 0; j < titleArrayData.length; j++) {
            if (i === j) {
                titleTemplate[i].innerHTML = titleArrayData[j];
            }
        }
    }

    ctx.setLineDash([4, 4]);

    let xLineXStart = 221;
    let yLineXStart = 135;
    let countX = 1;

    for (let i = 0; i < titleArrayData.length - 2; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(xLineXStart, yLineXStart);
        ctx.lineTo(xLineXStart + 132 + 68 * countX, yLineXStart);
        ctx.strokeStyle = '#4a7ebb';
        ctx.stroke();
        xLineXStart = xLineXStart - 34;
        yLineXStart = yLineXStart + 56;
        countX += 1;
    }

    let xLineYStart = 487;
    let yLineYStart = 353;

    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(xLineYStart, yLineYStart);
        ctx.lineTo(xLineYStart - 175, yLineYStart - 276);
        ctx.strokeStyle = '#4a7ebb';
        ctx.stroke();

        xLineYStart += 66;
        yLineYStart = 353;
    }
}

drawChart(DATA, COLORS);
