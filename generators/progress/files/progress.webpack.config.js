
import { ProgressPlugin } from 'webpack';

const MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();
const CLEAR_LINE = new Buffer('1b5b304b', 'hex').toString();

export default function() {
  return {
    plugins: [
      // Output the build pogress to the command line.
      new ProgressPlugin(function progress(percentage, message) {
        process.stdout.write(
          CLEAR_LINE +
          Math.round(percentage * 100) +
          '%:' +
          message +
          MOVE_LEFT
        );
      }),
    ],
  };
}
