const utils = {};

const req = require.context('.', true, /^(?!.\/index).*.js$/);

req.keys().forEach((key) => {
  const module = req(key).default;
  if (typeof module === 'object') {
    Object.keys(module).forEach((moduleKey) => {
      utils[moduleKey] = module[moduleKey];
    });
  }
});

export default utils;
