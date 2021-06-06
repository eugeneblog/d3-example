import * as d3 from 'd3'

function SimpleWidget(spec) {
  let instance = {};

  instance.render = function () {

    d3.select('body').append('div').append('div').append('div')

    d3.selectAll("div")
      .attr("class", "red box")
      .each(function (d, i) {
        d3.select(this).append("h1").text(i);
      });
  };

  return instance;
}

const widget = SimpleWidget();

widget.render();
