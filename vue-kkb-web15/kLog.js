class KLog {
  log = (type, ...args) => {
    console[type](...args);
  };

  warning = (message) => {
    this.log('warn', message);
  };

  info = (message) => {
    this.log('info', message);
  };

  error = (message) => {
    this.log('error', message);
  };
}
