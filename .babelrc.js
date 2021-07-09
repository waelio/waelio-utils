const presets = ['@babel/preset-react'];
if (process.env['MODULE_ENV'] === 'cjs') {
  presets.push('@babel/preset-env');
}
if (process.env['MODULE_ENV'] === 'es') {
  presets.push([
    '@babel/preset-env',
    {
      modules: false
    }
  ]);
}
module.exports = { presets };
