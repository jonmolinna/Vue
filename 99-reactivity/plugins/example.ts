export default {
  install: (app: any, options: any) => {
    app.config.globalProperties.$count = () => 0;
    app.config.globalProperties.$hello = () => alert(options.message);
  },
};

// $ => variable global
