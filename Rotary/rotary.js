const tmpl = document.getElementById('rotary-template');

class RotarySwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true));
  }

  /* example “rotate” API – call element.rotateTo(90) to turn the knob */
  rotateTo(deg = 0) {
    this.shadowRoot.querySelector('.rotary-switch')
        .style.transform = `translate(-50%,-50%) rotate(${deg}deg)`;
  }
}

customElements.define('rotary-switch', RotarySwitch);
