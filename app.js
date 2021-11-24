Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    boxClasses() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copy() {
      let selectedStyle = `transform: ${this.boxClasses.transform};`;
      navigator.clipboard.writeText(selectedStyle);

      //   let el = document.createElement("textarea");
      //   el.setAttribute("readonly", "");
      //   el.style.position = "absolute";
      //   el.style.left = "-9999";
      //   el.value = selectedStyle;
      //   document.body.appendChild(el);
      //   el.select();
      //   document.execCommand("copy");
      //   document.body.removeChild(el);
    },
  },
}).mount("#app");
