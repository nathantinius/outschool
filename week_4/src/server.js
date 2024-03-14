import http from "http";
import { router } from "./app.js";

const httpServer = http.createServer(router);
httpServer.listen(1003, () =>
    console.info(`Server running on port : 1003`)
);
