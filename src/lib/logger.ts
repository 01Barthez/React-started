import envs from '@/core/config/env'; // Import environment variables
import winston, { createLogger, format, transports } from 'winston'; // Import Winston logging library and necessary components
import DailyRotateFile from 'winston-daily-rotate-file'; // Import the DailyRotateFile transport for log rotation

const { colorize, align } = winston.format; // Destructure format utilities from Winston

// Define the log level based on the environment (e.g., production or development).
// This is done to filter certain logs and prevent verbose logs from being sent in production.
const logLevel = envs.NODE_ENV === 'production' ? 'warn' : 'debug';

// Function to create a transport for daily log rotation, which includes the filename pattern, log level, and maximum number of days to keep logs.
const createTransport = (filename: string, level: string, maxFiles: number) => {
  return new DailyRotateFile({
    filename: `logs/${filename}-%DATE%.log`, // Log filename with date pattern
    datePattern: 'YYYY-MM-DD', // Date format for the logs
    zippedArchive: true, // Archive old log files as zip files
    maxSize: '30m', // Maximum size for each log file (30 MB)
    maxFiles: `${maxFiles}d`, // Maximum number of days to retain log files
    level, // Log level (info, warn, debug, error, etc.)
  });
};

// Transport for general logs
const transport = createTransport('application', 'info', 14);

// Transport for warning logs
const warnTransport = createTransport('warns', 'warn', 21);

// Transport for debug logs
const debugTransport = createTransport('debugs', 'debug', 21);

// Transport for error logs
const errorTransport = createTransport('errors', 'error', 30);

/**
 * Creates a Winston logger configured to log to daily rotating files.
 * This logger handles general logs, warning logs, and error logs.
 * It also manages uncaught exceptions and unhandled promise rejections.
 */
const log = createLogger({
  level: logLevel, // Set the log level based on the environment
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss', // Timestamp format for logs
    }),
    format.errors({ stack: true }), // Include stack traces for error logs
    align(), // Align log messages for better readability
    envs.NODE_ENV === 'production' // Check if the environment is production
      ? format.json() // In production, log in JSON format
      : format.prettyPrint() // In development, log in a more readable format
  ),
  defaultMeta: {
    service: 'user-service', // Default metadata for logs (service name)
  },
  transports: [
    envs.NODE_ENV === 'production'
      ? new transports.Console({
          format: format.combine(
            format.timestamp(), // Add timestamp to console logs
            format.json() // Log to console in JSON format in production
          ),
          level: 'info', // Display only 'info' and above logs in production
        })
      : new transports.Console({
          format: format.combine(
            colorize({ all: true }), // Colorize log output in the console
            format.printf(({ level, message, timestamp }) => {
              return `${timestamp} [${level}]: ${message}`; // Custom format for console logs
            })
          ),
          level: 'debug', // Display all log levels in development
        }),
    transport, // General logs with daily rotation
    errorTransport, // Log errors to a separate file with daily rotation
    warnTransport, // Log warnings to a separate file with daily rotation
    debugTransport, // Log debug information to a separate file with daily rotation
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'logs/exceptions.log' }), // Handle uncaught exceptions and log them to a file
  ],
  rejectionHandlers: [
    new transports.File({ filename: 'logs/rejections.log' }), // Handle unhandled promise rejections and log them to a file
  ],
});

export default log; // Export the logger instance for use in other parts of the application
