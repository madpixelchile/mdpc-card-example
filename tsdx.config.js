const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const copy = require('rollup-plugin-copy'); // Añadimos el plugin para copiar archivos

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ include: ['**/*.png', '**/*.jpg'] }),
      copy({
        targets: [
          { src: 'src/assets/**/*.scss', dest: 'dist/assets/styles' },
          { src: ['src/assets/**/*.woff', 'src/assets/**/*.eot', 'src/assets/**/*.svg', 'src/assets/**/*.woff2'], dest: 'dist/assets/fonts' },
        ],
      }),
      ...config.plugins,
    ];
    return config;
  },
};