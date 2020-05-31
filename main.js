setTimeout(() => {
  console.log("This is setTimeout !");
}, 2000);

const sayName = () => {
  const firstName = "Codinger";
  const lastName = "Blade";

  const name = firstName + lastName;

  console.log(name);
};

setTimeout(sayName, 3000);

// link animation
const linkBreak = () => {
  let link = document.getElementById("link");
  link.innerHTML = "&#xf0c1";
  setTimeout(() => {
    link.innerHTML = "&#xf127";
  }, 1000);
};

setInterval(linkBreak, 2000);

linkBreak();

// Battery Animation
const batteryFill = () => {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244";
  setTimeout(() => {
    battery.innerHTML = "&#xf243";
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = "&#xf242";
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = "&#xf241";
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = "&#xf240";
  }, 4000);
};

batteryFill();

setInterval(batteryFill, 5000);
