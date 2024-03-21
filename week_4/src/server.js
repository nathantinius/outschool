import http from "http";
import { router } from "./app.js";

const httpServer = http.createServer(router);
httpServer.listen(1005, () =>
    console.info(`Server running on port : 1005`)
);
