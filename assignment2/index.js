// 여기에 정답을 작성해주세요
class Jquery {
  constructor(target) {
    this.#initialize(target);
  }

  #initialize(target) {
    if (target[0] === "#") {
      this.target = document.getElementById(target.slice(1));
    } else if (target[0] === ".") {
      const targetElements = document.getElementsByClassName(target.slice(1));
      this.target = Array.from(targetElements);
    }
  }

  #apply(callback) {
    if (Array.isArray(this.target)) {
      for (const element of this.target) {
        callback(element);
      }
    } else {
      callback(this.target);
    }
  }

  removeClass(name) {
    this.#apply((target) => {
      target.classList.remove(name);
    });
    return this;
  }

  css(...arg) {
    if (arg.length === 1) {
      // Multi property change
      let style = "";
      for (let [key, value] of Object.entries(arg[0])) {
        // When a number is passed as the value,
        // jQuery will convert it to a string and add px to the end of that string.
        if (typeof value === "number") {
          value = value + "px";
        }
        style += `${key}: ${value}; `;
      }
      this.#apply((target) => {
        target.setAttribute("style", style);
      });
    } else if (arg.length > 1) {
      // Single property change
      this.#apply((target) => {
        target.style.setProperty(...arg);
      });
    }
  }

  addClass(name) {
    this.#apply((target) => {
      target.classList.add(name);
    });
    return this;
  }

  fadeOut(callback) {
    if (this.target.style.opacity === "") this.target.style.opacity = 1;
    const totalOpacityChange = 1;
    const opacityChangePerStep = 0.01;
    const totalSteps = totalOpacityChange / opacityChangePerStep;

    // Default duration is 400
    const millisecondsPerStep = 400 / totalSteps;

    const fadeOutInterval = setInterval(() => {
      this.#apply((target) => {
        target.style.opacity -= opacityChangePerStep;
      });
      if (this.target.style.opacity <= 0) {
        this.#apply((target) => {
          target.style.display = "none";
          clearInterval(fadeOutInterval);
          callback();
        });
      }
    }, millisecondsPerStep);
  }
}

const $ = (target) => {
  return new Jquery(target);
};

// 아래 코드는 수정하지 않습니다

// 1
$("#target-1").removeClass("border");

// 2
$("#target-1").css("left", "250px");

// 3
$(".target-2").removeClass("border").addClass("blue");

// 4
$(".target-2").css({ left: 50, "margin-top": "-15px" });

// 5
$("#target-3").fadeOut(() => $("#target-4").addClass("green"));
