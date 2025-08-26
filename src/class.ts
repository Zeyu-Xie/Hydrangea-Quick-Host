import express from "express";
import type { Express, Request, Response } from "express";

export class SimpleServer {
    host: string;
    port: number;
    message: string;
    app: Express;

    constructor(config: { host: string; port: number; message?: string }) {
        this.host = config.host;
        this.port = config.port;
        this.message = config.message || `Host: ${config.host} Port: ${config.port}`;
        this.app = express();
        this.app.get("/", (_: Request, res: Response) => {
            res.send(this.message);
        });
    }

    deploy() {
        this.app.listen(this.port, this.host, () => {
            console.log(`Server running at http://${this.host}:${this.port}/`);
        });
    }
}