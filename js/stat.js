'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_BG = '#fff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var INDENT = 10;
var MY_COLOR = 'rgba(255, 0, 0, 1)';
var OTHER_COLOR = 240;
var TEXT_COLOR = '#000';
var TEXT_FONT = '16px PT Mono';
var COL_WIDTH = 40;
var HEX_HEIGHT = 150;
var HEX_INDENT = 50;
var HEX_X = CLOUD_X + INDENT * 4;
var HEX_Y = CLOUD_HEIGHT - INDENT * 3;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderFont = function (ctx) {
  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
};

var renderText = function (ctx) {
  renderFont(ctx);
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + INDENT * 2, CLOUD_Y + INDENT * 2);
  ctx.fillText('Список результатов:', CLOUD_X + INDENT * 2, CLOUD_Y + INDENT * 4);
};

var getColorOther = function () {
  return 'hsl(' + OTHER_COLOR + ', ' + Math.round(Math.random() * 100) + '%, 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + INDENT, CLOUD_Y + INDENT, CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_BG);

  renderText(ctx);

  // ищем максимальное значение times
  var maxTime = Math.max.apply(null, times);

  // Рисуем игроков и их гексограмм
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = MY_COLOR;
    } else {
      ctx.fillStyle = getColorOther();
    }
    ctx.fillRect(HEX_X + ((COL_WIDTH + HEX_INDENT) * i), HEX_Y, COL_WIDTH, -(times[i] * HEX_HEIGHT / maxTime));

    renderFont(ctx);
    ctx.fillText(players[i], HEX_X + ((COL_WIDTH + HEX_INDENT) * i), HEX_Y + INDENT);
    ctx.fillText(Math.round(times[i]), HEX_X + ((COL_WIDTH + HEX_INDENT) * i), HEX_Y - INDENT * 2 - (times[i] * HEX_HEIGHT / maxTime));
  }
};
