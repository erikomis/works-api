import { env } from "./common/utils/envConfig";
import { app, logger } from "./server";

const initServer = async () => {
  try {
    const { NODE_ENV, HOST, PORT } = env;
    const server = app.listen(PORT, () => {
      logger.info(`Server (${NODE_ENV}) running on http://${HOST}:${PORT}`);
    });

    const onCloseSignal = () => {
      logger.info("SIGINT or SIGTERM received, shutting down gracefully...");
      server.close(() => {
        logger.info("Server closed");
        process.exit(0);
      });

      const FORCE_SHUTDOWN_TIMEOUT = 10000; // 10 seconds
      setTimeout(() => {
        logger.warn("Forcing shutdown due to timeout");
        process.exit(1);
      }, FORCE_SHUTDOWN_TIMEOUT).unref();
    };

    process.once("SIGINT", onCloseSignal);
    process.once("SIGTERM", onCloseSignal);
  } catch (error) {
    console.log(error);
    logger.error("Failed to initialize the data source:", error);
    process.exit(1);
  }
};

initServer();
