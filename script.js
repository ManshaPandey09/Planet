const tabDescriptions = {
  overview: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth’s surface is land with remaining 70.8% is covered with water. Earth’s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
  structure: "Earth has a dense core composed of iron and nickel, surrounded by a viscous mantle and a solid crust that supports life.",
  geology: "Earth’s geology is dynamic, with active tectonic plates, volcanoes, and erosion shaping the surface continually."
};

function changeTab(tabName) {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  if (tabName === 'overview') {
    document.querySelectorAll('.tab')[0].classList.add('active');
  } else if (tabName === 'structure') {
    document.querySelectorAll('.tab')[1].classList.add('active');
  } else {
    document.querySelectorAll('.tab')[2].classList.add('active');
  }

  document.querySelector('.description').textContent = tabDescriptions[tabName];
}
